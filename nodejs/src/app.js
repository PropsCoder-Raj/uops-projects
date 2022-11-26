const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');

require('dotenv').config();

const connectWithDb = require("./api/config/db");
const middlewares = require('./api/middleware/errorMiddleware');

const app = express();

connectWithDb(); // Connect to the database

app.use(morgan('dev'));
app.use(helmet());
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({
    message: '🦄🌈✨👋🌎🌍🌏✨🌈🦄',
  });
});

app.use('/api/v1/user', require('./api/routes/user')); // User routes
app.use('/api/v1/course', require('./api/routes/course')); // Course routes
app.use('/api/v1/attendance', require('./api/routes/attendance')); // Course routes
app.use('/api/v1/admin', require('./api/routes/admin')); // Admin routes

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

module.exports = app;
