import { Component, inject, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { LoaderSelector } from './component/dashbord/loader/store/loader.selector';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  isLoader! : Observable<boolean>

  private store = inject(Store)

  ngOnInit(): void {
    this.isLoader = this.store.select(LoaderSelector)
  }
}
