import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RegistarResponce } from '../model/Rrgi-responce.model';

@Injectable({
  providedIn: 'root'
})
export class RegistarService {
  static url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDpU-ySMI1HEu2PRBXSz18ugBJKFQt0Q3c`
    constructor(private http : HttpClient) { }

    postRegistarFun(email : string , password : string) : Observable<RegistarResponce>{
      return this.http.post<RegistarResponce>(RegistarService.url , {email,password, returnSecureToken : true})
    }
}
