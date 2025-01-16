import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginResponce } from '../model/login-responce.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  static url =`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDpU-ySMI1HEu2PRBXSz18ugBJKFQt0Q3c`
  constructor(private http : HttpClient) { }

  postLoginFun(email : string , password : string) : Observable<LoginResponce>{
    return this.http.post<LoginResponce>(LoginService.url , {email,password, returnSecureToken : true})
  }
}
