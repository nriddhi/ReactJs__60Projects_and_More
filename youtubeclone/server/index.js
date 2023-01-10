import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

const app = express();
dotenv.config();
const port = 8800 || process.env.PORT;

mongoose.set("strictQuery", false);
mongoose.connect(process.env.MONGO_URL)
.then(console.log('MongoDB Connected'))
.catch((err) => console.log(err));

app.listen(port, () => {
   console.log('Connected to port ' + port);
});