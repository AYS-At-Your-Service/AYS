const express = require('express');
const cors = require('cors');
require('dotenv').config();
const port = process.env.PORT;
const app = express();

app.use(cors());
app.use(express.json());

//User Router
require('./Login/routes/user.route')(app);

//Location Router
require('./Location/routes/location.routes')(app);
require('./Location/routes/locMigration.routes')(app);

app.listen(port,()=>console.log(`app listening on port ${port}`));