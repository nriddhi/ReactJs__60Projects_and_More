import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import userRoutes from './routes/Users.js';
import videoRoutes from './routes/Videos.js';
import commentRoutes from './routes/Comments.js';
import authRoutes from './routes/Auth.js';

const app = express();
dotenv.config();
const port = 8000 || process.env.PORT;


app.use('/api/users', userRoutes);
app.use('/api/videos', videoRoutes);
app.use('/api/comments', commentRoutes);
app.use('/api/auth', authRoutes);


mongoose.set("strictQuery", false);
mongoose.connect(process.env.MONGO_URL)
.then(console.log('MongoDB Connected'))
.catch((err) => console.log(err));

app.listen(port, () => {
   console.log('Connected to port ' + port);
});