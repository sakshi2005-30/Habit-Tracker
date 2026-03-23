import { habitAnalytics } from "../services/habitapi";
import { useState,useEffect } from "react";
import {List,Check} from "lucide-react"
const Dashboard = () => {
  const [totHabits,setTotHabits]=useState(0);
  const [compHabits,setCompHabits]=useState(0);
  useEffect(()=>{
    const fetchdata=async()=>{
      try{
        const data=await habitAnalytics();
        console.log("an data:",data);
        setTotHabits(data?.data?.totalHabits);
        setCompHabits(data?.data?.completedToday);

      }
      
      catch(error){
        console.log(error);
      }
    }
    fetchdata();
  },[]);
  console.log("tot:",totHabits);
  console.log("com:",compHabits)
  return (
    <div className="ml-60">
      <div className="">
        <div className="border w-full bg-white py-4 fixed border-gray-200 h-14">
          <p className="ml-14 font-medium">
            Dashboard{" "}
            <span className="text-sm text-gray-500 font-normal">
              &nbsp;/&nbsp;overview
            </span>
          </p>
        </div>

        <div className="py-16 flex space-x-6 ml-12">
          <div className="py-8 w-50 pl-6 border-t-3 rounded-lg shadow-md border-emerald-500 flex flex-col justify-left">
            <List className="w-10 h-10 text-emerald-700 p-2 bg-emerald-100/80 rounded-lg " />
            <p className="text-2xl font-bold  mt-2">{totHabits}</p>
            <p className="text-sm text-gray-500 mt-1">Total habits</p>
          </div>
          <div className="py-8  w-50 pl-6  border-t-3 rounded-lg shadow-md border-yellow-500 flex flex-col justify-left">
            <Check className="w-10 h-10 text-yellow-700 p-2 bg-yellow-100/80 rounded-lg " />
            <p className="text-2xl font-bold  mt-2">{compHabits}</p>
            <p className="text-sm text-gray-500 mt-1">Completed Today</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard