const mysql = require('mysql');

// Create a connection to the database
const connection = mysql.createConnection({
    host: '192.168.1.14', // Replace with your database host
    user: 'root',      // Replace with your database username
    password: 'root',      // Replace with your database password
    database: 'user_registration', // Replace with your database name
    port: 3306 
});

// 2. Connect to the database
connection.connect((err) => {
    if (err) {
      console.error('Error connecting: ' + err.stack);
      return;
    }
    console.log('Connected as id ' + connection.threadId);
  
    // 3. Create table if not exists
    const createTableQuery = `
      CREATE TABLE IF NOT EXISTS users (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255),
        password VARCHAR(255),
        confirm_password VARCHAR(255),
        address VARCHAR(255)
      )
    `;
  
    connection.query(createTableQuery, (err, result) => {
      if (err) {
        console.error('Error creating table: ' + err.stack);
        connection.end();
        return;
      }
      console.log('Table ready!');
  
      // 4. Insert user data
      insertUser();
    });
  });
  
  // 5. Insert user function
  function insertUser() {
    const user = {
      name: 'John Doe',
      password: '123456',
      confirmPassword: '123456',
      address: '123 Main Street'
    };
  
    const sql = 'INSERT INTO users (name, password, confirm_password, address) VALUES (?, ?, ?, ?)';
  
    connection.query(sql, [user.name, user.password, user.confirmPassword, user.address], (err, results) => {
      if (err) {
        console.error('Error inserting data: ' + err.stack);
      } else {
        console.log('Inserted ID: ' + results.insertId);
      }
  
      // 6. Close the connection
      connection.end();
    });
  }