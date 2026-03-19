const User=require("../models/User");
const bcrypt=require("bcryptjs");
const jwt=require("jsonwebtoken");
const createToken=(id,time)=>{
    return jwt.sign({id:id},process.env.JWT_SECRET,{expiresIn:`${time}`});
}
const registerUser=async(req,res,next)=>{
    try{
        const {name,email,password}=req.body;
        if(!name || !email || !password){
            return res.status(404).json({
                message:"All fields are required"
            })
        }

        const userExists=await User.findOne({email});
        if(userExists){
            return res.status(404).json({
                
                    message:"User already exists Please login!"
             
            })
        }
        const hashedPassword=await bcrypt.hash(password,10);
        const user=await User.create({
            name,
            email,
            password:hashedPassword
        })
        const accesToken=createToken(user._id,"15m");
        const refreshToken=createToken(user._id,"15d");
        res.cookie("accessToken",accesToken,{
            httpOnly:true,
            crossSite:"lax",
            secure:"false",
            
        });
        res.cookie("refreshToken",refreshToken,{
            httpOnly:true,
            secure:false,
            crossSite:"lax"
        });
        res.status(201).json(user);


    }
    catch(error){
        console.log("Error in registering user",error);
        res.status(500).json({
            message:"Server error"
        })
    }
}
const loginUser=async(req,res,next)=>{
    try{
        const {email,password}=req.body;
        

        if(!email || !password){
            return res.status(400).json({
                message:"All fields required"
            })
        }
        const userExists = await User.findOne({ email });
        
        if(!userExists){
            return res.status(404).json({
                message:"User doesn't exist Please register!"
            })
        }
        const compare=await bcrypt.compare(password,userExists.password);
        if(!compare){
            return res.status(404).json({
                message:"Username or password is wrong"
            })
        }
        const accesToken = createToken(userExists._id, "15m");
        const refreshToken = createToken(userExists._id, "15d");
        res.cookie("accessToken", accesToken, {
          httpOnly: true,
          crossSite: "lax",
          secure: "false",
        });
        res.cookie("refreshToken", refreshToken, {
          httpOnly: true,
          secure: false,
          crossSite: "lax",
        });
        res.status(201).json(userExists);
        
    }
    catch(error){
         console.log("Error in logging user", error);
         res.status(500).json({
           message: "Server error",
         });
    }
}
const logout=async(req,res,next)=>{
    res.clearCookie("accessToken");
    res.clearCookie("refreshToken");
    res.json({
        message:"Logout successfull"
    })
}
module.exports={loginUser,registerUser,logout};