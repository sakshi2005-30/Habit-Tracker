import {useState,useEffect,useContext,createContext} from "react";

import{ me }from "../services/authApi"
export const AuthContext=createContext();
const AuthProvider=({children})=>{
    const [user,setUser]=useState(null);
    const [loading,setLoading]=useState(false);
    useEffect(()=>{
        const fetchMe=async()=>{
            setLoading(true);
             try{
                const getMe=await me();
               setUser(getMe);
               setLoading(false);
            }
            catch(error){
                console.log("error in fetching user",error);
                setLoading(false);
            }
            finally{
                setLoading(false);
            }
        }
        fetchMe();
       
    },[])
    return(
        <AuthContext.Provider value={{user,setUser,loading}}>
            {children}
        </AuthContext.Provider>
    )
}
export default AuthProvider