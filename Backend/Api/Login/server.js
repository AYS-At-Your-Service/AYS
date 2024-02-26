const express = require('express');
const cors = require('cors');
const port = 8080;
const app = express();

app.use(cors());
app.use(express.json());


app.get("/",(req,res) =>{
    res.json({msg:"Welcome to my crud operation app"});
})

require('./routes/user.route')(app);

app.listen(port,()=>console.log(`app listening on port ${port}`));