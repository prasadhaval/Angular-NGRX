import { Component, inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { editeHomeSelector } from '../store/home.selector';
import { LOADER_ACTION } from '../../loader/store/loader.action';
import { UPDATE_DATA_ACTION } from '../store/home.action';

@Component({
  selector: 'app-update',
  standalone: false,
  
  templateUrl: './update.component.html',
  styleUrl: './update.component.css'
})
export class UpdateComponent {
    UpdateForm! : FormGroup
    id! : string
    private store = inject(Store)
    private active = inject(ActivatedRoute)
    ngOnInit(): void {
      this.active.params.subscribe((data : any)=>{
        this.id = data.id
        const id = data.id
        this.store.select(editeHomeSelector , {id}).subscribe((data : any)=>{
          this.UpdateForm = new FormGroup({
            firstName : new FormControl(data?.firstName),
            lastName : new FormControl(data?.lastName),
            email : new FormControl(data?.email),
            contact : new FormControl(data?.contact),
          })
        })
      })
    }

    submitPost(){
      const updateData = {
        id : this.id,
        firstName : this.UpdateForm.value.firstName,
        lastName : this.UpdateForm.value.lastName,
        email : this.UpdateForm.value.email,
        contact : this.UpdateForm.value.contact,
      }

      this.store.dispatch(LOADER_ACTION({loader : true}))
      this.store.dispatch(UPDATE_DATA_ACTION({POST : updateData}))
    }
}
