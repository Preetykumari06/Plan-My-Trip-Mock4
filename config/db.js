const mongoose=require("mongoose")
require('dotenv').config()

const connection=process.env.mongoURL;

module.exports=connection;