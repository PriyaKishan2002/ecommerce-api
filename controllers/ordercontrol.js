import {Order} from '../models/order.js'
import { Cart } from '../models/cart.js';

export const createOrder = (req, res) => {
  const { userId } = req.body;
  Order.createOrder(userId, (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    
    // Assuming that order creation clears the cart
    Cart.getItems(userId, (err, cartItems) => {
      if (err) return res.status(500).json({ error: err.message });

      // You would normally handle order items here

      // Clear the cart
      cartItems.forEach(item => {
        Cart.removeItem(userId, item.product_id, () => {});
      });

      res.status(201).json({ message: 'Order created successfully', orderId: results.insertId });
    });
  });
};

export const updateOrderStatus = (req, res) => {
  const { orderId, status } = req.body;
  Order.updateStatus(orderId, status, (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(200).json({ message: 'Order status updated' });
  });
};

