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
}
