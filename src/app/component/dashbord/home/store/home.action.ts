import { createAction, props } from "@ngrx/store"
import { Post } from "../shared/model/post.model"

const POST_DATA = '[HOME] POST DATA'
const POST_DATA_SUCCESS = '[HOME] POST DATA SUCCESS'


export const POST_DATA_ACTION = createAction(POST_DATA , props<{POST : Post}>())
export const POST_DATA_SUCCESS_ACTION = createAction(POST_DATA_SUCCESS , props<{POST : Post}>())



const GET_DATA = '[HOME] GET DATA'
const GET_DATA_SUCCESS = '[HOME] GET DATA SUCCESS'


export const GET_DATA_ACTION = createAction(GET_DATA)
export const GET_DATA_SUCCESS_ACTION = createAction(GET_DATA_SUCCESS , props<{POST : Post[]}>())





const UPDATE_DATA = '[HOME] UPDATE DATA'
const UPDATE_DATA_SUCCSS = '[HOME] UPDATE DATA SUCCESS'


export const UPDATE_DATA_ACTION = createAction(UPDATE_DATA , props<{POST : Post}>())
export const UPDATE_DATA_SUCCESS_ACTION = createAction(UPDATE_DATA_SUCCSS , props<{POST : Post}>())




const DELETE_DATA = '[HOME] DELETE DATA'
const DELETE_DATA_SUCCESS = '[HOME] DELETE DATA SUCCESS'


export const DELETE_DATA_ACTION = createAction(DELETE_DATA , props<{ID : string}>())
export const DELETE_DATA_SUCCESS_ACTION = createAction(DELETE_DATA_SUCCESS , props<{ID : string}>())