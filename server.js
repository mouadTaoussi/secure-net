const express         = require('express');
const ejs             = require('ejs');

// Init express
const app = express();

// Serve static stuff
app.use(express.static('public'))

// Init express router
const router = express.Router();
app.use(router);

// Init view engine
app.set('view engine', "ejs");

// Routes
router.get('/',(req,res)=>{
	res.render('pages/index');
});
router.get('/login',(req,res)=>{
	res.render('pages/login');
});
router.get('/blog',(req,res)=>{
	res.render('pages/blog');
});
router.get('/pricing',(req,res)=>{
	res.render('pages/pricing');
});
router.get('/signup',(req,res)=>{
	res.render('pages/signup');
});


// 404 Route
router.get('*',(req,res)=>{
	res.render('pages/404');
});

// Setting up the server
app.listen(8080,(err)=>{
	if (err) {
		throw new Error(err);
		process.exit(1);
	}else {
		console.log('Server up and running')		
	}
});