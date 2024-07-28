import express from 'express';
import { createOrder, updateOrderStatus } from '../controllers/ordercontrol.js';

const router = express.Router();

router.post('/create',createOrder)
router.post('/update-status',updateOrderStatus)

export default router;