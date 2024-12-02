import express from 'express'
import { addToCart, getUserCart } from '../controllers/cartController.js'
import authUser from '../middleware/auth.js'

const cartRoute = express.Router()

cartRoute.post('/get',authUser, getUserCart)
cartRoute.post('/add',authUser, getUserCart)
cartRoute.post('/update',authUser, getUserCart)

export default cartRoute