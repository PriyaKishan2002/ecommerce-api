import db from '../db.js'

export const Cart = {
  addItem: (userId, productId, quantity, callback) => {
    const query = 'INSERT INTO cart (user_id, product_id, quantity) VALUES (?, ?, ?)';
    db.query(query, [userId, productId, quantity], callback);
  },

  getItems: (userId, callback) => {
    const query = 'SELECT * FROM cart WHERE user_id = ?';
    db.query(query, [userId], callback);
  },

  updateItem: (userId, productId, quantity, callback) => {
    const query = 'UPDATE cart SET quantity = ? WHERE user_id = ? AND product_id = ?';
    db.query(query, [quantity, userId, productId], callback);
  },

  removeItem: (userId, productId, callback) => {
    const query = 'DELETE FROM cart WHERE user_id = ? AND product_id = ?';
    db.query(query, [userId, productId], callback);

  }
};

