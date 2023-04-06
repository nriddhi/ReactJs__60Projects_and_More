const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const fileUpload = require("express-fileupload");
const { readdirSync } = require("fs");
const dotenv = require("dotenv");
var cookieParser = require('cookie-parser');

dotenv.config();
const PORT = process.env.PORT || 8000;

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors({
  origin: true,
  credentials: true
}
));
app.use(
  fileUpload({
    useTempFiles: true,
  })
);
//routes
readdirSync("./routes").map((r) => app.use("/", require("./routes/" + r)));


mongoose.set("strictQuery", false);
mongoose.connect(process.env.DATABASE_URL)
.then(console.log('MongoDB Connected'))
.catch((err) => console.log(err));

app.listen(PORT, () => {
    console.log('Server is running on Port ' + PORT);
})
