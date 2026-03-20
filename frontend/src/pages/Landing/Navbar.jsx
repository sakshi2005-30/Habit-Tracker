import {motion} from "framer-motion"
import {Leaf} from "lucide-react";
import Register from "../Register";
import {Link} from "react-router"
import { useState } from "react";
import Login from "../Login";
const Navbar = () => {
  const [showRegister,setShowRegister]=useState(false);
  const [showLogin,setShowLogin]=useState(false);
  const [showModal,setShowModal]=useState(null);

  return (
    <div className="fixed top-0 left-0 z-50 w-full">
      <div className="  w-full bg-white mx-auto max-w-5xl rounded-xl my-6 ">
        <div className=" flex justify-between items-center mx-8 py-2 ">
          <div className="flex items-center ">
            <Leaf className="text-emerald-800 mr-2 w-8 h-8" />
            <div className="flex flex-col">
              {" "}
              <span className="font-bold">Streakly</span>
              <span className="text-xs text-gray-400">habit tracker</span>
            </div>
          </div>

          <div className="flex space-x-4">
            <motion.button
              whileHover={{ color: "#74877c" }}
              transition={{ duration: 0.3 }}
              className="font-medium cursor-pointer"
              onClick={() => setShowModal("login")}
            >
              Login
            </motion.button>
            <motion.button
              whileHover={{ background: "#000000", scale: 1.05 }}
              transition={{ duration: 0.4 }}
              className="bg-emerald-800 px-8 py-2 text-white rounded-3xl cursor-pointer"
              onClick={() => setShowModal("register")}
            >
              Register
            </motion.button>
          </div>
        </div>
      </div>
      {showModal && (
        <div className="fixed inset-0 flex justify-center items-center z-50 bg-black/30 ">
          {showModal === "login" && (
            <Login
              onClose={() => setShowModal(null)}
              switchToRegister={() => setShowModal("register")}
            />
          )}

          {showModal === "register" && (
            <Register
              onClose={() => setShowModal(null)}
              switchToLogin={() => setShowModal("login")}
            />
          )}
        </div>
      )}
    </div>
  );
}

export default Navbar