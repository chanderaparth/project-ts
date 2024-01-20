import express from 'express';
import { tokenAdmin } from '../../helpers/tokenAdmin';
import { showAllOrder, specificOrder } from '../../controller/admin/order_controller';
const orderRoute = express.Router();

orderRoute.get('/showall-order', tokenAdmin, showAllOrder);
orderRoute.get('show-order', tokenAdmin, specificOrder);

export default orderRoute;