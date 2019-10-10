require('./models/room_model');

const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const bodyparser = require('body-parser');

const roomController = require('./controllers/roomController');

var app = express();
app.use(bodyparser.urlencoded({
    extended: true
}));
app.use(bodyparser.json());
app.set('login', path.join(__dirname,'/login/'));
app.engine('hbs',exphbs({extname:'hbs', defaultLayout: 'mainLayout', layoutsDir:__dirname + '/login/layouts/'}));
app.set('view engine','hbs');
app.get('/',function(req,res)
{
	res.render('addOrEdit.hbs');
});

app.get('/home',function(req,res)
{
	res.render('roomDetails.hbs');
})

app.get('/registration',function(req,res)
{
	res.render('registration.hbs');
})

app.set('views', path.join(__dirname,'/views/'));
app.engine('hbs',exphbs({extname:'hbs', defaultLayout: 'mainLayout', layoutsDir:__dirname + '/views/layouts/'}));
app.set('view engine','hbs');
app.listen(3000,() => {
    console.log('Express server started at port : 3000');
});

app.use('/room',roomController);
