export const validate = (input) =>{
    const error = {};
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{6,}$/;
    const gmailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    
    if (!input.nDni.trim()) {
        error.nDni = "El DNI es obligatorio";
    }else if (!/^\d{7,8}$/.test(input.nDni)) { 
        error.nDni = "El DNI debe tener entre 7 y 8 números";
        }
          

        if (!input.name.trim()) {
            error.name = "El nombre es obligatorio";
          }
          if (!input.birthdate) {
            error.birthdate = "La fecha de nacimiento es obligatoria";
          }

    if (!input.email.trim()) error.email = "El email es obligatorio.";
    else if (!gmailRegex.test(input.email)) error.email = "Solo se permite un correo de Gmail válido"

    if (!input.password){ 
        error.password = "La contraseña es obligatoria.";
    } else if(!passwordRegex.test(input.password)) {
        error.password="La contraseña debe tener al menos 6 caracteres, una letra y un número"
    }
    
    
    if (!input.username){
        error.username = "El nombre de usuario es obligatorio.";
    }else if(input.username.length < 5) {
        error.username = "El nombre de usuario debe tener al menos 5 caracteres."
    }
    return error;
}