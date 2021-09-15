const express =require('express')
const app=express()
require('./server/config/jokes.config')
app.use(express.json(), express.urlencoded({extended:true}));
const allRoutes=require('./server/routes/jokes.routes')(app);

app.listen(8000,()=>console.log("the server is open on port 8000"))