var express = require('express');
var app = express();
var swig = require('swig');
var morgan = require('morgan');
var bodyParser = require('body-parser');

var models = require('./models');
var router = require('./routes');


app.engine('html', swig.renderFile);
swig.setDefaults({ cache: false });
app.set('view engine', 'html');
app.set('views', __dirname + '/views');

app.use(morgan('dev'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/bootstrap', express.static(__dirname + '/node_modules/bootstrap/dist'));
app.use('/jquery', express.static(__dirname + '/node_modules/jquery/dist'));

app.use('/', router);


app.listen(3001, function () {
    console.log('Server is listening on port 3001!');
});
    


// app.use(function(req, res, next) {
//   var err = new Error('Not Found');
//   err.status = 404;
//   next(err);
// });

// app.use(function(err, req, res, next) {
//   res.status(err.status || 500);
//   console.error(err);
//   res.render(
//     // ... fill in this part
//   );
// });



