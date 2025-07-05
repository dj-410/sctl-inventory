// backend/createStaff.js

import { initializeDatabase, dbOperations, hashPassword } from './models/database.js';

// Step 1: Initialize tables
initializeDatabase();

// Step 2: Create staff user
const name = 'Admin';
const email = 'admin@example.com';
const plainPassword = 'admin123';

try {
  const hashed = await hashPassword(plainPassword); // ⏳ Wait for bcrypt to hash

  dbOperations.createUser.run(name, email, hashed, 'staff');

  console.log('✅ Staff user created!');
  console.log(`Email: ${email}, Password: ${plainPassword}`);
} catch (err) {
  if (err.code === 'SQLITE_CONSTRAINT_UNIQUE') {
    console.log('⚠️ Staff user already exists.');
  } else {
    console.error('❌ Error:', err.message);
  }
}
