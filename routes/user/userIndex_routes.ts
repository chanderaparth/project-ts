import express from 'express';
import productRoute from './product_routes';
import cartRoute from './cart_routes';
import orderRoute from './order_routes';
import favouriteRoute from './favpurite_routes';
import reviewRoute from './review_routes';
const user = express.Router();

user.use('/product', productRoute);
user.use('/cart', cartRoute);
user.use('/order', orderRoute);
user.use('/fav', favouriteRoute);
user.use('/review', reviewRoute);

export default user;