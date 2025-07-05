import { dbOperations, verifyPassword } from '../models/database.js';
import jwt from 'jsonwebtoken'; // Optional: for real token generation

export const loginUser = async (req, res) => {
  const { email, password } = req.body;

  // 1. Validate input
  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password are required' });
  }

  try {
    // 2. Get user by email
    const user = dbOperations.getUserByEmail.get(email);

    if (!user) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    // 3. Verify password
    const isValid = await verifyPassword(password, user.password);
    if (!isValid) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    // 4. Create a dummy token or JWT
    const token = 'abc.def.ghi'; // or use jwt.sign(...) if JWT is configured

    // 5. Respond with expected format
    return res.status(200).json({
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role
      },
      token,
      message: 'Login successful'
    });
  } catch (err) {
    console.error('❌ Login error:', err.message);
    return res.status(500).json({ message: 'Internal server error' });
  }
};
