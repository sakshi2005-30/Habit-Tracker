const express=require("express");
const router=express.Router();
const {createHabit,getHabits,deleteHabit,habitComplete,habitAnalytics,getCompletedHabits}=require("../controllers/habitController");
const protect=require("../middlewares/authMiddleware");

router.post("/",protect,createHabit);
router.get("/",protect,getHabits);
router.delete("/:id",protect,deleteHabit);
router.post("/complete/:id",protect,habitComplete);
router.get("/analytics",protect,habitAnalytics)
router.get("/getCompleted",protect,getCompletedHabits)
module.exports=router;