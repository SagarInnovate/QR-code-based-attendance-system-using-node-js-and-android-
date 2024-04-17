const express = require("express");
const router = express.Router();
const PDFDocument = require('pdfkit');
const { renderstudentLogin, postLogin, studentDashboard,enterLabAJAX,renderstudentRegister,postRegister } = require('../controllers/studentController');
// const { render } = require("ejs");
const session = require("express-session");

// Middleware to check if the student is logged in
router.use((req, res, next) => {
if(req.originalUrl=="/student/login" ||req.originalUrl=="/student/register" ){
    if(req.session.studentLoggedIn){
       res.redirect('/student/dashboard');
    }else{
       next(); 
    }


}

    else if (!req.session.studentLoggedIn) {
        // Redirect to the login page only if not logged in
        res.redirect('/student/login');
    } else {
        next();
    }
});

router.get('/', (req, resp) => {
    resp.redirect('/dashboard');
});

router.get('/dashboard', studentDashboard);
router.get("/login", renderstudentLogin);
router.post("/login", postLogin);
router.post('/enterLab', enterLabAJAX);
router.post('/exitLab', exitLabAJAX);
router.get('/register',renderstudentRegister);
router.post('/register',postRegister);


// router.post('/checkStatus', checkLabStatus);


module.exports = router;
