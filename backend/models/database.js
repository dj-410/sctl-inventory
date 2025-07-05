import Database from 'better-sqlite3';
import path from 'path';
import bcrypt from 'bcrypt';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Setup database path
const dbPath = path.join(__dirname, '../app.db');
const db = new Database(dbPath);

// Enable foreign keys
db.pragma('foreign_keys = ON');

// Initialize tables
function initializeDatabase() {
  try {
    db.exec(`
      CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        email TEXT UNIQUE NOT NULL,
        password TEXT NOT NULL,
        role TEXT DEFAULT 'staff',
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
      );
    `);

    db.exec(`
      CREATE TABLE IF NOT EXISTS posts (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT NOT NULL,
        content TEXT,
        user_id INTEGER,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (user_id) REFERENCES users (id)
      );
    `);

    console.log('✅ Database initialized');
  } catch (err) {
    console.error('❌ Error initializing database:', err);
  }
}

// Run immediately
initializeDatabase();

// Predefined statements
const dbOperations = {
  // Users
  createUser: db.prepare('INSERT INTO users (name, email, password, role) VALUES (?, ?, ?, ?)'),
  getUserById: db.prepare('SELECT * FROM users WHERE id = ?'),
  getUserByEmail: db.prepare('SELECT * FROM users WHERE email = ?'),
  getAllUsers: db.prepare('SELECT * FROM users ORDER BY created_at DESC'),
  updateUser: db.prepare('UPDATE users SET name = ?, email = ?, role = ? WHERE id = ?'),
  deleteUser: db.prepare('DELETE FROM users WHERE id = ?'),

  // Posts
  createPost: db.prepare('INSERT INTO posts (title, content, user_id) VALUES (?, ?, ?)'),
  getPostById: db.prepare('SELECT * FROM posts WHERE id = ?'),
  getPostsByUser: db.prepare('SELECT * FROM posts WHERE user_id = ? ORDER BY created_at DESC'),
  getAllPosts: db.prepare(`
    SELECT p.*, u.name AS author_name, u.email AS author_email 
    FROM posts p 
    LEFT JOIN users u ON p.user_id = u.id 
    ORDER BY p.created_at DESC;
  `),
  updatePost: db.prepare('UPDATE posts SET title = ?, content = ? WHERE id = ?'),
  deletePost: db.prepare('DELETE FROM posts WHERE id = ?'),

  // Stats
  getUserCount: db.prepare('SELECT COUNT(*) as count FROM users'),
  getPostCount: db.prepare('SELECT COUNT(*) as count FROM posts')
};

// Hash password using bcrypt (secure)
async function hashPassword(password) {
  const saltRounds = 10;
  return await bcrypt.hash(password, saltRounds);
}

// Compare plain and hashed password
async function verifyPassword(plainPassword, hashedPassword) {
  return await bcrypt.compare(plainPassword, hashedPassword);
}

// Create a new secure staff user
async function createSecureUser(name, email, plainPassword, role = 'staff') {
  try {
    const hashed = await hashPassword(plainPassword);
    dbOperations.createUser.run(name, email, hashed, role);
    console.log(`✅ Staff user created: ${email}`);
  } catch (err) {
    if (err.code === 'SQLITE_CONSTRAINT_UNIQUE') {
      console.error('⚠️ User already exists.');
    } else {
      console.error('❌ Failed to create user:', err.message);
    }
  }
}

export {
  db,
  dbOperations,
  hashPassword,
  verifyPassword,
  createSecureUser,
  initializeDatabase
};
