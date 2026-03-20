import { login, register } from "../services/authApi";
import { useState,useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Link, useNavigate } from "react-router";
import {motion} from "framer-motion"
import { X } from "lucide-react";
const Register = ({onClose,switchToLogin}) => {
    const {setUser}=useContext(AuthContext)
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const navigate=useNavigate();
    const handleSubmit=async(e)=>{
        e.preventDefault();
        try{
            const user=await register({name,email,password});
           
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
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="flex justify-center items-center min-h-screen inset-0 fixed z-50   "
    >
      <div className="border px-8 rounded-xl shadow-md py-6 w-sm flex flex-col space-y-2 bg-white">
        <div className="relative">
          <X
            className="absolute right-0 w-6 h-6 hover:text-black/60 top-0 "
            onClick={onClose}
          />
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
              className="border w-full py-1 outline-none rounded-lg border-gray-400 
              text-sm focus-within:border-emerald-800 mt-1 px-4"
            />
          </label>
          <label htmlFor="email">
            <p className="text-sm text-gray-700">Email</p>
            <input
              type="email"
              value={email}
              palceholder="Jon Doe"
              onChange={(e) => setEmail(e.target.value)}
              className="border text-sm py-1 w-full outline-none rounded-lg border-gray-400 focus-within:border-emerald-800 mt-1  px-4"
            />
          </label>
          <label htmlFor="password">
            <p className="text-sm text-gray-700">Password</p>
            <input
              type="password"
              value={password}
              palceholder="Jon Doe"
              onChange={(e) => setPassword(e.target.value)}
              className="border text-sm py-1 w-full outline-none rounded-lg border-gray-400 focus-within:border-emerald-800 mt-1  px-4"
            />
          </label>
          <button className="text-sm shreyash123 font-medium bg-black rounded-lg text-white py-2 px-4 hover:bg-black/80 mt-2">
            Create Account
          </button>
        </form>
        <div className="text-sm text-gray-700 text-center mt-2 flex justify-center">
          <p> Already have an account?</p>
          <p
            onClick={switchToLogin}
            className="text-emerald-800 cursor-pointer"
          >
            {" "}
            Sign in
          </p>{" "}
        </div>
      </div>
    </motion.div>
  );
};

export default Register;
