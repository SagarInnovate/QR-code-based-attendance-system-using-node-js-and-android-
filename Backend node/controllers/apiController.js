const db=require('../config/database');

entires=(req,resp)=>{
const studentPRN = req.query.prn;
db.query('select * from entries where prn=?',[studentPRN],(error,result)=>{

    if(error){
        console.error(error);
        resp.status(500).send('Internal Server Error');
    }else{
        resp.json(result);
    }
});
}

lab_exit=(req,resp)=>{
const {time_out,prn}=req.body;
db.query('UPDATE entries SET time_out = ? WHERE prn = ? AND time_out IS NULL ORDER BY date DESC ', [time_out, prn], (err, results) => {
    if (err) {
        console.error(err);
        return resp.status(500).json({ success: false, message: 'Internal Server Error' });
    } else {
        return resp.status(200).json({ success: true, message: 'Exit Successful'});
    }
});
}

postEntries = (req, res) => {
  
    const { prn, date, time_in, time_out, lab_no, department } = req.body;

    if (!prn || !date || !lab_no) {
        return res.status(400).json({ success: false, message: 'Missing required data: PRN, Date, and Lab Number' });
    }
    
    // Add more specific validation as needed
    
    const entry = { prn, date, time_in, lab_no, department };
    
    db.query('INSERT INTO entries (prn,date, time_in, lab_no, department) VALUES (?, ?, ?, ?, ?)', [prn,date,time_in,lab_no,department], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ success: false, message: 'Internal Server Error' });
        } else {
            return res.status(200).json({ success: true, message: 'Entry Successful',msg:department+"-"+lab_no });
        }
    });
    
};

login = (req, resp) => {
    const prn = req.body.prn;
    const password = req.body.password;
    
    db.query('SELECT * FROM students WHERE prn=? AND password=?', [prn, password], (error, result) => {
        if (error) {
            console.error(error);
            return resp.status(500).json({ success: false, message: 'Internal Server Error' });
        }

        if (result.length !== 0) {
            return resp.status(200).json({ success: true, message: 'Login Successful' });
        } else {
            // Invalid credentials or student not found
            return resp.status(401).json({ success: false, message: 'Invalid PRN or password. Please try again.' });
        }
    });
};



signup = (req, resp) => {
    const { name, prn, roll_no, password, department, year, phone, batch } = req.body;

    // Check for duplicate entry before attempting to insert
    db.query("SELECT * FROM students WHERE prn = ?", [prn], (selectError, selectResult) => {
        if (selectError) {
            console.error("Select error:", selectError);
            resp.status(500).json({ error: 'Internal Server Error' });
            return;
        }

        // Log the result for debugging
        console.log("Select result:", selectResult);

        // If there is a result, a user with the same prn already exists
        if (selectResult.length > 0) {
            console.log("Duplicate entry found");
            resp.status(400).json({ error: 'Duplicate entry', message: 'User with the same PRN already exists.' });
            return;
        }

        // No duplicate entry found, proceed with the insertion
        db.query("INSERT INTO students (name, prn, roll_no, password, department, year, phone, batch) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
            [name, prn, roll_no, password, department, year, phone, batch],
            (insertError, insertResult) => {
                if (insertError) {
                    console.error("Insert error:", insertError);
                    resp.status(500).json({ error: 'Internal Server Error' });
                    return;
                }
                resp.json({ success: true, message: 'Signup successful.' });
            });
    });
};





module.exports={entires,postEntries,signup,login,lab_exit};