import { Injectable, inject } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, exhaustMap, map, tap } from 'rxjs/operators';
import { HomeService } from '../shared/service/home.service';
import { DELETE_DATA_ACTION, DELETE_DATA_SUCCESS_ACTION, GET_DATA_ACTION, GET_DATA_SUCCESS_ACTION, POST_DATA_ACTION, POST_DATA_SUCCESS_ACTION, UPDATE_DATA_ACTION, UPDATE_DATA_SUCCESS_ACTION } from './home.action';
import { Store } from '@ngrx/store';
import { LOADER_ACTION } from '../../loader/store/loader.action';
import { Router } from '@angular/router';


@Injectable()
export class HomeEffects {
  private actions$ = inject(Actions);
  private homeService = inject(HomeService);
  private store = inject(Store)
  private router = inject(Router)

  post$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(POST_DATA_ACTION),
      exhaustMap(action =>
        this.homeService.postFun(action.POST).pipe(
          map(user =>{
            const postdata = {...action.POST , id : user.name}
            this.store.dispatch(LOADER_ACTION({loader : false}))
            return POST_DATA_SUCCESS_ACTION({POST : postdata})
          }),
        )
      )
    );  
  });


  get$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(GET_DATA_ACTION),
      exhaustMap(action =>
        this.homeService.getFun().pipe(
          map(user =>{
            this.store.dispatch(LOADER_ACTION({loader : false}))
            return GET_DATA_SUCCESS_ACTION({POST : user})
          }),
        )
      )
    );  
  });



  update$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(UPDATE_DATA_ACTION),
      exhaustMap(action =>
        this.homeService.updateFun(action.POST).pipe(
          map(user =>{
            this.store.dispatch(LOADER_ACTION({loader : false}))
            return UPDATE_DATA_SUCCESS_ACTION({POST : action.POST})
          }),
        )
      )
    );  
  });


  updateRedirect$ = createEffect(()=>{
    return this.actions$.pipe(
      ofType(UPDATE_DATA_SUCCESS_ACTION),
      tap((acton)=>{
        this.router.navigateByUrl('home/post')
      })
    )
  } , {dispatch : false})



  delete$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(DELETE_DATA_ACTION),
      exhaustMap(action =>
        this.homeService.deleteFun(action.ID).pipe(
          map(user =>{
            this.store.dispatch(LOADER_ACTION({loader : false}))
            return DELETE_DATA_SUCCESS_ACTION({ID : action.ID})
          }),
        )
      )
    );  
  });
}