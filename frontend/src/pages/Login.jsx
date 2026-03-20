import { login} from "../services/authApi";
import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Link, useNavigate } from "react-router";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import Register from "./Register";
const Login = ({ onClose ,switchToRegister}) => {
  const { setUser } = useContext(AuthContext);
 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const user = await login({  email, password });
      
      setUser(user.data);
     
      setEmail("");
      setPassword("");
      navigate("/dashboard");
    } catch (error) {
      console.log(error);
    }
  };
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
          <p className="text-lg font-medium">Welcome back</p>
          <p className="text-sm text-gray-700">
            Sign in to your account to continue
          </p>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col space-y-2">
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
            Sign In
          </button>
        </form>
        <div className="text-sm text-gray-700 text-center mt-2 flex justify-center">
          <p> Don't have an account ?</p>
          <p onClick={switchToRegister} className="text-emerald-800 cursor-pointer">
            {" "}
            Create one
          </p>{" "}
        </div>
      </div>
    </motion.div>
  );
};

export default Login;
