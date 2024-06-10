const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const axios = require('axios');
const cors = require('cors');
const app = express();

app.use(express.json());

app.use(cors()); 
app.options('*', cors());




//  Google Custom Search API credentials
const key = 'AIzaSyDz0C46kckcrxbNzGZeCcDrYFuNLRFXIXY';
const CX = 'f45425d162b0f40dd';

// Web Scraping Code didn't worked due to CORS issue
// const scrapePetHealthNetwork = async () => {
//     try {
//       const browser = await puppeteer.launch();
//       const page = await browser.newPage();
//       await page.goto('https://www.pethealthnetwork.com/tags/dogs');
      
//       const tableData = await page.evaluate(() => {
//         const table = document.querySelector('.views-table.cols-0.table.table-hover.table-striped'); // Select the table element using the provided class name
        
//         const rows = table.querySelectorAll('tr'); 
        
//         const data = [];
//         rows.forEach(row => {
//           const rowData = [];
//           const cells = row.querySelectorAll('td'); 
//           cells.forEach(cell => {
//             rowData.push(cell.textContent.trim()); 
//           });
//           data.push(rowData); 
//         });
        
//         return data; 
//       });
      
//       console.log('Table data extracted successfully:', tableData);
      
//       await browser.close();
      
//       return { tableData };
//     } catch (error) {
//       console.error('Error:', error);
//       throw error;
//     }
//   };


app.get('/searchdata', async (req, res) => {
  const query = req.query.q;

  try {
    const response = await axios.get(`https://www.googleapis.com/customsearch/v1`, {
      params: {
        key: key,
        cx: CX,
        q: query,
        siteSearch: 'youtube.com',
        siteSearchFilter: 'i'
      }
    });
    res.json(response.data.items);
  } catch (error) {
    res.status(500).json({ error: error.message });
    console.log("Error from Google API:", error.message);
    console.log("Error from database");
  }
});


  // app.get('/api/scrape', async (req, res) => {
  //   try {
  //     const data = await scrapePetHealthNetwork();
  //     res.json(data);
  //   } catch (error) {
  //     console.error('Error while scraping:', error);
  //     res.status(500).json({ error: 'An error occurred while scraping data.' });
  //   }
  // });

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'rootroot',
    database: 'dogbreed'
});

db.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
        return;
    }
    console.log('Connected to MySQL database');
});

app.use(bodyParser.json());

app.get('/dogbreed/:location', (req, res) => {
    const location = req.params.location;
    db.query('SELECT * FROM dogbreed WHERE Location = ?', [location], (error, results) => {
        if (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
            return;
        }
        res.json(results);
    });
});



// Handle user signup or Registration
app.post('/signup', (req, res) => {
  const { username, password } = req.body;
  // Check if username already exists
  db.query('SELECT * FROM user WHERE username = ?', [username], (error, results) => {
      if (error) {
          console.error(error);
          res.status(500).json({ error: 'Internal Server Error' });
          return;
      }
      if (results.length > 0) {
          // Username already exists
          res.status(400).json({ error: 'Username already exists' });
      } else {
          // Create a new user
          db.query('INSERT INTO user (username, password) VALUES (?, ?)', [username, password], (error, results) => {
              if (error) {
                  console.error(error);
                  res.status(500).json({ error: 'Internal Server Error' });
                  return;
              }
              res.status(200).json({ message: 'User signed up successfully' });
          });
      }
  });
});

// Handle user login
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  // Check if username and password match
  db.query('SELECT * FROM user WHERE username = ? AND password = ?', [username, password], (error, results) => {
      if (error) {
          console.error(error);
          res.status(500).json({ error: 'Internal Server Error' });
          return;
      }
      if (results.length > 0) {
          // User found, login successful
          res.status(200).json({ message: 'Login successful' });
      } else {
          // Invalid credentials
          res.status(401).json({ error: 'Invalid credentials' });
      }
  });
});





app.post('/dogbreed/contactus', (req, res) => {
    const { name, email, query } = req.body;
    const sql = 'INSERT INTO contact_us (name, email, query) VALUES (?, ?, ?)';
    connection.query(sql, [name, email, query], (error, results) => {
      if (error) {
        console.error('Error:', error);
        res.status(500).json({ message: 'An error occurred. Please try again later.' });
      } else {
        res.status(200).json({ message: 'Message sent successfully!' });
      }
    });
  });

app.listen(3001, () => {
    console.log('Server running on port 3001');
});

