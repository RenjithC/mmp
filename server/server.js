/* -------- Minimals ------------------*/
const express = require('express');
const bodyParser = require('body-parser');
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
app.get('/', (req, res) => {
	res.send("<h1>Renjith's Hello world from Node & Express</h1>");
})

app.get('/profile', (req, res) => {
	res.send("<h1>Getting profile...</h1>");
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

