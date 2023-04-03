import User from "../model/User.js";
import bcrypt from'bcryptjs';

export const getAllUsers = async(req,res,next) =>{
    
    let users;
    try {
        users = await User.find();
    } catch (err) {
        console.log(err);        
    }
    if (!users){
        return res.status(404).json({message:"no user found"});
    }
    return res.status(200).json({users});
};

export const signup = async (req, res,next) => {
    const {name,email,password,blogs} = req.body;
    let existingUser;
    try{
        existingUser = await User.findOne({email});
    }catch (err) {
      return  console.log(err);
    }
    if(existingUser){
        return res.status(400).json({message:"already available"});
    }
    const hashPassword = bcrypt.hashSync(password);
    const user = new User({
        name, 
        email,
        password:hashPassword,
        blogs: []
    });
 
    try {
        await user.save();
    } catch (error) {
        console.log(error);
    }
    return res.status(201).json({user});
}

export const login = async (req, res,next) => {
    const {email,password} = req.body;
    let existingUser;
    try{
        existingUser = await User.findOne({email});
    }catch (err) {
      return  console.log(err);
    }
    if(!existingUser){
        return res.status(404).json({message:"No User Found!"});
    }
    const isPasswordCorrect = bcrypt.compareSync(password,existingUser.password);
    if(!isPasswordCorrect){
        return res.status(400).json({message:"password invalid"});
    }
    return res.status(200).json({message:"Login Successful"});
}