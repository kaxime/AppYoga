import { Credential } from "../entities/Credential";
import { CredentialModel } from "../config/data-source";
import { LoginDto } from "../dto/LoginDto";
import { User } from "../entities/User";


export const createCredentialsService = async (credentials: LoginDto): Promise <Credential> => {
    const newCredentials:Credential = CredentialModel.create(credentials)
    await CredentialModel.save(newCredentials);

    return  newCredentials;
};

export const loginCredentialsService = async (credentials: LoginDto): Promise <Credential> => {

    const {username, password} = credentials
    const credential:Credential | null =await CredentialModel.findOneBy({username})

    if(!credential) throw new Error ("credencial invalida")
        if (credential.password !== password) throw new Error("credencial invalida")

    return credential
}