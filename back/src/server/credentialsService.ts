import { ICredentials } from "../interfaces/IUsers";

export const credentialsArray: ICredentials[] =[
    {
      id: 1,
      username: "maria90",
      password: "clave123"
    },
]
export const createCredentialsService = async (credentials: Omit<ICredentials,"id">): Promise <number> => {
    const newCredentials: ICredentials = {
        id: credentialsArray.length +1,
        ...credentials

    }
    credentialsArray.push(newCredentials)
    return await newCredentials.id;
};

export const loginCredentialsService = async (username: string, password:string): Promise <number> => {
    const credential = credentialsArray.find((c)=> c.username === username && c.password === password);
    if (!credential) {
        return Promise.reject("Credenciales incorrectas");
      }
      return credential.id;
}