const express = require('express');
const cors = require('cors');

const app = express();


// Init Middlewares
app.use(express.json({ extended: false }), cors());

const PORT = process.env.PORT || 5000

app.get('/', (req, res) => res.send('API Running'));

app.use('/feedback_api/feedback', require('./routes/api/feedback'));

app.listen(PORT, () => console.log(`Server started on post ${PORT}`));