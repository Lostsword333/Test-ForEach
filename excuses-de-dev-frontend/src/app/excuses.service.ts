import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExcusesService {
  private apiUrl = '/api/excuses';

  constructor(private http: HttpClient) {}

  getExcuses(): Observable<string[]> {
    return this.http.get<string[]>(this.apiUrl);
  }

  addExcuse(excuse: string): Observable<any> {
    return this.http.post<any>(this.apiUrl, { excuse });
  }
}
