import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Credentials } from '../model/person.model';
import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  URL = "http://localhost:8080/login"
  constructor(private http: HttpClient) { }

    public Login(creds: Credentials){
    return this.http.post(this.URL, creds, {
      observe: "response"
    }).pipe(map((response: HttpResponse<any>)=>{
      const body = response.body;
      const headers = response.headers;

      const bearerToken = headers.get("Authorization");
      const token = bearerToken!.replace("Bearer ", "");
      
      localStorage.setItem("token", token)
      
      return body;
    }))
    }

    public LogOut(): void{
      window.localStorage.clear();
    }

    public getToken(){
      return localStorage.getItem("token")
    }
}
