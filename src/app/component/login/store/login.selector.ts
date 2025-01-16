import { createFeatureSelector, createSelector } from "@ngrx/store";
import { LogininitialStateInterface } from "../shared/model/login-user.model";

const LoginCreateFeatureSelector = createFeatureSelector<LogininitialStateInterface>('LOGIN')

export const LoginErrorSelector = createSelector(LoginCreateFeatureSelector , state=>{
    return state.ErrorMessage
})