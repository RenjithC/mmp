/* -------- Minimals ------------------*/
const express = require('express');
const bodyParser = require('body-parser');
const knex = require('knex');

const postgres = knex({
  client: 'pg',
  connection: {
    host : '127.0.0.1', 
    user : 'renjith',
    password : '',
    database : 'mmp'
  }
});



const app = express();


/* -------- Middleware --------------*/
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

/*app.use(express.static(./))*/
app.use((req,res, next) => {
	console.log("Starting middleware...");
	next();
})


/*--- GET -------------------------------*/
//Test link 
app.get('/', (req, res) => {
	res.send("<h1> [  MMP Home Page (RC)  ] </h1>");
})

app.get('/test', (req, res) => {
	postgres.select('*').from('test').then( data => {
		//console.log(data);
		res.send(data);
	})
	.catch (err => res.status (400).json(err))
	
})

/*--- POST-------------------------------*/
app.post('/profile', (req, res) => {
	console.log(req.body);
	const user = {
		name: 'sally',
		hobby: 'soccer'
	}
	res.send(user);
})


/*--- App server port ------------------*/
app.listen(3000);

