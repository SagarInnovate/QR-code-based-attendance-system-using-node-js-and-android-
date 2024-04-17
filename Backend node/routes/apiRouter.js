const express= require("express");
const app=express();
const { entires, postEntries, signup, login, lab_exit}=require('../controllers/apiController');
const router=express.Router();

router.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
  });

router.get('/entries',entires);
router.post('/entries',postEntries);
router.post('/signup',signup);
router.post('/login',login);
router.post('/exitLab',lab_exit)


module.exports=router;