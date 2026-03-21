import { useState ,useRef,useEffect} from "react"
import { Droplet,Book,Brain,SquareActivity,Laptop,Star ,Trash2} from "lucide-react";
import {motion} from "framer-motion"
import { addHabit,getHabits,completeHabit,deleteHabit,getCompletedHabit } from "../services/habitapi";
const Habits = () => {
  const categories = [
    {
      id: 1,
      content: "Health",
      icon: (
        <Droplet className="w-8 h-8 fill-blue-400 text-blue-500 bg-blue-200 rounded-lg p-1" />
      ),
    },
    {
      id: 2,
      content: "Fitness",
      icon: (
        <SquareActivity className="w-8 h-8 text-red-500  bg-red-200 rounded-lg p-1" />
      ),
    },
    {
      id: 3,
      content: "Learning",
      icon: (
        <Book className="w-8 h-8 fill-yellow-400 text-yellow-500 bg-yellow-100 rounded-lg p-1" />
      ),
    },
    {
      id: 4,
      content: "Mindfullness",
      icon: (
        <Brain className="w-8 h-8 fill-pink-400 text-pink-500 bg-purple-200 rounded-lg p-1" />
      ),
    },
    {
      id: 5,
      content: "Productivity",
      icon: (
        <Laptop className="w-8 h-8 fill-gray-400 text-gray-500 bg-green-200 rounded-lg p-1" />
      ),
    },
    {
      id: 6,
      content: "Other",
      icon: (
        <Star className="w-8 h-8 fill-yellow-400 text-yellow-500 bg-yellow-200 rounded-lg p-1 " />
      ),
    },
  ];
  
  const [name,setName]=useState("");
  const [category, setCategory] = useState({
    content: "Health",
    icon: (
      <Droplet className="w-8 h-8 fill-blue-400 text-blue-500 bg-blue-200 rounded-lg p-1" />
    ),
  });
  const [open,setOpen]=useState(false);
  const [Habits,setHabits]=useState([]);
  const [completeId,setCompleteId]=useState([]);
  const habitCount=Habits.length;
 const getDays=(day)=>{
  const createdAt=new Date(day);
    const today= new Date();
    const millisec=today-createdAt;
    const days=Math.floor(millisec/(1000*60*60*24));
    return days;
 }

  useEffect(()=>{
    const fetchHabits=async()=>{
      try{
        const data=await getHabits();
        console.log("data:",data);
        setHabits(data.data);
      }
      catch(error){
        console.log(error);
      }
    }
    const getComplete=async()=>{
      const data=await getCompletedHabit();
      setCompleteId(data.data);
    }
    fetchHabits();
    getComplete();
  },[]);
  
  const openRef=useRef(null);
  useEffect(()=>{
    const handleOutside=(e)=>{
      if(openRef.current && !openRef.current.contains(e.target)){
        setOpen(false);
      }
    }
    document.addEventListener("mousedown",handleOutside);
    return ()=>{
      document.removeEventListener("mousedown",handleOutside)
    }
  },[]);
  const handleAddHabit=async(e)=>{
    e.preventDefault();
    try{
      const hab=await addHabit({name,category:category.content});
      setCategory({
        content: "Health",
        icon: (
          <Droplet className="w-8 h-8 fill-blue-400 text-blue-500 bg-blue-200 rounded-lg p-1" />
        ),
      });
      setHabits((prev)=>[hab.data,...prev]);
      setName("");
      console.log("habit",hab);
    }
    catch(error){
      console.log("Error in adding habit");

    }
  }

  const handleDelete=async(id)=>{
    try{
      const hab=await deleteHabit(id);
      setHabits((prev)=>prev.filter((item)=>item._id!==id))
      console.log("delete habit:",hab)
    }
    catch(error){
      console.log(error);
    }
  }
  const handleComplete=async(id)=>{
    try{
      const hab=await completeHabit(id);
      setCompleteId((prev)=>[hab.data,...prev]);
    }
    catch(error){
      console.log(error);
    }
  }
  return (
    <div className="bg-gray-100 min-h-screen ml-60 pt-4">
      <div>
        <div className="flex z-50 top-0 fixed w-full justify-start px-10 py-4 bg-white border-b border-gray-200 items-end h-14 ">
          <p className="font-medium ">My Habits </p>
          <p className="text-sm text-gray-500"> &nbsp;/ habits</p>
        </div>

        <div className=" mx-10  mt-16 bg-white rounded-lg py-6 px-8 border border-gray-200 shadow-md">
          <div className="flex flex-col space-y-2">
            <p className="font-medium">Add a new habit</p>
            <p className="text-sm text-gray-500">Track a new daily ritual</p>
          </div>
          <div>
            <form
              className="flex gap-4 items-center mt-4"
              onSubmit={handleAddHabit}
            >
              <label htmlFor="name" className="">
                <p className="text-sm text-gray-500">Habit name</p>
                <input
                  type="text"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="eg. Morning run"
                  className="outline-none border-2 border-gray-300 py-2 px-4 rounded-lg w-80 mt-2 focus-within:border-emerald-500"
                />
              </label>
              <label htmlFor="category">
                <p className="text-sm text-gray-500 ">Category</p>
                <motion.div
                  ref={openRef}
                  onClick={() => setOpen(true)}
                  whileHover={{ borderColor: "#E5E2E1" }}
                  className="relative flex space-x-2 items-center border-2 py-2 px-4  w-50 mt-2 rounded-lg border-gray-300 cursor-pointer "
                >
                  <div>{category.icon}</div>
                  <p>{category.content}</p>

                  {open && (
                    <div
                      className=" absolute  
                    top-12 right-0 border bg-white w-50 rounded-xl border-gray-400 z-50"
                    >
                      {categories.map((item) => (
                        <div
                          key={item.id}
                          className="text-sm text-gray-500 py-2 text-left pl-4 hover:bg-blue-300"
                          onClick={(e) => {
                            e.stopPropagation();
                            setCategory(item);
                            setOpen(false);
                          }}
                        >
                          <div className="flex items-center space-x-2">
                            {item.icon}
                            <p>{item.content}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </motion.div>
              </label>
              <motion.button
                whileHover={{ backgroundColor: "#244724" }}
                transition={{ duration: 0.2 }}
                className=" px-4 py-3 rounded-lg bg-emerald-800 text-white font-medium mt-6 cursor-pointer"
              >
                Add Habit{" "}
              </motion.button>
            </form>
          </div>
        </div>

        {/* all habits */}
        <div className="my-4 mx-10 ">
          <div className="flex flex-col mb-4">
            <p className="font-medium">All habits</p>
            <p className="text-sm text-gray-500">{habitCount} habits found</p>
          </div>

          <div className="grid grid-cols-4 gap-4 ">
            {Habits.length > 0 &&
              Habits.map((item) => (
                <div
                  key={item._id}
                  className="border relative py-4 px-6 bg-white rounded-lg border-gray-200 shadow-sm"
                >
                  <div className="flex  items-center gap-4 ">
                    <div className="flex space-x-2">
                      {
                        categories.find((it) => it.content === item.category)
                          ?.icon
                      }
                      <div className="flex flex-col">
                        {" "}
                        <p className="font-medium">{item.name}</p>
                        <p className="text-sm text-gray-500">{item.category}</p>
                      </div>
                    </div>

                    <p className="absolute top-4  right-2 text-sm text-gray-500">
                      {getDays(item.createdAt)}d
                    </p>
                  </div>

                  <div className="flex space-x-2 mt-8">
                    <motion.div
                      onClick={() => handleComplete(item._id)}
                      whileHover={{ backgroundColor: "#244724" }}
                      transition={{ duration: 0.2 }}
                      className="text-white bg-emerald-800 py-2 px-4 text-center  rounded-lg font-medium text-sm cursor-pointer"
                    >
                      {completeId.some(
                        (log) => log.habitId && log.habitId.toString() === item._id.toString(),
                      )
                        ? "Completed"
                        : "Mark Complete"}
                    </motion.div>
                    <motion.button
                      onClick={() => handleDelete(item._id)}
                      whileHover={{ backgroundColor: "#F05D5D" }}
                      transition={{ duration: 0.2 }}
                      className="bg-red-500 px-2 py-1 rounded-lg cursor-pointer"
                    >
                      <Trash2 className="w-4 h-4 text-white font-medium " />
                    </motion.button>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Habits