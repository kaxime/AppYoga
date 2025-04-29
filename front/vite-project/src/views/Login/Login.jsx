import axios from "axios"
import { useState } from 'react';

import './Login.css';
import { validateLogin } from "../../helpers/validateLogin";

const Login = () =>{
      const [login, setLogin] = useState({
            username:"",
            password:""
        })
        console.log(login)
        const [errors, setErrors] = useState({
            username:"",
            password:"",
        });

        const handleOnChange = (event)=> { 
            console.log(event);
            setLogin({
                ...login, [event.target.name]: event.target.value
            })
            setErrors(validateLogin({ ...login, [event.target.name]: event.target.value}))
        }

        const handleOnSubmit = async (event)=> {
            event.preventDefault();
            if(Object.keys(errors).length){
                alert("Por favor rellenar bien el Login")
            }else{
                try {
                    await axios.post("http://localhost:3000/users/login", login)
                    alert("Login exitoso");
                    
                } catch (error) {
                    alert("El login fallo, intentalo de nuevo", error)
                } 
            }
        };




    return (
        <div className="login-container">
            <h1>Login </h1>

            <form onSubmit={handleOnSubmit}>
                <div>
                    <label className="login-form">Username: </label>
                    <input type="text"
                        onChange={handleOnChange}
                        name="username"
                        value={login.username}
                        placeholder="lolita123"
                        required
                        /> 
                </div>
                {errors.username && <span>{errors.username}</span>}
                
                <div>
                <label className="login-form"> Password: </label>
                <input type="password" 
                    onChange={handleOnChange}
                    name="password"
                    value={login.password}
                    placeholder="******"
                    required
                    />
                </div>
                {errors.password && <span>{errors.password}</span>}

                <button className='button-login'>Submit</button>
            </form>
        </div>
    )

}

export default Login;