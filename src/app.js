const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser');

const app = express();

const newsRoutes = require('./routes/news');
const modulesRoutes = require('./routes/modules');


require('dotenv').config()
app.use(cors())


app.use('/news', newsRoutes);
app.use('/modules', modulesRoutes);


const listener = app.listen(process.env.PORT || 3000, () => {
    console.log('Your app is listening on port ' + listener.address().port)
    console.log('Server started at http://localhost:' + listener.address().port);       // Print Out Log Optional
})