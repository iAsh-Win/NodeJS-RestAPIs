// server.js
const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./utils/db');
const userRoutes = require('./routes/userRoutes');
const errorHandler = require('./middleware/errorHandler');

dotenv.config();

const app = express();
connectDB();

app.use(express.json());

app.use(userRoutes);

app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
