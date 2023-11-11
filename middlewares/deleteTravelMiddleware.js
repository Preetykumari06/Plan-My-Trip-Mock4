const TravelModel = require("../models/travel.model")

module.exports=async function deleteTravelMiddleware(req,res,next){
    const {id}=req.params;

    try{
        if(!id)
        return res.send({msg: "Please provide ID."})
        let travelData=await TravelModel.findById(id);

        if(!travelData)
        return res.send({msg: "Data is not present related to the Id, Please try again."})
        await TravelModel.findByIdAndDelete(id);
        next() 
    } catch(error){
        res.status(400).send({err:error.message});
    }
}