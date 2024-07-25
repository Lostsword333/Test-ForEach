import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExcusesService {
  private apiUrl = 'http://localhost:3000/excuses';

  constructor(private http: HttpClient) {}

  getExcuses(): Observable<string[]> {
    return this.http.get<string[]>(this.apiUrl);
  }

  addExcuse(excuse: string): Observable<any> {
    return this.http.post<any>(this.apiUrl, { excuse });
  }
}
