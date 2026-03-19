require("dotenv").config();
const express=require("express");
const app=express();
const cors=require("cors");
const connectToDB=require("./config/db")
const cookieParser=require("cookie-parser");
const authRoutes=require("./routes/authRoutes")
const habitRoutes=require("./routes/habitRoutes");

connectToDB();
app.use(express.json());
app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}))
app.use(cookieParser());
app.use("/api/auth",authRoutes);
app.use("/api/habit",habitRoutes);

const PORT=process.env.PORT ||3000;
app.listen(PORT,()=>{
    console.log(`Server is running at http://localhost:${PORT}`);
})