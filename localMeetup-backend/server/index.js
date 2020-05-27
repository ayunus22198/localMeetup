const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

mongoose.Promise = global.Promise; // let's us use then catch
mongoose.set('useCreateIndex', true);
mongoose.connect(`mongodb+srv://localMeetup:@cluster0-g4dyn.mongodb.net/test?retryWrites=true&w=majority`, { useNewUrlParser: true });
mongoose.connection
    .once('open', () => console.log('Mongodb running'))
    .on('error', err => console.log(err)); // to use routes
const app = express();

//lets us access/write JSON objects and push to database
app.use(bodyParser.urlencoded({extended: true }));
app.use(bodyParser.json());

//app.use('/api', []);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log('server running'));