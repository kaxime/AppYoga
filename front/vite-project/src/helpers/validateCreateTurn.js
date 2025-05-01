export const validateCreateTurn = (input) => {
    const error = {};

    if (!input.date) {
        error.date = "La fecha es obligatoria.";
    } else {
        const selectedDate = new Date(input.date);
        const today = new Date();
        today.setHours(0, 0, 0, 0); // Normalizamos la hora de hoy

        if (selectedDate < today) {
            error.date = "No se puede agendar una fecha en el pasado.";
        }
    }

    if (!input.time) {
        error.time = "La hora es obligatoria.";
    }

    return error;
};

