import { createFeatureSelector, createSelector } from "@ngrx/store";
import { RegistarinitialStateInterface } from "../shared/model/Regi-User.model";

const SignUpCreateFeatureSelector = createFeatureSelector<RegistarinitialStateInterface>('SIGNUP')

export const SignUpErrorselector = createSelector(SignUpCreateFeatureSelector , state=>{
    return state.ErrorMessage
})