const express = require('express')
const app = express();
const bodyParser = require('body-parser')

const quizzesCtrl = require('./src/controllers/quiz');
const choicesCtrl = require('./src/controllers/choice');
const questionsCtrl = require('./src/controllers/question');
const authCtrl = require('./src/controllers/auth')
const cors = require('cors');
const session = require('express-session');
const { isAuthenticated } = require('./src/middlewares/auth');

//session cookie
app.use(session({
    saveUninitialized: false,
    secret: 'keyboard cat',
    cookie: { maxAge: 60000 }
}))

app.set('views', __dirname + '/src/views')
app.set('view engine', 'twig')
//cors request
app.use(cors({
    "origin": "*",
    "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
    "preflightContinue": false,
    "optionsSuccessStatus": 204,
    "credentials": true,
    "allowCrossDomain": true
  }))
  
app.use(bodyParser.urlencoded({ extended: false }))



app.use('/quizzes',  quizzesCtrl);
app.use('/choices', choicesCtrl);
app.use('/questions', questionsCtrl)
app.use('/auth', authCtrl)


app.listen(3000);