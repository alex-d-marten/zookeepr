const express = require('express');
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');
const app = express();

const PORT = process.env.PORT || 3001;

// instantiate the server here

// parse incoming string or array data
app.use(express.urlencoded({ extended: true }))

// parse incoming JSON data
app.use(express.json())
app.use(express.static('public'));

app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

// use public folder so we can use css and js files

// adding a listener for the server events
app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}`);
})