import { createAction, props } from "@ngrx/store"

const LOADER = '[LOADER] LOADER START'

export const LOADER_ACTION =  createAction(LOADER , props<{loader : boolean}>())