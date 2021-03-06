const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');


const app = express();

// BodyParser use in  Middleware
app.use(bodyParser.json());

// DB Config
const db = require('./config/keys').mongoURI;

// Connect to Mongo
mongoose
    .connect(db)
    .then(()=> console.log('MongoDB Connected...'))
    .catch(err => console.log(err));

// Use Routes    
app.use('/api/items', require('./routes/api/items'));  
//app.use('/api/users', require('./routes/api/users'));  

// Serve static assets if in production

const port = process.env.PORT || 5000   

app.listen(port, ()=> console.log(`Server started on this port ${port}`));