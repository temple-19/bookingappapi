import express from 'express';
import {
  createHotel,
  deleteHotel,
  getHotel,
  updateHotel,
  getHotels,
  countByCity,
  countByType,
  getHotelRooms,
} from '../controllers/hotel.js';
import Hotel from '../models/Hotel.js';
import { verifyAdmin } from '../utils/verifyToken.js';
const hotelsRoute = express.Router();

//create
hotelsRoute.post('/', verifyAdmin, createHotel);
//update
hotelsRoute.put('/:id', verifyAdmin, updateHotel);
//delete
hotelsRoute.delete('/:id', verifyAdmin, deleteHotel);
//get
router.get('/find/:id', getHotel);
//getall
hotelsRoute.get('/', getHotels);
hotelsRoute.get('/countByCity', countByCity);
hotelsRoute.get('/countByType', countByType);
hotelsRoute.get('/room/:id', getHotelRooms);
export default hotelsRoute;
