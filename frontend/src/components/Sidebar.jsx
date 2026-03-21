import {motion } from "framer-motion"
import {useState,useEffect,useContext} from "react";
import { LayoutGrid,List,ChartNoAxesColumn,Leaf,LogOut} from "lucide-react";
import { NavLink ,useNavigate} from "react-router";
import { AuthContext } from "../context/AuthContext";
import {logout} from "../services/authApi"
const Sidebar = () => {
    const {user}=useContext(AuthContext);
    const navigate=useNavigate();
    const username=user.name;
    const email=user.email;


    const profile=username.split(" ").map((word)=>word[0]).join("").toUpperCase();
    const userLogout=async()=>{
        await logout();
        navigate("/");
    }

   // console.log(username,email,profile)
  return (
    <div className="fixed bg-white w-60 border  border-gray-200  ">
      <div className="w-full flex flex-col min-h-screen">
        <div className="flex items-center py-2 px-4 border-b border-gray-200">
          <Leaf className="text-emerald-800 mr-2 w-8 h-8" />
          <div className="flex flex-col">
            {" "}
            <span className="font-bold">Streakly</span>
            <span className="text-xs text-gray-400">habit tracker</span>
          </div>
        </div>

        <div className="text-gray-600 ">
          <div className="flex flex-col space-y-1  py-4">
            <p className="text-sm  px-2 py-2 text-gray-400">Overview</p>

            <NavLink to="/dashboard" end>
              {({ isActive }) => (
                <motion.div
                  animate={{
                    backgroundColor: isActive ? "#CEF2DA" : "transparent",
                    color: isActive ? "#336945" : "#4B5563",
                  }}
                  whileHover={
                    isActive
                      ? {}
                      : { backgroundColor: "#F2F0F0", color: "#000000" }
                  }
                  className="flex space-x-3 items-center px-2 py-2 rounded-lg mr-8 ml-1"
                >
                  <LayoutGrid className="w-5 h-5" />
                  <p>Dashboard</p>
                </motion.div>
              )}
            </NavLink>

            <NavLink to="/dashboard/habits" end>
              {({ isActive }) => (
                <motion.div
                  animate={{
                    backgroundColor: isActive ? "#CEF2DA" : "transparent",
                    color: isActive ? "#336945" : "#4B5563",
                  }}
                  whileHover={
                    isActive
                      ? {}
                      : { backgroundColor: "#F2F0F0", color: "#000000" }
                  }
                  className="flex space-x-3 items-center px-2 py-2 rounded-lg mr-8 ml-1"
                >
                  <List className="w-5 h-5" />
                  <p>My Habits</p>
                </motion.div>
              )}
            </NavLink>
          </div>

          <div className="flex flex-col spacey-2 py-2">
            <p className="text-sm text-gray-400 px-2 py-1 mb-2">Report</p>
            <NavLink to="/dashboard/analytics" end>
              {({ isActive }) => (
                <motion.div
                  animate={{
                    backgroundColor: isActive ? "#CEF2DA" : "transparent",
                    color: isActive ? "#336945" : "#4B5563",
                  }}
                  whileHover={
                    isActive
                      ? {}
                      : { backgroundColor: "#F2F0F0", color: "#000000" }
                  }
                  className="flex space-x-3 items-center px-2 py-2 rounded-lg mr-8 ml-1"
                >
                  <ChartNoAxesColumn className="w-5 h-5" />
                  <p>Analytics</p>
                </motion.div>
              )}
            </NavLink>
          </div>
        </div>

        <div className="mt-auto p-2 border-t border-gray-200">
          <div className="flex items-center space-x-3 cursor-pointer hover:bg-gray-100 p-2 rounded-lg transition">
            {/* Avatar */}
            <div className="w-8 h-8 bg-emerald-800 text-white flex items-center justify-center rounded-full mt-1">
              {profile}
            </div>

            {/* Info */}
            <div>
              <p className="text-sm font-medium">{username}</p>
              <p className="text-xs text-gray-500">{email}</p>
            </div>
            <div className="flex items-center mt-2 bg-red-500 p-2 rounded-lg text-white" onClick={userLogout}>
                <LogOut className="w-4 h-4 font-medium"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar