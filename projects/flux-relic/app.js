const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = 5001;

// Mock data
const products = [
  { product: 'Headphones', Dealers: ['Dealer1', 'Dealer2', 'Dealer3'] },
  { product: 'Laptop', Dealers: ['Dealer1', 'Dealer2', 'Dealer3'] },
  { product: 'Mouse', Dealers: ['Dealer1', 'Dealer2'] },
  { product: 'Printer', Dealers: ['Dealer1', 'Dealer2', 'Dealer3', 'Dealer4'] },
];

// Enable CORS
app.use(cors());

// Serve static HTML file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'html', 'index.html'));
});

// Endpoint to get products
app.get('/products', (req, res) => {
  res.json(products);
});

// Endpoint to get dealers for a product
app.get('/getdealers/:product', (req, res) => {
  const product = req.params.product;
  const productData = products.find(p => p.product === product);
  if (productData) {
    res.json({ dealers: productData.Dealers });
  } else {
    res.status(404).send('Product not found');
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});