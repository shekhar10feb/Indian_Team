// const express = require('express');
// const dotenv = require('dotenv');
// const path = require('path');
import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import cors from 'cors';
// const route = require('./routes/route.js');
import routes from './routes/route.js';

dotenv.config();

const app = express();

// enable CORS
app.use(cors());

// Middleware
app.use(express.json());

// Define Routes
app.use('/api', routes);

const port = 3000;

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})