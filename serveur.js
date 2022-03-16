const express=require('express');
const app = express();
const connectDb = require('./config/connectDb');
const authRoute = require('./routes/auth');
require('dotenv').config();


connectDb();
app.use(express.json())
app.use("/api/auth",authRoute)





app.listen(process.env.port,()=>console.log(`port is runing `));