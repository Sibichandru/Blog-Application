import express from 'express';
import mongoose from 'mongoose';
import router from './routes/user-routes.mjs';
import blogRouter from './routes/bolg-routes.js';

const app = express();
app.use(express.json());

app.use('/blogApp/user',router);
app.use('/blogApp/blogs',blogRouter)


mongoose
        .connect('mongodb+srv://username:password@cluster0.gnq731a.mongodb.net/Blog?retryWrites=true&w=majority'
        )
        .then(()=>app.listen(3000))
        .then(()=>console.log('connected and running in port 3000'))
        .catch((err)=>console.log(err));



// 4mGvHwWg91tIT99e
