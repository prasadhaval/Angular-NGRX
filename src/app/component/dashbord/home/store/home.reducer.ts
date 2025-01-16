import { createReducer, on } from "@ngrx/store"
import { PostinitialState } from "./home.state"
import { DELETE_DATA_SUCCESS_ACTION, GET_DATA_SUCCESS_ACTION, POST_DATA_SUCCESS_ACTION, UPDATE_DATA_SUCCESS_ACTION } from "./home.action"


const _HomeReducer = createReducer(PostinitialState , 
    on(POST_DATA_SUCCESS_ACTION , (state,action)=>{
        return{
            ...state,
            post : [...state.post , action.POST]
        }
    }),
    on(GET_DATA_SUCCESS_ACTION , (state ,action)=>{
        return {
            ...state,
            post : action.POST
        }
    }),
    on(UPDATE_DATA_SUCCESS_ACTION , (state,action)=>{
        const updateData = state.post.map((ele)=> ele.id === action.POST.id ?  action.POST : ele)
        return {
            ...state,
            post : updateData
        }
    }),

    on(DELETE_DATA_SUCCESS_ACTION , (state,action)=>{
        const deleteData = state.post.filter((ele)=> ele.id !== action.ID)
        return {
            ...state,
            post : deleteData
        }
    })
)

export function HomeReducer(state : any , action : any){
    return _HomeReducer(state,action)
}