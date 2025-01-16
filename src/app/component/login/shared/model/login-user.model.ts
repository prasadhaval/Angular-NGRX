export interface LoginrUser {
    idToken : string,
    email : string,
    refreshToken : string,
    expiresIn : string,
    localId : string,
    registered : boolean,
}


export interface LogininitialStateInterface {
    LoginUSER : LoginrUser | null,
    ErrorMessage : string
}