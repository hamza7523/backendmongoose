// src/utils/index.js
import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
const app = express();
// by default dotenv.config() will look for .env in your project root
dotenv.config();        

// constants.js lives alongside this file in `utils/`
import { DB_NAME } from './constants.js';

// connectDb is in src/db/index.js, so go up one level into db/
import connectDb from '../db/index.js';

(async () => {
  try {
    // await the connection so Node doesn’t exit immediately
    await connectDb();
    console.log('Connected to MongoDB');
    const PORT = process.env.PORT || 8000;
    app.listen(PORT, () => {
      console.log(`Server listening on http://localhost:${PORT}`);
    });
  } catch (err) {
    console.error(' Error connecting to MongoDB:', err);
    process.exit(1);
  }
})();
