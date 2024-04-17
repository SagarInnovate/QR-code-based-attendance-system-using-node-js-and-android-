const db=require("../config/database");
// const session = require('express-session');

function renderstudentLogin(req,resp){
resp.render('student/login')
}


//post login
postLogin=(req,resp)=>{
const prn=req.body.prn;
const password=req.body.password;

db.query('SELECT * from students where prn=?',[prn],(err,result)=>{

    if (err) {
        console.error(err);
        resp.status(500).send('Internal Server Error');
        return;
    }
    if (result.length !=0 && password=='123456') {

        req.session.studentLoggedIn = true;
        req.session.studentPRN = prn;
        resp.redirect('/student/dashboard');
       
    } else {
         // Invalid credentials or student not found
         resp.send('Invalid PRN or password. Please try again.');
        
    }

})

}

//dashboard
studentDashboard=(req,resp)=>{
const studentPRN = req.session.studentPRN;

    
    db.query('SELECT date, time_in, time_out FROM entries WHERE prn = ?', [studentPRN], (error, results) => {
        if (error) throw error;
        const studentEntries = results;
        resp.render('student/dashboard', { studentPRN, studentEntries });
    });

}

// ajax call for enter in lab
enterLabAJAX=(req,resp)=>{
    const studentPRN = req.session.studentPRN;
    const currentDateTime = new Date();
    const selectedLab = req.body.lab;

    // Insert a new entry in the database for "In"
    // Replace this with your actual database insert query
    db.query('INSERT INTO entries (prn, date, time_in,lab_no) VALUES (?, ?, ?,?)', [studentPRN, currentDateTime, currentDateTime,selectedLab], (error, results) => {
        if (error) throw error;
        req.session.currentLab = selectedLab;
        resp.send(`Entered Lab: ${selectedLab}`);
    });

    
}



exitLabAJAX = (req, res) => {
    // Remove the present lab from the session
    delete req.session.currentLab;

    const studentPRN = req.session.studentPRN;
    const currentDateTime = new Date();

    // Update the most recent entry in the database for the student with "Out" time
    // Replace this with your actual database update query
    db.query('UPDATE entries SET time_out = ? WHERE prn = ? AND time_out IS NULL ORDER BY date DESC ', [currentDateTime, studentPRN], (error, results) => {
        if (error) throw error;
        res.send('Lab exit marked successfully'); // Send a response indicating success
    });
};

postRegister=(req,resp)=>{
const {username,password,email}=req.body;
db.query("insert into students (prn,name,class) values (?,?,?)",[username,password,"3 year"],(err,result)=>{
resp.send("registration successfull....plz login now");
});

}

renderstudentRegister=(req,resp)=>{
resp.render('student/signup');
}


module.exports={renderstudentLogin,postLogin,studentDashboard,enterLabAJAX,exitLabAJAX,postRegister,renderstudentRegister}