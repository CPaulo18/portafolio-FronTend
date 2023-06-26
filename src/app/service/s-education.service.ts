import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Education } from '../model/education';
import { environment } from 'src/environments/enviroment';

@Injectable({
  providedIn: 'root',
})
export class SEducationService {
  Url = environment.URL + 'education/';

  constructor(private HttpClient: HttpClient) {}

  public list(): Observable<Education[]> {
    return this.HttpClient.get<Education[]>(this.Url + 'list');
  }

  public detail(id: number): Observable<Education> {
    return this.HttpClient.get<any>(this.Url + `detail/${id}`);
  }

  public save(edu: Education): Observable<any> {
    return this.HttpClient.post<any>(this.Url + 'create', edu);
  }

  public update(id: number, edu: Education): Observable<any> {
    return this.HttpClient.put<any>(this.Url + `update/${id}`, edu);
  }

  public delete(id: number): Observable<any> {
    return this.HttpClient.delete<any>(this.Url + `delete/${id}`);
  }
}
