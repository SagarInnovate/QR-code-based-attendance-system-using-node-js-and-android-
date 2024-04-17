const db=require('../config/database')


postLogin=(req,resp)=>{
const username=req.body.username;
const password=req.body.password;
db.query('select username,password,lab_no from labs where username=? and password=?',[username,password],(err,result)=>{
if(err){
    console.error(err);
    resp.status(500).send('Internal Server Error');
    return;

}else if(result.length !=0){
    req.session.labLoggedIn=true;
    req.session.username=username;
    req.session.lab_no=result[0].lab_no;
    resp.redirect('/lab/dashboard');
}else{
    resp.send('Invalid Username or password');
}

});


    // resp.send('this is post login request');
}

renderLogin=(req,resp)=>{
    resp.render('lab/login');
}

labDashboard=(req,resp)=>{
    db.query('SELECT students.name, students.roll_no, students.year,students.batch,students.phone, students.department, entries.date, entries.time_in, entries.time_out FROM students LEFT JOIN entries ON students.prn = entries.prn where entries.lab_no=?',[req.session.lab_no], (error, results) => {
        if (error) throw error;
        // Render the attendance data in a table
        resp.render('lab/dashboard', { data: results });
    });

}

labStudentSearch=(req,resp)=>{
   
        const query = req.query.query;
    
        // Query the database to search for PRN first
        db.query('SELECT students.name, students.roll_no, students.year,students.batch,students.phone, students.department, entries.date, entries.time_in, entries.time_out FROM students LEFT JOIN entries ON students.prn = entries.prn WHERE entries.lab_no=? AND (students.prn LIKE ? OR students.name LIKE ?)', [req.session.lab_no, `%${query}%`, `%${query}%`], (error, results) => {
            if (error) throw error;
            // Render the search results in the lab dashboard template
            resp.render('lab/dashboard', { data: results });
        });
}

labStudentFilter=(req,resp)=>{
     
   
    const date = req.query.date;
    const department = req.query.department;
    const year = req.query.year;
    const batch = req.query.batch;
    const roll_no = req.query.roll_no;
      
        // Build the SQL query based on the selected filters
        let sql = 'SELECT students.name, students.roll_no, students.year,students.batch,students.phone, students.department, entries.date, entries.time_in, entries.time_out FROM students LEFT JOIN entries ON students.prn = entries.prn WHERE 1 and entries.lab_no=?';
    
        if (date) {
            sql += ' AND entries.date = ?';
        }
    
        if (department) {
            sql += ' AND students.department = ?';
        }
    
        if (year) {
            sql += ' AND students.year = ?';
        }

        if (batch) {
            sql += ' AND students.batch = ?';
        }
    
        if (roll_no) {
            sql += ' AND students.roll_no = ?';
        }
        const values = [req.session.lab_no];
    
        if (date) {
            values.push(date);
        }

        if (department) {
            values.push(department);
        }
        if (year) {
            values.push(year);
        }

        if (batch) {
            values.push(batch);
        }

        if (roll_no) {
            values.push(roll_no);
        }
        console.log(sql);
    
        // Execute the SQL query with filters
        db.query(sql, values, (error, results) => {
            if (error) throw error;
            // Render the filtered attendance data in the table
            resp.render('lab/dashboard', { data: results });
        });
  
    
}

module.exports={postLogin,renderLogin,labDashboard,labStudentSearch,labStudentFilter}