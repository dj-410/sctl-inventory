import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import authRoutes from './routes/authRoutes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);

// Serve frontend
const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, 'src', 'dist')));  // Update if build folder is different

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'src', 'dist', 'index.html'));
});

// Start Server
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
