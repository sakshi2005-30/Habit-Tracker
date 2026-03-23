import api from "./api";

export const addHabit=(data)=>{
    return api.post("/habit",data);
}
export const getHabits=()=>{
    return api.get("/habit");
}
export const deleteHabit=(id)=>{
    return api.delete(`/habit/${id}`)
}
export const completeHabit=(id)=>{
    return api.post(`/habit/complete/${id}`);
}
export const getCompletedHabit=()=>{
    return api.get("/habit/getCompleted");
}
export const habitAnalytics=()=>{
    return api.get("/habit/analytics");
}