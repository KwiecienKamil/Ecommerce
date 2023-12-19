const express = require("express");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/api", (req,res) => {
    res.json({"users": ["userOne", "UserTwo"]})
})

// const connection = mysql.createConnection({
//     host: process.env.HOST,
//     user: process.env.USER,
//     password: process.env.PASSWORD,
//     database: process.env.DATABASE,
//     port: process.env.DB_PORT
// })

// connection.connect((err) => {
//     if(err) {
//         console.log(err.message)
//     }
//     console.log('db ' + connection.state)
// })


// app.post('/register', (req, res) => {
//     const email = req.body.email
//     const password = req.body.password 

//     connection.query('INSERT INTO users (email, password) VALUES (?,?)',
//     [email, password], (err, result) => {
//         console.log(err)
//     });
// });

// app.post('/login', (req, res) => {
//     const email = req.body.email
//     const password = req.body.password 

//     connection.query('SELECT * FROM users WHERE email = ? AND password = ?',
//     [email, password], (err, result) => {
//         if(err){
//             res.send({err: err})
//         }

//         if(result.length > 0) {
//             res.send(result)
//         }else {
//             res.send({message: 'Wrong email/password'});
//         }
//     });
// });

app.listen(process.env.PORT || 5000, () => console.log('app is running'));