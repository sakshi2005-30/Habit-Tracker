import {login,register} from "../services/authApi"
import {useState} from "react"
const Login = () => {
    const [name,setName]=useState("");
    
  return (
    <div className="flex justify-center items-center">
      <div className="max-w-xl border">
        <div>
          <p>Create account</p>
          <p>Fill in your details to get started</p>
        </div>
      </div>
    </div>
  );
}

export default Login