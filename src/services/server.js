require('dotenv').config({ path: require('path').resolve(__dirname, '../../.env') });

const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors'); // Import the CORS package

// Create Express app
const app = express();
const port = 5000;

// Enable CORS to allow requests from all origins
app.use(cors());  // This will allow your React frontend to make requests to this backend

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Create a MySQL connection
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER, // Your MySQL username
  password: process.env.DB_PASSWORD, // Your MySQL password
  database: process.env.DB_NAME, // Your database name
  port: process.env.DB_PORT, // Your MySQL port (default is 3306)
  ssl: { rejectUnauthorized: false }
});   

// Connect to MySQL
db.connect((err) => {
  if (err) {
    console.error('Database connection error:', err.stack);
    return;
  }
  console.log('Connected to database');
});

// API route to handle form submission
app.post('/register', (req, res) => {
  const { name, gender, newPassword, confirmPassword } = req.body;
  // Basic validation
  if (newPassword !== confirmPassword) {
    return res.status(400).json({ error: 'Passwords do not match' });
  }

  // Insert user data into MySQL database
  const query = 'INSERT INTO users (name, gender, password) VALUES (?, ?, ?)';
  db.query(query, [name, gender, newPassword], (err, result) => {
    if (err) {
      console.error('Error inserting user data:', err.stack);
      return res.status(500).json({ error: 'Database error' });
    }
    res.status(200).json({ message: 'User registered successfully', userId: result.insertId });
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
