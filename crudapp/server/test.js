const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(cors());

let data = [
  { id: 1, name: 'John Doe', email: 'john@example.com', phone: '555-1234' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', phone: '555-5678' },
  { id: 3, name: 'Bob Johnson', email: 'bob@example.com', phone: '555-9012' },
  { id: 4, name: 'Alice Williams', email: 'alice@example.com', phone: '555-3456' },
  { id: 5, name: 'Mike Brown', email: 'mike@example.com', phone: '555-7890' },
];

app.get('/api/data', (req, res) => {
  const { page, limit } = req.query;
  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;
  const items = data.slice(startIndex, endIndex);
  res.json({ items, totalItems: data.length });
});

app.post('/api/data', (req, res) => {
  const item = req.body;
  item.id = data.length + 1;
  data.push(item);
  res.json(item);
});

app.put('/api/data/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const itemIndex = data.findIndex((item) => item.id === id);
  if (itemIndex >= 0) {
    const item = req.body;
    item.id = id;
    data[itemIndex] = item;
    res.json(item);
  } else {
    res.status(404).json({ message: 'Item not found' });
  }
});

app.delete('/api/data/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const itemIndex = data.findIndex((item) => item.id === id);
  if (itemIndex >= 0) {
    data.splice(itemIndex, 1);
    res.json({ message: 'Item deleted' });
  } else {
    res.status(404).json({ message: 'Item not found' });
  }
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
