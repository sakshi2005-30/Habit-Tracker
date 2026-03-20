import Landing from "./pages/Landing/Landing"
import { useContext } from "react"
import {Routes,Route} from "react-router"
import { AuthContext } from "./context/AuthContext"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Dashboard from "./pages/Dashboard"
import DashboardLayout from "./Layout/DashboardLayout"
import Habits from "./pages/Habits"
import Analytics from "./pages/Analytics"
const App = () => {
  const { user } = useContext(AuthContext);
  console.log("user",user)
  return (
    
    <div className=" ">
     
      <Routes>
        {/* <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/> */}
        <Route path="/" element={<Landing/>}/>
        

        <Route path="/dashboard" element={user &&<DashboardLayout/>}>
        <Route index element={<Dashboard/>}/>
        <Route path="habits" element={<Habits/>}/>
        <Route path="analytics" element={<Analytics/>}/>
        </Route>

      </Routes>
    </div>
  )
}

export default App