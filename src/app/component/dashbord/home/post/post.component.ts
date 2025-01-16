import { Component, inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { LOADER_ACTION } from '../../loader/store/loader.action';
import { POST_DATA_ACTION } from '../store/home.action';

@Component({
  selector: 'app-post',
  standalone: false,
  
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent {
  PostForm! : FormGroup
  private store = inject(Store)
  ngOnInit(): void {
    this.PostForm = new FormGroup({
      firstName : new FormControl(''),
      lastName : new FormControl(''),
      email : new FormControl(''),
      contact : new FormControl(''),
    })
  }

  submitPost(){

    const obj = {
      firstName : this.PostForm.value.firstName,
      lastName :this.PostForm.value.lastName,
      email : this.PostForm.value.email,
      contact : this.PostForm.value.contact
    }
    this.store.dispatch(LOADER_ACTION({loader : true}))
    this.store.dispatch(POST_DATA_ACTION({POST : obj}))
  }
}
