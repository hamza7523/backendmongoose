import mongoose from 'mongoose';
import express from 'express';
import { DB_NAME } from '../utils/constants.js';

import dotenv from 'dotenv';
dotenv.config({ path: 'E:/Backend Development/newProject/backendmongoose/src/.env' });

const connectDb = async ()=>{
        console.log(`Connecting to MongoDB at ${process.env.MONGODB_URI}/${DB_NAME}`);

    try{
        console.log(`Connecting to MongoDB at ${process.env.MONGODB_URI}/${DB_NAME}`);
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`, {
        });
        console.log('Connected to MongoDB at 3000');
        
    }catch(err){
        console.error('Error connecting to MongoDB:', err);
        process.exit(1)
    }
}
export default connectDb;


