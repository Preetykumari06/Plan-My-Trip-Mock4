const TravelModel = require("../models/travel.model")

module.exports=async function addTravelMiddleware(req,res,next){
    const {name,email,destination,No_of_travelers, budget_per_person}=req.body;
    try{
        if(!name || !email || !destination || !No_of_travelers || !budget_per_person)
        return res.send({msg: "Please provide all details."})
    let travelData=new TravelModel(req.body)
    await travelData.save();
      req.query.travelData=travelData;
      next();
    } catch(error){
        res.status(400).send({err:error.message});
    }
}