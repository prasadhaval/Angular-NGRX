import { createFeatureSelector, createSelector } from "@ngrx/store";
import { LoaderinitialStateInterface } from "./loader.state";

const LoaderCreateFeatureSelector = createFeatureSelector<LoaderinitialStateInterface>('Loader')

export const LoaderSelector = createSelector(LoaderCreateFeatureSelector , (state)=>{
    return state.loader
})