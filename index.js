const express = require('express');
const app = express();
const port = 8000;


//Set up view engine
app.set('view engine' , 'ejs');
app.set('views' , './views');




app.use('/', require('./routes') );




app.listen(port, (err) => {
    if(err){console.log(`Error in fire up the server`,err); }

    console.log(`Successfully fire up the server and running on port ${port}`);
});