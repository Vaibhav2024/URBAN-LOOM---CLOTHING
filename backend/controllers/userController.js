import { userModel } from "../models/userModel.js";
import bcrypt from "bcrypt"
import validator from 'validator'

// Route for user login
const loginUser = async (req, res) => {

}


// Route for user registration
const registerUser = async (req, res) => {
    try {
        const {name, email, password} = req.body;
        // checking user already exists or not
        const exists = await userModel.findOne({email})
        if (exists) {
            return res.json({success: false, message: "User Already exists"})
        }

        // validating email format and stronf password
        if (!validator.isEmail(email)) {
            return res.json({success: false, message: "Please Enter a Valid Email"})
        }

        if (password.length < 8) {
            return res.json({success: false, message: "Please Enter a Strong Password"})
        }

        // hashing user password
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        const newUser = new userModel({
            name,
            email,
            password: hashedPassword
        })

        const user = await newUser.save()

    } catch (error) {
        
    }
}

// Route for admin login
const adminLogin = async (req, res) => {

}



export { loginUser, registerUser, adminLogin }