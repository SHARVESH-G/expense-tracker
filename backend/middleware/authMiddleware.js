import jwt from 'jsonwebtoken'
import { Users } from '../models/User.js'

export const protect =async(req,res)=>{
    let token = req.headers.authorization?.split(" ")[1];
    if(!token){
        return res.status(401).json({message:"Not Logged In"})
    }

    try{
        const decoded = jwt.verify(token , process.env.JWT_SECRET);
        req.user = await Users.findById(decoded.id).select('-password');
        next();
    }catch(err){
        req.status(401).json({message:"Not Authorized Token Failed"})
    }
}