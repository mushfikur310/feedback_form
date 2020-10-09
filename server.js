const express = require('express');
// const connectDB = require('./config/db');
const cors = require('cors');

const app = express();

// Connect Database
// connectDB();

// Init Middlewares
app.use(express.json({ extended: false }), cors());

const PORT = process.env.PORT || 5000

app.get('/', (req, res) => res.send('API Running'));

app.use('/api/feedback', require('./routes/api/feedback'));

app.listen(PORT, () => console.log(`Server started on post ${PORT}`));