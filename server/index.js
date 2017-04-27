let express = require('express');
let path = require('path');
let mongo = require('./mongo');
let config = require('./config');


var bodyParser = require('body-parser');




let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/../dist'));

function start() {
    app.listen(8080, 'localhost');
    console.log('Listening on port ' + 8080 + '...');
}

let apiRouter = express.Router();
app.use('/api', apiRouter);

let wordsRouter = require('./words/words')
apiRouter.use('/words', wordsRouter);


mongo.connect(config.mongo).then(start);

