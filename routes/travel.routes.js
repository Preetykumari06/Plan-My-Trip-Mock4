const express=require("express");
const TravelModel=require("../models/travel.model");
const addTravelMiddleware = require("../middlewares/addTravelMiddleware");
const filterSortMiddleware = require("../middlewares/filterSortMiddleware");
const deleteTravelMiddleware = require("../middlewares/deleteTravelMiddleware");
const travelRouter=express.Router()

travelRouter.get("/msg", (req,res)=>{
    res.send("Welcome To Travel Router")
})

travelRouter.post("/add", addTravelMiddleware, async (req,res) => {
  try{
    const {travelData}=req.query;
    res.send({msg:"Data added successfully...", travelData});
  } catch(error){
     res.status(400).send({err:error.message});
  }
});


travelRouter.get("/", filterSortMiddleware, async (req,res) => {
  try{
    const {travelData}=req.query;
    res.send({travelData})
  } catch(error){
    res.status(400).send({err:error.message});
  }
})

travelRouter.delete("/:id",deleteTravelMiddleware, async (req,res) => {
    try{
      const {id}=req.params;
      res.status(200).send({msg: `Travel Data Related to id:- ${id} is deleted.`});
    } catch(error){
        res.status(400).send({err:error.message});
    }
})


module.exports=travelRouter

// {
//   "name":"Preety",
//   "email":"pr123@gmail.com",
//   "destination":"India",
//   "No_of_travelers":1,
//   "budget_per_person":10000
// }