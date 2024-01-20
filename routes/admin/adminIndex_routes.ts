import express from 'express';
import adminRoute from './admin_routes';
import productRoute from './product_routes';
import cartRoute from './cart_routes';
import orderRoute from './order_routes';
import reviewRoute from './review_routes';
const admin = express.Router();

admin.use('/', adminRoute);
admin.use('/product', productRoute)
admin.use('/cart', cartRoute);
admin.use('/order', orderRoute);
admin.use('/review', reviewRoute);

export default admin