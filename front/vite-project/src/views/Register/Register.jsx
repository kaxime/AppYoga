import axios from "axios";
import { useState } from "react";
// import { validate } from "../../helpers/validateRegister";
import './Register.css'




const Register  = () =>{

    const [form, setForm] = useState({
        name:"",
        email:"",
        birthdate:"",
        nDni:"",
        username:"",
        password:"",
    })
    console.log(form);
    
    // const [error, setError] = useState({});
    // console.log(error)

    const handleOnChange = (event)=> {
        console.log(event);
        const {name, value} =  event.target;
        setForm({
            ...form,
            [name]:value
        })


    }

    const handleOnSubmit = (event)=> {
        event.preventDefault();
        funcionPeticion()
    }

    const funcionPeticion =  () => {
        axios.post("", form)
        // .then((res) => {
        //     console.log("usuario registrado", res.data)
        //     alert("Registro exitoso! 🎉")
        // })
        // .catch((error) => {
        //     console.error("error al registrarse" ,error)
        //     setError("Error en el registro, intenta nuevamente. ")
        // })
    }

    return (
        <div className="container">
            <h1> Registrarse </h1>

        <form onSubmit={handleOnSubmit}>
            <div>
                <label >Name:</label>
                <input type="text"
                    value={form.name} 
                    name="name"
                    onChange={handleOnChange}
                    // className={error ? 'error' : ''}
                />
               
            </div>
            <div>
                <label>Email:</label>
                <input type="text"
                    value={form.email} 
                    name="email"
                    placeholder="example@gmail.com"
                    onChange={handleOnChange}
                    // className={error ? 'error' : ''}
                    />
            </div>

            <div>
                <label>Birthdate:</label>
                <input type="date" 
                    value={form.birthdate}
                    name="birthdate"
                    onChange={handleOnChange}
                    />
            </div> 

            <div>
                <label>Dni:</label>
                <input type="number" 
                    value={form.nDni}
                    name="nDni"
                    onChange={handleOnChange}
                    // className={error ? 'error' : ''}
                    />
            </div>

            <div>
                <label >Username: </label>
                <input type="text"
                    value={form.username}
                    name="username"
                    placeholder="lolita123"
                    onChange={handleOnChange}
                    // className={error ? 'error' : ''}
                    /> 
            </div>
            
            <div>
            <label >Password: </label>
            <input type="password" 
                value={form.password}
                name="password"
                placeholder="******"
                onChange={handleOnChange}
                // className={error ? 'error' : ''}
                />
            </div>
           
            {/* {error.general && <p>{error.general}</p>} */}



            <button >Submit</button>
        </form>


        </div>
    )

}

export default Register;