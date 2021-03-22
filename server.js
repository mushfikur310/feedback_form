const express = require('express');
const cors = require('cors');

const app = express();

let corsOptions = {
  origin: ['*','http://localhost:3001','http://dev.prabandhak.in/feedback/'],
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}
// Init Middlewares
app.use(express.json({ extended: false }), cors(corsOptions));

const PORT = process.env.PORT || 5000
app.options('/feedback_api/feedback', cors(corsOptions))
app.get('/', (req, res) => res.send('API Running'));

app.use('/feedback_api/feedback', cors(corsOptions), require('./routes/api/feedback'));

app.listen(PORT, () => console.log(`Server started on post ${PORT}`));