var express = require('express');
var app = express();
var router = express.Router();

app.set('port', (process.env.PORT || 5000));

app.use(router);
app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use('/public/js', express.static(__dirname + '/node_modules/bootstrap/dist/js')); // redirect bootstrap JS
app.use('/public/js', express.static(__dirname + '/node_modules/jquery/dist')); // redirect JS jQuery
app.use('/public/style', express.static(__dirname + '/node_modules/bootstrap/dist/css'));



app.get('/', function(request, response) {
    response.render('pages/welcome');
});

app.get('/about', function(request, response) {
    response.render('pages/about');
});

app.get('/share', function(request, response) {
    response.render('pages/share');
});

/* GEAR TABS */
app.get('/gear', function(request, response) {
    response.render('pages/popular/gear');
});

app.get('/gear/cycling', function(request, response) {
    response.render('pages/popular/gear-tabs/gear-cycling');
});

app.get('/gear/running', function(request, response) {
    response.render('pages/popular/gear-tabs/gear-running');
});

app.get('/gear/swimming', function(request, response) {
    response.render('pages/popular/gear-tabs/gear-swimming');
});

/* RACE TABS */
app.get('/races', function(request, response) {
    response.render('pages/popular/races');
});

app.get('/races/marathons', function(request, response) {
    response.render('pages/popular/races-tabs/races-marathons');
});

app.get('/races/swimrun', function(request, response) {
    response.render('pages/popular/races-tabs/races-swimrun');
});

app.get('/races/tri', function(request, response) {
    response.render('pages/popular/races-tabs/races-tri');
});

app.get('/races/ultra', function(request, response) {
    response.render('pages/popular/races-tabs/races-ultra');
});

/* NUTRITION TABS */
app.get('/nutrition', function(request, response) {
    response.render('pages/popular/nutrition');
});

app.get('/nutrition/bars', function(request, response) {
    response.render('pages/popular/nutrition-tabs/nutrition-bars');
});

app.get('/nutrition/drinks', function(request, response) {
    response.render('pages/popular/nutrition-tabs/nutrition-drinks');
});

app.get('/nutrition/meals', function(request, response) {
    response.render('pages/popular/nutrition-tabs/nutrition-meals');
});

/* TRAINING TABS */
app.get('/training', function(request, response) {
    response.render('pages/popular/training');
});

app.get('/training/marathon', function(request, response) {
    response.render('pages/popular/training-tabs/training-marathon');
});

app.get('/training/swimrun', function(request, response) {
    response.render('pages/popular/training-tabs/training-swimrun');
});

app.get('/training/tri', function(request, response) {
    response.render('pages/popular/training-tabs/training-tri');
});

app.get('/training/ultra', function(request, response) {
    response.render('pages/popular/training-tabs/training-ultra');
});

/* LEARNING */
app.get('/articles', function(request, response) {
    response.render('pages/learning/articles');
});

app.get('/blogs', function(request, response) {
    response.render('pages/learning/blogs');
});

app.get('/books', function(request, response) {
    response.render('pages/learning/book');
});

app.get('/podcasts', function(request, response) {
    response.render('pages/learning/podcast');
});

/* HANDY */
app.get('/apps', function(request, response) {
    response.render('pages/handy/apps');
});

app.get('/communities', function(request, response) {
    response.render('pages/handy/communities');
});

app.get('/entertainment', function(request, response) {
    response.render('pages/handy/entertainment');
});






app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
});