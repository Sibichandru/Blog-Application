import mongoose from "mongoose";
import Blog from "../model/Blog.js";
import User from "../model/User.js";

export const getAllBlogs = async (req, res, next) =>{
    let blogs;
    try {
        blogs = await Blog.find();
    } catch (error) {
        return console.log(error);
    }
    if(!blogs){
        return res.status(404).json({message:"no blogs available"});
    }
    return res.status(200).json({blogs:blogs});
}

export const newBlog = async(req,res,next)=>{
    const {title, description,image,user} =req.body;
    let existiingUser;
    try {
        existiingUser = await User.findById(user);
    } catch (error) {
        return console.log(error);
    }
    if(!existiingUser) {
        return res.status(400).json({Message:"no user found"});
    }
    const blog =new Blog({
        title,
        description,
        image,
        user
    });
    try {
        const session = await mongoose.startSession();
        session.startTransaction();
        await blog.save({session});
        existiingUser.blogs.push(blog);
        await existiingUser.save({session});
        await session.commitTransaction();
    } catch (error) {
        console.log(error);
        return res.status(500).json({Message:error});
    }   
    return res.status(200).json({blog});
}

export const updateBlog = async (req, res, next) => {
    const {title, description}=req.body;
    const blogId= req.params.id;
    let blog;
    try {
        blog = await Blog.findById(blogId,{
            title,
            description,
        });
        // blog.save();
    } catch (error) {
        return console.log(error);
    }
    if(!blog){
        return res.status(500).json({message:"blog not updated"});
    }
    return res.status(200).json({message:blog});
}

export const getBlog = async (req,res,next)=>{
    const blogId = req.params.id;
    let blog;
    try {
    blog = await Blog.findById(blogId);
    } catch (error) {
        return console.log(error);
    }
    if(!blog) return res.status(404).json({message:"no blog found"});
    return res.status(200).json({message:blog});
}

export const deleteBlog =async (req,res,next)=>{
    const blogId = req.params.id;
    let blog;
    try {
        blog =await Blog.findByIdAndRemove(blogId).populate('user');
        await blog.user.blogs.pull(blog);
        await blog.user.save();
    } catch (error) {
        return console.log(error);
    }
    if(!blog) return res.status(400).json({message:"Blog not Found"});

    return res.status(200).json({message:"deleted"});
}

export const getUserBlogs = async(req,res,next)=>{
    const user = req.param.id;
    let Userblogs;
    try {
        Userblogs =await User.findById(user).populate("blogs");
    } catch (error) {
        return console.log(error);
    }
    if(!user){
        return res.status(404).json({message:"no user found"});
    }
    return res.status(200).json({blogs:Userblogs});
}