const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

// static files
app.use(express.static('public'));

// API
const api = require('./routes/api');
app.use('/api', api);





const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`App listening on port ${port}`));
