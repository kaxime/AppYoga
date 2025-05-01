import { createContext, useState } from "react";
import axios from "axios";



// eslint-disable-next-line react-refresh/only-export-components
export const UserContext = createContext({
    user: "",
    userAppointments:[],
    registerUser: async () => {},
    loginUser: async () => {},
    logoutUser:async() => {},
    getAppointments: async () => {},
    createAppointment:async () => {},
    cancelAppointment:async () => {}

})

export const UserProvider = ({children}) => {

    const  [user, setUser] = useState(null)
    const [userAppointments, setAppointments] = useState([])
    const [isLogged, setIsLogged] = useState(false)

     
    const registerUser = async (userData) => {
        return await axios.post("http://localhost:3000/users/register", userData)
    }


    const loginUser = async (LoginUser) => {
        try {
            const {data} = await axios.post("http://localhost:3000/users/login", LoginUser)
            setUser(data.user);
            setIsLogged(true)
            // alert("Login exitoso");
        } catch (error) {
            alert(error.response.data.message)
        } 
    }
    
    const logoutUser = () => {
        localStorage.removeItem("user");
        setUser(null);
    };

    const getAppointments = async () => {  
        const id = user.id
        console.log(user)

        try {  const {data} = await axios.get(`http://localhost:3000/user/${id}`)
        console.log(data)
          setAppointments(data.appointments) 

        } catch (error) {
            console.log(error)
            alert(error.response.data.message)
        }
        
    }

    const createAppointment = async (appointmentData) => {
        
            try {
                const dataToSend = {
                    ...appointmentData,
                    userId: user.id 
                };
                const response = await axios.post(
                    "http://localhost:3000/appointments/schedule",
                    dataToSend
                );
                await getAppointments(); 
                return response;
            } catch (error) {
                console.log(error);
                alert(error.response?.data?.message || "Error al agendar turno");
            }

    };
    const cancelAppointment = async (id) => {
        try {
            await axios.put(`http://localhost:3000/appointments/cancel/${id}`)
            if (user) {
                await getAppointments(user);
            }
        } catch (error) {
            console.error("Error al cancelar el turno:", error);
            alert("No se pudo cancelar la cita.");
        }
    };
    




    const value = {
        user,
        userAppointments,
        isLogged,
        registerUser,
        loginUser,
        logoutUser,
        getAppointments,
        createAppointment,
        cancelAppointment

    }


    return (
        <UserContext.Provider value={value}>
             {children}
        </UserContext.Provider>
    )
}