import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Post, PostinitialStateInterface } from "../shared/model/post.model";

const HomeCreateFeatureSelector = createFeatureSelector<PostinitialStateInterface>('Home')


export const GetHomeSelector = createSelector(HomeCreateFeatureSelector , state=>{
    return state.post
})

export const editeHomeSelector = createSelector(HomeCreateFeatureSelector , (state : any , action : any)=>{
    return state.post.find((ele : any)=> ele.id === action.id)
})