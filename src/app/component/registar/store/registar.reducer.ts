import { createReducer, on } from "@ngrx/store"
import { RegistarinitialState } from "./registar.state"
import { SIGNUP_ERROR_ACTION, SIGNUP_START_ACTION_SUCCESS } from "./registar.action"

const _SignUpReducer = createReducer(RegistarinitialState , 
    on(SIGNUP_START_ACTION_SUCCESS , (state , action)=>{
        return {
            ...state ,
            RegistarUSER : action.SignUpUSER
        }
    }),
    on(SIGNUP_ERROR_ACTION , (state , action)=>{
        return {
            ...state,
            ErrorMessage : action.ERROR
        }
    })
)

export function SignUpReducer(state : any , action : any){
    return _SignUpReducer(state,action)
}