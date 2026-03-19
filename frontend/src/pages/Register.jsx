import { login, register } from "../services/authApi";
import { useState,useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router";
import {motion} from "framer-motion"
import { X } from "lucide-react";
const Register = ({onClose}) => {
    const {setUser}=useContext(AuthContext)
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const navigate=useNavigate();
    const handleSubmit=async(e)=>{
        e.preventDefault();
        try{
            const user=await register({name,email,password});
            console.log("data:",user.data);
            setUser(user.data);
            setName("");
            setEmail("")
            setPassword("");
            navigate("/dashboard");
        }
        catch(error){
            console.log(error);

        }
    }
  return (
    <motion.div 
    initial={{opacity:0,y:50}}
    whileInView={{opacity:1,y:0}}
    transition={{duration:1.2}}
    className="flex justify-center items-center min-h-screen inset-0 fixed z-50   ">
      <div className="border px-8 rounded-xl shadow-md py-6 w-sm flex flex-col space-y-2 bg-white">
        <div className="relative">
            <X className="absolute right-0 w-6 h-6 hover:text-black/60 top-0 " onClick={ onClose}/>
          <p className="text-lg font-medium">Create account</p>
          <p className="text-sm text-gray-700">
            Fill in your details to get started
          </p>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col space-y-2">
          <label htmlFor="name">
            <p className="text-sm text-gray-700">Name</p>
            <input
              type="text"
              value={name}
              palceholder="Jon Doe"
              onChange={(e) => setName(e.target.value)}
              className="border w-full outline-none rounded-lg border-gray-400 focus-within:border-emerald-800 mt-1 px-4"
            />
          </label>
          <label htmlFor="email">
            <p className="text-sm text-gray-700">Email</p>
            <input
              type="email"
              value={email}
              palceholder="Jon Doe"
              onChange={(e) => setEmail(e.target.value)}
              className="border w-full outline-none rounded-lg border-gray-400 focus-within:border-emerald-800 mt-1  px-4"
            />
          </label>
          <label htmlFor="password">
            <p className="text-sm text-gray-700">Password</p>
            <input
              type="password"
              value={password}
              palceholder="Jon Doe"
              onChange={(e) => setPassword(e.target.value)}
              className="border w-full outline-none rounded-lg border-gray-400 focus-within:border-emerald-800 mt-1  px-4"
            />
          </label>
          <button className="text-sm font-medium bg-black rounded-lg text-white py-1 px-4 hover:bg-black/80 mt-2">
            Create Account
          </button>
        </form>
      </div>
    </motion.div>
  );
};

export default Register;
