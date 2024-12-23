const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const categoryRoutes = require('./routes/categoryRoutes');
const questionRoutes = require('./routes/questionRoutes');

const app = express();
app.use(express.json());
app.use(cors());
app.use('/categories', categoryRoutes);
app.use('/questions', questionRoutes);

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/kartik')
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));

// Server setup
const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));