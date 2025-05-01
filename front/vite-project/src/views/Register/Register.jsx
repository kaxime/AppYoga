
import { useState } from "react";
import { validate } from "../../helpers/validateRegister";
import './Register.css'
import { UserContext } from "../../context/UsersContext";
import { useContext } from "react";

const Register  = () =>{

    const {registerUser} = useContext(UserContext)

    const [form, setForm] = useState({
        name:"",
        email:"",
        birthdate:"",
        nDni:"",
        username:"",
        password:"",
    })

    const [errors, setErrors] = useState({
        name:"",
        email:"",
        birthdate:"",
        nDni:"",
        username:"",
        password:"",
    });
    console.log(errors)

    const handleOnChange = (event)=> { 
        console.log(event);
        setForm({
            ...form, [event.target.name]: event.target.value
        })
        setErrors(validate({ ...form, [event.target.name]: event.target.value}))
    }
    const resetFormAndErrors = () => {
        
        setForm({
            name: "",
            email: "",
            birthdate: "",
            nDni: "",
            username: "",
            password: "",
        });
        setErrors({
            name: "",
            email: "",
            birthdate: "",
            nDni: "",
            username: "",
            password: "",
        });
    };

    const handleOnSubmit = async (event)=> {
        event.preventDefault();
        if(Object.keys(errors).length){
            alert("Por favor rellenar bien el formulario")
        }else{
            try {
                registerUser(form)
                alert("Registro exitoso 🎉✨");
                resetFormAndErrors()
            } catch (error) {
                alert("El registro fallo, intentalo de nuevo", error)
            } 
        }
    };


    return (
        <div className="container">
            <h1> Registrarse </h1>

        <form onSubmit={handleOnSubmit}>
            <div>
                <label >Name:</label>
                <input type="text"
                    onChange={handleOnChange}
                    name="name"
                    value={form.name} 
                    
                />
            </div>
            {errors.name && <span>{errors.name}</span>}

            <div>
                <label>Email:</label>
                <input type="text"
                    onChange={handleOnChange}
                    name="email"
                    value={form.email} 
                    placeholder="example@gmail.com"
                    
                    />
            </div>
            {errors.email && <span>{errors.email}</span>}

            <div>
                <label>Birthdate:</label>
                <input type="date" 
                    onChange={handleOnChange}
                    name="birthdate"
                    value={form.birthdate}
                    />
            </div> 
            {errors.birthdate && <span>{errors.birthdate}</span>}

            <div>
                <label>Dni:</label>
                <input type="text" 
                    onChange={handleOnChange}
                    name="nDni"
                    value={form.nDni}
                    />
            </div>
            {errors.nDni && <span>{errors.nDni}</span>}

            <div>
                <label >Username: </label>
                <input type="text"
                    onChange={handleOnChange}
                    name="username"
                    value={form.username}
                    placeholder="lolita123"
                    /> 
            </div>
            {errors.username && <span>{errors.username}</span>}


            <div>
            <label >Password: </label>
            <input type="password" 
                onChange={handleOnChange}
                name="password"
                value={form.password}
                placeholder="******"
                required
                />
            </div>
            {errors.password && <span>{errors.password}</span>}

            <button >Submit</button>
        </form>


        </div>
    )

}

export default Register;