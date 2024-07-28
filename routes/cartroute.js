import express from 'express';
import { addItem, getItems, removeItem, updateItem } from '../controllers/cartcontrol.js';

const router = express.Router();

router.post('/additem',addItem)
router.put('/updateitem',updateItem)
router.get('/items/:userId',getItems)
router.delete('/remove/:userId/:productId',removeItem)


export default router;