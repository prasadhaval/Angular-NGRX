import { createAction, props } from "@ngrx/store"
import { LoginrUser } from "../shared/model/login-user.model"

const LOGIN_START = '[LOGIN] LOGIN START'
const LOGIN_START_SUCCESS = '[LOGIN] LOGIN SUCCESS'
const LOGIN_ERROR = '[LOGIN] LOGIN ERROR'


export const LOGIN_START_ACTION = createAction(LOGIN_START , props<{EMAIL : string , PASSWORD : string}>())
export const LOGIN_START_ACTION_SUCCESS = createAction(LOGIN_START_SUCCESS , props<{ LoginrUser : LoginrUser}>())
export const LOGIN_ERROR_ACTION = createAction(LOGIN_ERROR , props<{ERROR : string}>())