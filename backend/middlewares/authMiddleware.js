const jwt=require("jsonwebtoken");
const protect=async(req,res,next)=>{
    try{
        const token = req.cookies.accessToken;
        if(!token){
            return res.status(400),json({
                message:"No access Token"
            })
        }
        const decoded=jwt.verify(token,process.env.JWT_SECRET);
        req.user=decoded.id
        next();
    }
    catch(error){
        console.log("error in authentication",error);
        return res.status(500).json({
            message:"Auth Middleware error"
        })
    }
}
module.exports=protect;