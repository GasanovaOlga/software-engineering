let express = require('express');
let path = require('path');
let mongo = require('./mongo');
let config = require('./config');
let socket = require('./socket');


var bodyParser = require('body-parser');




let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/../dist'));

function start() {
    app.listen(8080, 'localhost');
    console.log('Listening on port ' + 8080 + '...');
    let smt  = require('./users_room/users_room');
    console.log(smt);
    smt.init();
}

let apiRouter = express.Router();
app.use('/api', apiRouter);

let wordsRouter = require('./words/words')
apiRouter.use('/words', wordsRouter);


mongo.connect(config.mongo).then(start);

