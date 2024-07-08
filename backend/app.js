// const express = require('express');
// const dotenv = require('dotenv');
// const path = require('path');
import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import cors from 'cors';
import { data } from './data';
// const route = require('./routes/route.js');

dotenv.config();

const app = express();

// enable CORS
app.use(cors());

// Middleware
app.use(express.json());

// Define Routes
// app.use('/api', routes);
app.get('/api/superhero', async (req, res) => {
  try {
    return res.json(data);
  } catch (err) {
    return res.status(500).send('Server Error');
  }
})

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`)
})