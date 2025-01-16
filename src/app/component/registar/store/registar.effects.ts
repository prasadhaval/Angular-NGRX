import { Injectable, inject } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, exhaustMap, map, take, tap } from 'rxjs/operators';
import { RegistarService } from '../shared/service/registar.service';
import { Router } from '@angular/router';
import { SIGNUP_ERROR_ACTION, SIGNUP_START_ACTION, SIGNUP_START_ACTION_SUCCESS } from './registar.action';
import { LOADER_ACTION } from '../../dashbord/loader/store/loader.action';
import { Store } from '@ngrx/store';


@Injectable()
export class SignUpEffects {
  private actions$ = inject(Actions);
  private signupservice = inject(RegistarService);
  private router = inject(Router)
private store = inject(Store)
  signup$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(SIGNUP_START_ACTION),
      exhaustMap(action =>
        this.signupservice.postRegistarFun(action.EMAIL , action.PASSWORD).pipe(
          map(user =>{
             this.store.dispatch(LOADER_ACTION({loader : false}))
             this.store.dispatch(SIGNUP_ERROR_ACTION({ERROR :''}))
         return SIGNUP_START_ACTION_SUCCESS({SignUpUSER : user})
          }),
           catchError(error =>{
            this.store.dispatch(LOADER_ACTION({loader : false}))
            return  of(SIGNUP_ERROR_ACTION({ERROR : error.error.error.errors[0].message}))
           })
        )
      )
    );  
  });


  signUpRedirect = createEffect(()=>{
    return this.actions$.pipe(
        ofType(SIGNUP_START_ACTION_SUCCESS),
        tap((action)=>{
          this.store.dispatch(LOADER_ACTION({loader : false}))
            this.router.navigateByUrl('/login')
            this.store.dispatch(SIGNUP_ERROR_ACTION({ERROR :''}))
        })
    )
  }, {dispatch : false})
}