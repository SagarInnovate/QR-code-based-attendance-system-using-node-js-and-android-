const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const app = express();
const studentRouter=require('./routes/studentRoutes')
const labRouter=require('./routes/labRoutes');
const apiRouter=require('./routes/apiRouter');


app.use(session({
    secret: 'your-secret-key', // Replace with a strong secret key
    resave: false,
    saveUninitialized: true,
}));


// Configure middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.set('view engine', 'ejs');
app.use(express.static('public'));


app.use('/student', studentRouter);
app.use('/lab', labRouter);
app.use('/api',apiRouter);


app.get('/',(req,resp)=>{
    resp.render('main');
})



const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});