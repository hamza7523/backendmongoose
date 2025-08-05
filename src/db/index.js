import mongoose from 'mongoose';
import express from 'express';
import { DB_NAME } from '../utils/constants.js';

import dotenv from 'dotenv';
dotenv.config({ path: 'E:/Backend Development/newProject/backendmongoose/src/.env' });
console.log('[db/index.js] loaded');
const connectDb = async ()=>{
    try{
        
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`, {
        });
        console.log('Connected to MongoDB at 3000');
        console.log('Database Name:', DB_NAME);
        
    }catch(err){
        console.error('Error connecting to MongoDB:', err);
        process.exit(1)
    }
}
connectDb().then(()=>{
    console.log('Database connection established successfully');
}).catch((err)=>{
    console.error('Database connection failed:', err);
    process.exit(1);
});
export default connectDb;


