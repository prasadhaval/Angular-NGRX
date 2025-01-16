import { createReducer, on } from "@ngrx/store"
import { LoaderinitialState } from "./loader.state"
import { LOADER_ACTION } from "./loader.action"

const _LoaderReducer = createReducer(LoaderinitialState , 
    on(LOADER_ACTION , (state,action)=>{
        return {
            ...state,
            loader : action.loader
        }
    })
)

export function LoaderReducer(state:any,action:any){
    return _LoaderReducer(state,action)
}