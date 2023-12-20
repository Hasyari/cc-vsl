require('dotenv').config();

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');


const app = express();

const index = require('./routes/index');
const newsRoutes = require('./routes/news');
const modulesRoutes = require('./routes/modules');
const exerciseRoutes = require('./routes/exercises');

app.use(cors());

app.use(bodyParser.json());
// Parse application/json
app.use(bodyParser.urlencoded({extended: true}));

app.use(cors());
app.use('/', index);
app.use('/news', newsRoutes);
app.use('/modules', modulesRoutes);
app.use('/exercises', exerciseRoutes);

const listener = app.listen(process.env.PORT || 8080, () => {
  console.log('Your app is listening on port ' + listener.address().port);
  console.log('Server started at http://localhost:' + listener.address().port); // Print Out Log Optional
});
