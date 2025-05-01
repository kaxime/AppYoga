/* eslint-disable react-refresh/only-export-components */
import { createContext, useState } from "react";
import axios from "axios";


export const UserContext = createContext({
    user: "",
    userAppointments:[],
    registerUser: async () => {},
    loginUser: async () => {},
})

export const UserProvider = ({children}) => {

   const  [user, setUser] = useState(0)
     
    const registerUser = async (userData) => {
        return await axios.post("http://localhost:3000/users/register", userData)
    }


    const loginUser = async (LoginUser) => {
        const res = await axios.post("http://localhost:3000/users/login", LoginUser)
        localStorage.setItem("user", res.data.user.id)
        setUser(res.data.user.id)
        console.log(res)
        return res;
    }








    const value = {
        user,
        registerUser,
        loginUser,

    }


    return (
        <UserContext.Provider value={value}>
             {children}
        </UserContext.Provider>
    )
}