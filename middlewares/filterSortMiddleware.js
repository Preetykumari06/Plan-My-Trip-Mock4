const TravelModel = require("../models/travel.model")

module.exports=async function filterSortMiddleware(req,res,next){
    const {filterBy, sortBy}=req.query;

    try{
        if(!filterBy && !sortBy){
            let travelData=await TravelModel.find()
            req.query.travelData=travelData;
            next();
        } else if(!filterBy && !sortBy){
            let travelData=await TravelModel.find().sort({budget_per_person: sortBy});
            req.query.travelData=travelData;
            next();
        } else if(!filterBy && !sortBy){
            let travelData=await TravelModel.find({destination: filterBy});
            req.query.travelData=travelData;
            next();
        } else if(!filterBy && !sortBy){
            let travelData=await TravelModel.find({destination: filterBy}).sort({budget_per_person: sortBy});
            req.query.travelData=travelData;
            next();
        }
    } catch(error){
        res.status(400).send({err:error.message});
    }
}