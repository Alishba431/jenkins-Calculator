// src/app.js
const express = require('express');
const { add, subtract, multiply, divide } = require('./calculator');

const app = express();
app.use(express.json());

// Add route
app.get('/add', (req, res) => {
  const { a, b } = req.query;
  res.json({ result: add(Number(a), Number(b)) });
});

// Subtract route
app.get('/subtract', (req, res) => {
  const { a, b } = req.query;
  res.json({ result: subtract(Number(a), Number(b)) });
});

// Multiply route
app.get('/multiply', (req, res) => {
  const { a, b } = req.query;
  res.json({ result: multiply(Number(a), Number(b)) });
});

// Divide route
app.get('/divide', (req, res) => {
  const { a, b } = req.query;
  try {
    res.json({ result: divide(Number(a), Number(b)) });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = app;
