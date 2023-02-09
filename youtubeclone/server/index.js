const express = require('express');
const dotenv = require('dotenv').config();
const mongoose = require('mongoose');
const userRoutes = require('./routes/Users.js');
const videoRoutes = require('./routes/Videos.js');
const commentRoutes = require('./routes/Comments.js');
const session = require('express-session');
const authRoutes = require('./routes/Auth.js');
const passport = require('passport');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const passportSetup = require('./Passport.js');

const app = express();
const port = 8000 || process.env.PORT;

app.use(cors({
   origin: true, //included origin as true
   credentials: true, //included credentials as true
}
));
app.use(cookieParser());
app.use(session({
   secret: 'keyboard cat',
   resave: false,
   saveUninitialized: false,
 }));

app.use(cors({
   origin: true, //included origin as true
   credentials: true, //included credentials as true
}
));

app.use(express.json());
app.use(cookieParser());

app.use(passport.initialize());
app.use(passport.authenticate('session'));


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