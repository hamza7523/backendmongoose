import mongoose from 'mongoose';
import express from 'express';
import cors from 'cors';
import cookies from 'cookie-parser';
import connectDb from '../db/index.js';
import userRouter from '../routes/user.routes.js';

const app = express();

// 1. Connect to MongoDB
connectDb();

// 2. Middleware
app.use(cors({
  origin: process.env.CORS_ORIGIN || 'http://localhost:3000',
  credentials: true,
}));
app.use(express.json({ limit: '16kb' }));
app.use(express.urlencoded({ extended: true, limit: '16kb' }));
app.use(express.static('public'));
app.use(cookies());

// 3. Routes
app.use('/api/v1/users', userRouter);
app.get('/', (req, res) => {
  res.send('Server is working!');
});
app.post('/api/test', (req, res) => {
  console.log('POST body:', req.body);
  res.json({ message: 'Got your POST', data: req.body });
});

// 4. Start the HTTP server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`🚀  Server listening on http://localhost:${PORT}`);
});
