const express=require("express");
const { connection } = require("mongoose");
const travelRouter = require("./routes/travel.routes");
const CORS=require("cors");
require('dotenv').config()

const port=process.env.PORT || 3030;

const app=express()
app.use(express.json())

app.use(CORS());

app.use("/travel", travelRouter)

app.get("/", (req,res) => {
    res.send("Welcome To Plan My Trip Backend Routes")
})

app.listen(port, async () => {
  try{
    await connection;
    console.log("Connected to the DB...")
  } catch(error){
    console.log(error.message)
    console.log("Something went wrong...")
  }

  console.log(`Server running at ${port}`)
});