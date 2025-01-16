import { Component, inject, Inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { SIGNUP_START_ACTION } from './store/registar.action';
import { LOADER_ACTION } from '../dashbord/loader/store/loader.action';
import { Observable } from 'rxjs';
import { SignUpErrorselector } from './store/registar.selector';

@Component({
  selector: 'app-registar',
  standalone: false,
  
  templateUrl: './registar.component.html',
  styleUrl: './registar.component.css'
})
export class RegistarComponent {
  regiForm!: FormGroup
  isError! : Observable<string>
  private store = inject(Store)

  ngOnInit(): void {
    this.regiForm = new FormGroup({
      email: new FormControl(''),
      password: new FormControl(''),
    })
     this.isError = this.store.select(SignUpErrorselector)
  }

  submitForm(){
    this.store.dispatch(LOADER_ACTION({loader : true}))
    this.store.dispatch(SIGNUP_START_ACTION({EMAIL : this.regiForm.value.email , PASSWORD : this.regiForm.value.password}))
  }
}
