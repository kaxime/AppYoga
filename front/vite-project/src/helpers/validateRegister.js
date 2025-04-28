export const validate = (input) =>{
    const errors = {};
    const emailRegex = /^.+@.+\..+$/;
    if (!input.name || !input.email || !input.username || !input.password) {return ("Por favor completa todos los campos." );}
    
    if (!input.name) errors.name = "El nombre es obligatorio.";
    if (!input.email) errors.email = "El email es obligatorio.";
    else if (!emailRegex.test(input.email)) errors.email = "El email no es válido.";
    
    if (!input.password) errors.password = "La contraseña es obligatoria.";
    else if (input.password.length < 6) errors.password = "La contraseña debe tener al menos 6 caracteres.";
    
    if (!input.username) errors.username = "El nombre de usuario es obligatorio.";
    return errors;
}