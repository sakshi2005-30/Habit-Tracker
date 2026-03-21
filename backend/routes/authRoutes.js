const express=require("express");
const router=express.Router();
const protect=require("../middlewares/authMiddleware")
const {loginUser,registerUser,logout}=require("../controllers/authController");
const User=require("../models/User");

router.post("/register",registerUser);
router.post("/login",loginUser);
router.get("/me",protect,async(req,res)=>{
    const user=await User.findOne({_id:req.user});
    return res.status(200).json(user);
})
router.get("/logout",logout);
module.exports=router;