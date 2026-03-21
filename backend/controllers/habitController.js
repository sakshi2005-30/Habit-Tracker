const { default: mongoose } = require("mongoose");
const Habit=require("../models/Habit");
const HabitLog=require("../models/HabitLog")
const createHabit=async(req,res,next)=>{
    try{
        const {name,category}=req.body;
        const habit=await Habit.create({
            name,category,
            userId:req.user
        })
        res.status(201).json(habit)
    }
    catch(error){
        console.log("Error in creating habit",error);
        res.status(500).json({
            message:"Server error"
        })
    }
}
const getHabits=async(req,res,next)=>{
    try{
        const habits=await Habit.find({userId:req.user});
        res.status(200).json(habits);
    }
    catch(error){
         console.log("Error in getting habit", error);
         res.status(500).json({
           message: "Server error",
         });
    }
}
const deleteHabit=async(req,res,next)=>{
    try{
        const id=req.params.id;
        const habit=await Habit.findByIdAndDelete({_id:id})
        res.json(habit);
    }
    catch(error){
         console.log("Error in deleting habit", error);
         res.status(500).json({
           message: "Server error",
         });
    }
}
const habitComplete=async(req,res,next)=>{
  
    try{
        const id=req.params.id;
        const userId=req.user;
       
        const today = new Date();
        today.setHours(0,0,0,0);

        const exits=await HabitLog.findOne({
            habitId:id,
            userId,
            date:today
        })
        if(exits){
            return res.status(400).json({
                message:"The habit is already marked for today"
            })
        }
        console.log("today",today);
        const log=await HabitLog.create({
            habitId:id,
            userId,
            date:today,
            completed:true
        })
        res.json(log);
    }
    catch(error){
         console.log("Error in makring habit complete", error);
         res.status(500).json({
           message: "Server error",
         });
    }
}
const habitAnalytics=async(req,res,next)=>{
    try{
        const totalHabits=await Habit.countDocuments({userId:req.user});
        const today=new Date();
        today.setHours(0,0,0,0);
        const tomorrow=new Date(today);
        tomorrow.setDate(today.getDate()+1);

         console.log("req user:",req.user);
          console.log("req user type:", typeof req.user);
        const todayCount = await HabitLog.aggregate([
          {
            $match: {
              userId:new mongoose.Types.ObjectId(req.user),
              completed: true,
              date:{
                $gte:today,
                $lt:tomorrow
              }
              
            },
          },
          {
            $group: {
              _id: null,
              completedToday: { $sum: 1 },
            },
          },
        ]);
        res.json({
          totalHabits,
          completedToday: todayCount[0]?.completedToday || 0,
        });
    }
    catch(error){
        console.log("Error in analytics",error);
        res.status(500).json({
            message:"Server error"
        })
    }
}
const getCompletedHabits=async(req,res)=>{
    try{
        const completedHabits=await HabitLog.find(
            {userId:req.user}
        )
        res.json(completedHabits);
    }
    catch(error){
        console.log("Error in getting complted Habits");
        res.status(500).json({
            message:"Server error"
        })
    }
}
module.exports={createHabit,getHabits,deleteHabit,habitComplete,habitAnalytics,getCompletedHabits};