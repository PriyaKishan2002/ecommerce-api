import { Cart } from '../models/cart.js';
export const addItem = (req, res) => {
  const { userId, productId, quantity } = req.body;
  Cart.addItem(userId, productId, quantity, (err, results) => {
     console.log(productId)
    if (err) return res.status(500).json({ error: err.message });
    res.status(200).json({ message: 'Item added to cart' });
  });
};

export const getItems = (req, res) => {
  const { userId } = req.params;
  Cart.getItems(userId, (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
};

export const updateItem = (req, res) => {
  const { userId, productId, quantity } = req.body;
  Cart.updateItem(userId, productId, quantity, (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(200).json({ message: 'Item updated in cart' });
  });
};

export const removeItem = (req, res) => {
  const { userId, productId } = req.params;
  Cart.removeItem(userId, productId, (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(200).json({ message: 'Item removed from cart' });
  });
};

