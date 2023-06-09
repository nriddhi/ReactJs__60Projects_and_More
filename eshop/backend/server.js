const app = require("./app");
const mongoose = require("mongoose");
const port = process.env.PORT || 5000;

mongoose.connect(process.env.DB_URL)
.then(console.log('MongoDB Connected'))
.catch((err) => console.log(err));

app.listen(port, () => {
    console.log("Server is running on " +port);
});