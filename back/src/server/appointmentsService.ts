export const getAllAppointmentsService = async ():Promise<string> => {

    return await "Obtinen el listado de todos los turnos de todos los usuarios";
};

export const postScheduleService = async ():Promise<string> => {

    return await "se puede agendar un nuevo turno.";
};


export const putCancelService = async ():Promise<string> => {

    return await "Se puede cambiar el estatus de un turno a 'cancelled'";
};