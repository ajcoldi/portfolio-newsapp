const express = require('express')
const app=express()
const port = process.env.PORT||3000;
const bodyParser = require('body-parser');
const moment = require('moment')
app.locals.moment = moment;

// template engine  
app.use(express.static('public'))
app.set('view engine','ejs')

app.use(express.urlencoded({ extended: true }));

app.use('/news',require('./routes/news'))
app.use('/', require('./routes/pagesRouter'))
app.set('views','./views')

app.listen(port,()=> console.log("started"))