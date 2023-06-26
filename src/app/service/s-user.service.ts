import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/user.model';
import { environment } from 'src/environments/enviroment';

@Injectable({
  providedIn: 'root',
})
export class SUserService {
  Url = environment.URL + 'users/';

  constructor(private HttpClient: HttpClient) {}

  public list(): Observable<User[]> {
    return this.HttpClient.get<User[]>(this.Url + 'list');
  }

  public detail(id: number): Observable<User> {
    return this.HttpClient.get<any>(this.Url + `detail/${id}`);
  }

  // public save(user: User): Observable<any>{
  //   return this.HttpClient.post<any>(this.Url + "create", user);
  // }

  public update(id: number, user: User): Observable<any> {
    return this.HttpClient.put<any>(this.Url + `update/${id}`, user);
  }

  // public delete(id: number): Observable<any>{
  //   return this.HttpClient.delete<any>(this.Url + `delete/${id}`);
  // }
}
