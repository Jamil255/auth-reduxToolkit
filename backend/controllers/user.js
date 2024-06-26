import userModel from '../models/userSchema.js'
import bcrypt, { hash } from 'bcrypt'
import jwt from 'jsonwebtoken'
export const createAccountFun = async (req, res) => {
  try {
    const { email, password, fullName } = req.body
    if (!fullName || !email || !password) {
      return res.status(400).json({
        message: 'all the fields are  required',
        data: [],
        status: 'error',
      })
    }
    const user = await userModel.findOne({ email })
    if (user !== null) {
      return res.status(400).json({
        message: 'email are already exist',
        status: 'error',
      })
    }
    const hashPassword = await bcrypt.hash(password, 12)
    const userData = await userModel.create({
      fullName,
      email,
      password: hashPassword,
    })
    return res.status(201).json({
      message: 'User created successfully',
      status: 'success',
      data: userData,
    })
  } catch (error) {
    return res.status(500).json({
      message: error.message,
      status: 'error',
      data: [],
    })
  }
}
export const loginAccountFun = async (req, res) => {
  try {
    const { email, password } = req.body
    if (!email || !password) {
      return res.status(400).json({
        message: 'all the fields are  required',
        data: [],
        status: 'error',
      })
    }
    const user = await userModel.findOne({ email })
    if (!user) {
      return res.status(400).json({
        message: 'email and password incorrect',
        status: 'error',
      })
    }

    const comparePassword = await bcrypt.compare(password, user?.password)
    if (!comparePassword) {
      return res.status(400).json({
        message: 'email and password incorrect',
        status: 'error',
      })
    }

    const token = jwt.sign(
      {
        _id: user._id,
        email: user?.email,
      },
      process.env.SCERET_KEY
    )
    //   console.log(res.cookie);
    res.cookie('token', token, {
      maxAge: 24 * 60 * 60 * 1000, // 1 day
      httpOnly: true, // Not accessible via JavaScript
      secure: true, // Only set secure flag in production
      sameSite: 'None', // Cross-site requests
      domain: 'http://localhost:5173/', // Set domain if needed
      path: '/', // Set path if needed
    })

    return res.status(200).json({
      message: 'user successfully login',
      data: user,
      token,
      status: 'success',
    })
  } catch (error) {
    return res.status(500).json({
      message: error.message,
      data: [],
      status: 'error',
    })
  }
}
