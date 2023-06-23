import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Skill } from '../model/skill';

@Injectable({
  providedIn: 'root'
})
export class SSkillService {
  Url = "http://localhost:8080/skill/"

  constructor(private HttpClient: HttpClient) { }

  public list(): Observable<Skill[]>{
    return this.HttpClient.get<Skill[]>(this.Url + "list");
  }

  public detail(id: number): Observable<Skill>{
    return this.HttpClient.get<any>(this.Url +`detail/${id}`);
  }

  public save(s: Skill): Observable<any>{
    return this.HttpClient.post<any>(this.Url + "create", s)
  }

  public update(id: number, s: Skill): Observable<any>{
    return this.HttpClient.put<any>(this.Url + `update/${id}`, s);
  }

  public delete(id: number): Observable<any>{
    return this.HttpClient.delete<any>(this.Url + `delete/${id}`);
  }
}
