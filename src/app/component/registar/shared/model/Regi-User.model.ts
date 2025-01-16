

export interface RegistarUser {
    idToken : string,
    email : string,
    refreshToken : string,
    expiresIn : string,
    localId : string,
}

export interface RegistarinitialStateInterface {
    RegistarUSER : RegistarUser | null,
    ErrorMessage : string
}