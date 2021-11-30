import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  service=" http://localhost:3000/services";
  constructor(private http:HttpClient) { }

  serviceList(): Observable<any> {
    return this.http.get<any>(this.service);
  }
  create(data: any): Observable<any> {
    return this.http.post<any>(this. service, data);
  }
  delete(id: number): Observable<any> {
    return this.http.delete<any>(`${this. service}/${id}`);
  }
  patchItem(id: number): Observable<any> {
    return this.http.get<any>(`${this.service}/${id}`); // ya ka matalab uske andar id ko call kiya
  }
  update(id: number, data: any): Observable<any> {
    return this.http.put<any>(`${this.service}/${id}`, data);
  }
}
