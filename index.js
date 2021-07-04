/* 1. Make sure express is present locally and globally both
2. Run the code with run button or with the help of nodemon "filename"
*/
const express = require('express')
const path = require('path') // import path
const app = express()
const port = 3000

// use of middlewares
// const arpanMiddleware = (req, res, next) => {
//   console.log(req)
//   next() // to run next middleware
// }

app.use(express.static(path.join(__dirname, "public")))
// app.use(arpanMiddleware) 

// app.get('/hello', (req, res) => {
//   res.send('Hello World');
// })
app.get('/hello/:name', (req, res) => {
  res.send('Hello World ' + req.params.name);
})

app.get('/about', (req, res) => {
  // res.send('about');
  res.sendFile(path.join(__dirname, 'index.html'));
  // res.status(500);
  res.json({
    "arpan": 34
  })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})