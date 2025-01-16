import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-registar',
  standalone: false,
  
  templateUrl: './registar.component.html',
  styleUrl: './registar.component.css'
})
export class RegistarComponent {
  regiForm!: FormGroup
  ngOnInit(): void {
    this.regiForm = new FormGroup({
      email: new FormControl(''),
      password: new FormControl(''),
    })
    
  }

  submitForm(){
    
  }
}
