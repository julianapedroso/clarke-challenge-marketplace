require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();

// Cors
app.use(cors());

app.use(express.json());

const PORT = process.env.PORT || 8080;

// Auth
app.use('/api/auth', require('./routes/auth'));

// Providers
const providerRoutes = require('./routes/providers');
app.use('/', providerRoutes);

// Credentials
const DB_USER = process.env.DB_USER;
const DB_PASS = encodeURIComponent(process.env.DB_PASS);

// Connection with MongoDB
mongoose
  .connect(
    `mongodb+srv://${DB_USER}:${DB_PASS}@apicluster.qflpa.mongodb.net/bancoapi?retryWrites=true&w=majority`
  )
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
