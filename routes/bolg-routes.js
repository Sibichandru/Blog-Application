import express from 'express';
import { deleteBlog, getAllBlogs, getBlog, getUserBlogs, newBlog, updateBlog } from '../controllers/blog-controller.js';

const blogRouter = express.Router();

blogRouter.get('/',getAllBlogs);
blogRouter.post('/newBlog',newBlog);
blogRouter.put('/updateBlog/:id',updateBlog);
blogRouter.get('/:id',getBlog);
blogRouter.delete('/delete/:id',deleteBlog);
blogRouter.get('/user/:id',getUserBlogs);

export default blogRouter;