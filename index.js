const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mysql = require('mysql');
const cors = require('cors');


const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'ejeep'
});

app.use(cors());

// Add bodyParser middleware to parse the request body
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post("/register", (req, res) => {
  const { name, age, email, password } = req.body;

  const sqlInsert = "INSERT INTO account (name, age, email, password) VALUES (?, ?, ?, ?)";
  db.query(sqlInsert, [name, age, email, password], (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send("Error registering user.");
    } else {
      res.status(200).send("User registered successfully.");
    }
  });
});

app.post("/login", (req, res) => {
    const { email, password } = req.body;
  
    const sqlQuery = "SELECT * FROM account WHERE email = ? AND password = ?";
    db.query(sqlQuery, [email, password], (err, result) => {
      if (err) {
        console.log(err);
        res.status(500).send("Error logging in.");
      } else {
        if (result.length === 1) {
          // Login successful
          res.status(200).send("Success");
        } else {
          // Invalid email or password
          res.status(401).send("Invalid credentials.");
        }
      }
    });
  });
  

app.listen(3001, () => {
  console.log("Running on port 3001");
});
