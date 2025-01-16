import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from '../model/post.model';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  static url = `https://ngrx-login-60405-default-rtdb.asia-southeast1.firebasedatabase.app/student.json`
  constructor(private http : HttpClient) { }

  postFun(obj : Post) : Observable<{name : string}>{
    return this.http.post<{name : string}>(HomeService.url , obj)
  }

  getFun() : Observable<Post[]>{
    return this.http.get<Post[]>(HomeService.url).pipe(
      map((data)=>{
        const postData : Post[]=[]
        for(let key in data){
          postData.push({...data[key] , id : key})
        }
        return postData
      })
    )
  }

  updateFun(obj : Post){
    const updateData = {[obj.id as string] : {firstName : obj.firstName , lastName : obj.lastName , email : obj.email , contact : obj.contact}}

    return this.http.patch(HomeService.url , updateData)
  }

  deleteFun(id : string){
    return this.http.delete(`https://ngrx-login-60405-default-rtdb.asia-southeast1.firebasedatabase.app/${id}student.json`)
  }
}
