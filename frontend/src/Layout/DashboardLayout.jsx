import Sidebar from "../components/Sidebar"
import { Outlet } from "react-router-dom"
const DashboardLayout = () => {
  return (
    <div>
        <div className="flex">
            <Sidebar/>
            <div className="flex-1 bg-gray-50 min-h-screen">
                <Outlet/>
            </div>
        </div>
    </div>
  )
}

export default DashboardLayout