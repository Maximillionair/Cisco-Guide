const express = require('express');
const path = require('path');
const routes = require('./routers/router.js'); 
const app = express();  
// const bodyParser = require(''); // Use express' built-in JSON parser


app.set("views", path.join(__dirname, "views"))
app.set("view engine", 'ejs');
// Middleware to handle form data and JSON payloads

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.json());
app.use(express.urlencoded({ extended: true })); // To handle URL-encoded data
app.use(routes);


const PORT = process.env.PORT || 3700;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
