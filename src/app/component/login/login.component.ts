import { Component, inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { LOADER_ACTION } from '../dashbord/loader/store/loader.action';
import { LOGIN_START_ACTION } from './store/login.action';
import { Observable } from 'rxjs';
import { LoginErrorSelector } from './store/login.selector';

@Component({
  selector: 'app-login',
  standalone: false,
  
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  private store = inject(Store)
  isError! : Observable<string>
  loginForm!: FormGroup
  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl(''),
      password: new FormControl(''),
    })
    this.isError = this.store.select(LoginErrorSelector)
  }

  submitForm(){
    this.store.dispatch(LOADER_ACTION({loader : true}))
    this.store.dispatch(LOGIN_START_ACTION({EMAIL : this.loginForm.value.email , PASSWORD : this.loginForm.value.password}))
  }
}
