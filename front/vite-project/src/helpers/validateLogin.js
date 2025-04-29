export const validateLogin = (input) => {
    const error = {};
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{6,}$/;
    
    if (!input.username){
        error.username = "El nombre de usuario es obligatorio.";
    }else if(input.username.length < 5) {
        error.username = "El nombre de usuario debe tener al menos 5 caracteres."
    }

    if (!input.password){ 
        error.password = "La contraseña es obligatoria.";
    } else if(!passwordRegex.test(input.password)) {
        error.password="La contraseña debe tener al menos 6 caracteres, una letra y un número"
    }

    return error;
}