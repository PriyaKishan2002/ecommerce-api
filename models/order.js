import db from "../db.js"
export const Order = {
  createOrder: (userId, callback) => {
    const query = 'INSERT INTO orders (user_id, status) VALUES (?, "pending")';
    db.query(query, [userId], callback);
  },

  updateStatus: (orderId, status, callback) => {
    const query = 'UPDATE orders SET status = ? WHERE id = ?';
    db.query(query, [status, orderId], callback);
  }
};

