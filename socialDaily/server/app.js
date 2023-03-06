const express = require('express');
const mongoose = require('mongoose'); 
var cookieParser = require('cookie-parser');
const dotenv = require('dotenv');
const helmet = require('helmet');
const morgan = require('morgan');
const cors = require('cors');
const authRoute = require('./routes/Auth');

dotenv.config();
const port = process.env.PORT || 5000;
const app = express();


//middleware
app.use(express.json());
app.use(cookieParser());
app.use(helmet());
app.use(morgan("common"));

app.use(cors({
    origin: true, //included origin as true
    credentials: true, //included credentials as true
}
));

app.use(['/api/auth','/valid','/users'], authRoute);


mongoose.set("strictQuery", false);
mongoose.connect(process.env.MONGO_URL)
.then(console.log('MongoDB Connected'))
.catch((err) => console.log(err));

app.listen(port, () => {
    console.log('Server is running on Port ' + port);
})