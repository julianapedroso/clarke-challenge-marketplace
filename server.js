require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();

const port = process.env.PORT || 8080;

// Cors
app.use(cors());

app.use(express.json());

// API routes
const providerRoutes = require('./routes/providersRoutes');
app.use('/providers', providerRoutes);

// Environment variables
const DB_USER = process.env.DB_USER;
const DB_PASSWORD = encodeURIComponent(process.env.DB_PASSWORD);

// Connection with MongoDB
mongoose
  .connect(
    `mongodb+srv://${DB_USER}:${DB_PASSWORD}@apicluster.1h6vg.mongodb.net/bancoapi?retryWrites=true&w=majority`
  )
  .then(() => {
    app.listen(port, () => {
      console.log(`Server listening on port ${port}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
