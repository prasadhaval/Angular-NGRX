import { Component, inject, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { LOADER_ACTION } from '../loader/store/loader.action';
import { DELETE_DATA_ACTION, GET_DATA_ACTION } from './store/home.action';
import { Observable } from 'rxjs';
import { Post } from './shared/model/post.model';
import { GetHomeSelector } from './store/home.selector';

@Component({
  selector: 'app-home',
  standalone: false,
  
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  homeTableData! : Observable<Post[]>
  private store = inject(Store)

  ngOnInit(): void {
    setTimeout(()=> {
      this.store.dispatch(LOADER_ACTION({loader : true}))
    })
    this.store.dispatch(GET_DATA_ACTION())
    this.homeTableData = this.store.select(GetHomeSelector)
  }


  deleteFun(id : any){
    this.store.dispatch(LOADER_ACTION({loader : true}))
    this.store.dispatch(DELETE_DATA_ACTION({ID : id})) 
  }

}
