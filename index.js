const express = require('express');
const app = express();
const port = 8000;

app.use('/', require('./routes/index')); // we can do './routes' also s it will automatically fetch index

// set up view engine
app.set('view engine', 'ejs');
app.set('views', './views');

app.listen(port, function(err){
    if(err)
        console.log(`Error in running server: ${err}`);
    console.log(`Server is running on port: ${port}`);
});