import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experience } from '../model/experience';

@Injectable({
  providedIn: 'root',
})
export class SExperienceService {
  expURl = 'http://localhost:8080/experience/';

  constructor(private HttpClient: HttpClient) {}
  public list(): Observable<Experience[]> {
    return this.HttpClient.get<Experience[]>(this.expURl + 'list');
  }

  public detail(id: number): Observable<Experience> {
    return this.HttpClient.get<any>(this.expURl + `detail/${id}`);
  }

  public save(exp: Experience): Observable<any> {
    return this.HttpClient.post<any>(this.expURl + 'create', exp);
  }

  public update(id: number, exp: Experience): Observable<any> {
    return this.HttpClient.put<any>(this.expURl + `update/${id}`, exp);
  }

  public delete(id: number): Observable<any> {
    return this.HttpClient.delete<any>(this.expURl + `delete/${id}`);
  }
}
