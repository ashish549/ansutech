const express = require('express');
const app = express();
const sequelize = require('./db_config/db');
app.use(express.json());
app.use(express.urlencoded({extended:true}))




const port= process.env.PORT || 5002;
app.listen(port,()=>
{
    console.info("Listening on port ",port);
})