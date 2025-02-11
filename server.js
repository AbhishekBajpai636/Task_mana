const mysql = require('mysql2');
const express = require('express');
const cors = require('cors');
const path = require('path');

const application = express();
application.use(cors());
application.use(express.json());
application.use(express.urlencoded({ extended: true })); // Parse form data
application.use(express.static(path.join(__dirname,'public')));



// connection for the users table for login process
const con = mysql.createConnection({
    host:"localhost",
    user:"root",
    database:"users",
    password:"Ab@7080973604"
});


con.connect(function(error){
    if(error){
        throw error;
    }
    // 
    console.log("connected");
})

application.post('/signuppage',function(req,res){

    const {name, password,confirmpassword} = req.body;
    // console.log(name , password,confirmpassword);

    if (password !== confirmpassword){
        return res.send('password do not match ,please try again later');
    }
    
    const query ='insert into data values (?,?);';
    con.query(query,[name,password],function(error,result){
    if(error) {
        throw error;

    };
    console.log('data is saved');
    console.log('user successfully signed in ');
    res.redirect('/option.html');
    
    });
});

application.post('/loginpage',function(req,res){
    const {name , password} = req.body;
    const query = 'select password from data where name = ?';
    con.query(query,[name],function(error,result){
        if(error) throw error;

        if(result.length == 0){
            return res.send("user does not exit");
        }
        
        const storedpassword = result[0].password;
        console.log(storedpassword);
        if(storedpassword == password){
            res.redirect('dashboard.html')
        }
        else{
            res.send('wrong credentials ,please try again later');
        }
    });
});

application.post('/addtask', (req, res) => {
    console.log("Received request body:", req.body);  

    const { taskname, taskdescription, duedate } = req.body;

    if (!taskname || !taskdescription || !duedate) {
        return res.status(400).send("All fields are required");
    }

    con.query(
        "INSERT INTO task (taskname, taskdescription, duedate) VALUES (?, ?, ?)", 
        [taskname, taskdescription, duedate], 
        (error, result) => {
            if (error) {
                console.error("SQL Insert Error:", error);
                return res.status(500).send("Error adding task: " + error.message);
            }
            res.send("Task added successfully");
        }
    );
});



application.get('/gettasks', function(req, res) {
    const query = 'SELECT * FROM task';
    con.query(query, function(error, results) {
        if (error) throw error;
        res.json(results);
    });
});

application.delete('/deletetask/:id', (req, res) => {
    const { id } = req.params;
    console.log("Received delete request for ID:", id); // Debugging log

    if (!id) {
        return res.status(400).send("Task ID is required");
    }

    con.query("DELETE FROM task WHERE id = ?", [parseInt(id)], (err, result) => {
        if (err) {
            console.error("SQL Error deleting task:", err); // Log the actual SQL error
            return res.status(500).send("Error deleting task: " + err.message); // Send error message to frontend
        } 
        
        if (result.affectedRows > 0) {
            res.send("Task deleted successfully");
        } else {
            res.status(404).send("Task not found");
        }
    });
});


application.listen(5000,()=>{
    console.log('your server is running of port 5000');
})

