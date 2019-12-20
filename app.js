// app.js
// https://stackabuse.com/how-to-start-a-node-server-examples-with-the-most-popular-frameworks/
const express = require('express')
const fs = require('fs');     // to help serve a local video file
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const path = require('path');

var commonRoutes                  = require('./routes/commonRoutes');


// Create Express app
const app = express()
app.use(express.static('.'));     // provide access to static files
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
// A sample route
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', commonRoutes);
// app.get('/', (req, res) => res.send('Hello World - Andrea!'))

// Start the Express server
app.listen(3000, () => console.log('Server running on port 3000!'))