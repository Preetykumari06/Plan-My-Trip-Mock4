const mongoose=require("mongoose");

const TravelSchema=mongoose.Schema({
    name: {type:String, required:true},
    email:{type:String, required:true},
    destination:{type:String,enum:["India", "Africa", "Europe", "America"], required:true},
    No_of_travelers:{type:Number, required:true},
    budget_per_person:{type:Number, required:true}
}, {
    versionKey:false
});

const TravelModel=mongoose.model("travel", TravelSchema)


module.exports=TravelModel