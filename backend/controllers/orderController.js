import { orderModel } from '../models/orderModel.js'
import { userModel } from '../models/userModel.js';

// PLacing orders using COD method
const placeOrder = async (req, res) => {
    try {
        const { userId, items, amount, address } = req.body;
        const orderData = {
            userId,
            items,
            address,
            amount,
            paymentMethod: "COD",
            payment: false,
            date: Date.now()
        }

        const newOrder = new orderModel(orderData)
        await newOrder.save()

        await userModel.findByIdAndUpdate(userId, {cartData: {}})

        res.json({success: true, message: "Order Placed"})
    } catch (error) {
        console.log(error)
        res.json({success: false, message: error.message})
    }
}
// PLacing orders using Stripe method
const placeOrderStripe = async (req, res) => {

}

// PLacing orders using Razorpay method
const placeOrderRazorpay = async (req, res) => {

}

// All Orders Data for admin panel
const allOrders = async(req, res) => {
    
}

// All Orders Data for Frontend
const userOrders = async(req, res) => {

}

// update Order status from admin panel
const updateStatus = async(req, res) => {

}

export {placeOrder, placeOrderStripe, placeOrderRazorpay, allOrders, userOrders, updateStatus}