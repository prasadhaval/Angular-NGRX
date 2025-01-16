import { Injectable, inject } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, exhaustMap, map, tap } from 'rxjs/operators';
import { LoginService } from '../shared/service/login.service';
import { LOGIN_ERROR_ACTION, LOGIN_START_ACTION, LOGIN_START_ACTION_SUCCESS } from './login.action';
import { Store } from '@ngrx/store';
import { LOADER_ACTION } from '../../dashbord/loader/store/loader.action';
import { Router } from '@angular/router';


@Injectable()
export class LoginEffects {
  private actions$ = inject(Actions);
  private loginservice = inject(LoginService);
  private store = inject(Store)
    private router = inject(Router)

  login$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(LOGIN_START_ACTION),
      exhaustMap(action =>
        this.loginservice.postLoginFun(action.EMAIL , action.PASSWORD).pipe(
          map(user =>{
              this.store.dispatch(LOADER_ACTION({loader : false}))
          this.store.dispatch(LOGIN_ERROR_ACTION({ERROR :''}))
           return LOGIN_START_ACTION_SUCCESS({LoginrUser : user})
          }),
          
          catchError(error => {
            this.store.dispatch(LOADER_ACTION({loader : false}))
            return of(LOGIN_ERROR_ACTION({ERROR : error.error.error.errors[0].message}))
          })
        )
      )
    );  
  });


  loginRedirect$ = createEffect(()=>{
    return this.actions$.pipe(
        ofType(LOGIN_START_ACTION_SUCCESS),
        tap((action)=>{
          this.router.navigateByUrl('home')  
          this.store.dispatch(LOGIN_ERROR_ACTION({ERROR :''}))
        })
    )
  } , {dispatch : false})
}