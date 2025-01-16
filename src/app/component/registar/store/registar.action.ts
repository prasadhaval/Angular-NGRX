import { createAction, props } from "@ngrx/store"
import { RegistarUser } from "../shared/model/Regi-User.model"

const SIGNUP_START = '[SIGNUP] SIGNUP START'
const SIGNUP_START_SUCCESS = '[SIGNUP] SIGNUP SUCCESS'
const SIGNUP_ERROR = '[SIGNUP] SIGNUP ERROR'


export const SIGNUP_START_ACTION = createAction(SIGNUP_START , props<{EMAIL : string , PASSWORD : string}>())
export const SIGNUP_START_ACTION_SUCCESS = createAction(SIGNUP_START_SUCCESS , props<{SignUpUSER : RegistarUser}>())
export const SIGNUP_ERROR_ACTION = createAction(SIGNUP_ERROR , props<{ERROR : string}>())