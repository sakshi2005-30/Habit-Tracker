import api from "./api";
export const register=(data)=>{
    return api.post("/auth/register",data);
}
export const login=(data)=>{
    return api.post("/auth/login",data);
}
export const me=()=>{
    return api.get("/auth/me");
}
