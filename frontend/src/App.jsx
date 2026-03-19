import Landing from "./pages/Landing/Landing"
import { useContext } from "react"
import {Routes,Route} from "react-router"
import { AuthContext } from "./context/AuthContext"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Dashboard from "./pages/Dashboard"
const App = () => {
  const { user } = useContext(AuthContext);
  return (
    
    <div className=" ">
     
      <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/dashboard" element={user?<Dashboard/>:<Landing/>}/>
        <Route path="*" element={<Landing/>}/>

      </Routes>
    </div>
  )
}

export default App