import jwt from 'jsonwebtoken'
import { Users } from '../models/User.js'

const generateToken = (id) =>{
    return jwt.sign({id},process.env.JWT_SECRET , {expiresIn:'1h'})
}

export const registerUser = async(req,res)=>{
    const {fullName , email , password , profileImageUrl} = req.body;

    if(!fullName || !password || !email){
        return res.status(400).json({message:"All Feilds are Required"})
    }

    try{
        const existingUser = await Users.findOne({email});
        if(existingUser){
            return res.status(400).json({message:"Email Already in Use"})
        }

        const user = await Users.create({
            fullName , email , password , profileImageUrl
        })

        res.status(201).json({id:user._id , user , token:generateToken(user._id)});
    }catch(err){
        res.status(500).json({message:"Error Registering User",error:err.message})
    }
}

export const loginUser = async(req,res)=>{
    const {email , password} = req.body;
    if(!email || !password){
        return res.status(400).json({message:"Enter all Details"})
    }

    try{
        const user = await Users.findOne({email});
        if(!user || !(await user.comparePassword(password))){
            return res.status(400).json({message:"Imvalid User Credentials "})
        }
        res.status(200).json({
            id:user._id,
            user,
            token:generateToken(user._id)
        });
    }catch(err){
        res.status(500).json({message:"Error Logging in User",error:err.message})
    }
}
 
export const getUserInfo = async(req,res)=>{
    try{
        const user = await Users.findById(req.user.id).select("-password");

        if(!user){
            return res.status(404).json({message:"User Not Found"})
        }
        res.status(200).json(user);
    }catch(err){
        return res.status(500).json({message:"Error Registering User",error:err.message})
    }
}