import express from 'express';

const app = express();
const port = 8800 || process.env.PORT

app.listen(port, () => {
   console.log('Connected to port ' + port);
});