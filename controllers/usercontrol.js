import {User} from '../models/user.js'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'
const JWT_SECRET = 'abcdefghijklmnop'; // Directly declare JWT secret here


export const register = (req, res) => {
  const { email, password } = req.body;
  User.register(email, password, (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json({ message: 'User registered successfully' });
  });
};

export const login = (req, res) => {
  const { email, password } = req.body;
  User.findByEmail(email, (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    if (results.length === 0) return res.status(401).json({ error: 'Invalid email or password' });

    bcrypt.compare(password, results[0].password, (err, isMatch) => {
      if (err) return res.status(500).json({ error: err.message });
      if (!isMatch) return res.status(401).json({ error: 'Invalid email or password' });

      const token = jwt.sign({ id: results[0].id }, JWT_SECRET, { expiresIn: '1h' });
      res.json({ token });
    });
  });
};

