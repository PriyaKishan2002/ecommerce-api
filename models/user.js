import db from '../db.js'
import bcrypt from 'bcryptjs'

export const User = {
  register: (email, password, callback) => {
    bcrypt.hash(password, 10, (err, hashedPassword) => {
      if (err) return callback(err);
      const query = 'INSERT INTO users (email, password) VALUES (?, ?)';
      db.query(query, [email, hashedPassword], callback);
    });
  },

  findByEmail: (email, callback) => {
    const query = 'SELECT * FROM users WHERE email = ?';
    db.query(query, [email], callback);
  }
};


