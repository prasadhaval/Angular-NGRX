import { createReducer, on } from "@ngrx/store"
import { RegistarinitialState } from "../../registar/store/registar.state"
import { LOGIN_ERROR_ACTION, LOGIN_START_ACTION_SUCCESS } from "./login.action"

const _LoginReducer = createReducer(RegistarinitialState , 
    on(LOGIN_START_ACTION_SUCCESS , (state , action)=>{
        return {
            ...state,
            RegistarUSER : action.LoginrUser
        }
    }),
    on(LOGIN_ERROR_ACTION , (state,action)=>{
        return {
            ...state,
            ErrorMessage : action.ERROR
        }
    })
)

export function LoginReducer(state : any , action : any){
    return _LoginReducer(state , action)
}