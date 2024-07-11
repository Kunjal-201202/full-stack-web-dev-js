const express = require('express')
const app = express()
const port = 3000
app.use(express.static('public'))

app.get('/', (req, res) => {
//   res.send('Hello World!')
res.sendFile(__dirname+'/home.html')
})

app.get('/edit/:id', (req, res) => {
    var id = req.params.id
    res.send('Id is: ' + id)
    // res.send('Hello World!')
    // res.sendFile(__dirname+'/home.html')
  })


app.get('/search/', (req, res) => {
    var q = req.query.q
    // res.send('Hello World!')
    // res.sendFile(__dirname+'/home.html')
  })
app.get('/home', (req, res) => {
    // res.send('Hello World!')
    res.sendFile(__dirname+'/home.html')
  })

app.get('/about', (req, res) => {
    // res.send('about')
    res.sendFile(__dirname+'/about.html')
  })

app.get('/contact', (req, res) => {
    // var a=4;
    // var b=5;
    // var c= a+b;
    // res.send(`A value is: `+ a + "<br/>B value is: "+ b + "<br/> Sum of A and B is: "+ c)
    res.sendFile(__dirname+'/contact.html')

  })


app.get('/process', (req, res) => {
    var no1 = req.query.txt1;
    var no2 = req.query.txt2;
    var c= parseInt(no1)+parseInt(no2);
    res.send('Sum is '+ c)
    // res.send('about')
    // res.sendFile(__dirname+'/about.html')
  })

app.get('/cake', (req, res) => {
    res.send('cake')
  })
app.get('/cake/ahmedabad', (req, res) => {
    res.send('cake ahmedabad')
  })
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})