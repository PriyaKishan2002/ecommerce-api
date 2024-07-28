import express from 'express'
import userRoutes from './routes/userroute.js';
import cartRoutes from './routes/cartroute.js';
import orderRoutes from './routes/orderroute.js'
const app = express();
app.use(express.json());
app.use('/auth', userRoutes);
app.use('/cart',cartRoutes);
app.use('/order',orderRoutes)
app.listen(3030,() =>{
    console.log("Application is running");
})