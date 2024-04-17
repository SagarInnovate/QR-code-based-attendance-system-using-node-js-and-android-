const express=require('express');
const session=require('express-session');
const { renderLogin, postLogin, labDashboard, labStudentSearch } = require('../controllers/labControllers');

const app=express();
const router=express.Router();

router.use((req, res, next) => {
    if(req.originalUrl=="/lab/login"){
        if(req.session.labLoggedIn){
           res.redirect('/lab/dashboard');
        }else{
           next(); 
        }
    
    
    }
        else if (!req.session.labLoggedIn) {
            // Redirect to the login page only if not logged in
            res.redirect('/lab/login');
        } else {
            next();
        }
    });

router.get('/',(req,resp)=>{

    resp.redirect('/lab/dashboard');
});

router.get('/login',renderLogin);
router.post('/login',postLogin);
router.get('/dashboard',labDashboard);
router.get('/search',labStudentSearch );
router.get('/filter',labStudentFilter);


module.exports=router;