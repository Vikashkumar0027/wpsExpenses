import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JobListingService {
  jobList= 'http://localhost:3000/job';
  constructor(private http:HttpClient) { }

  jobsList(): Observable<any> {
    return this.http.get<any>(this.jobList);
  }
  create(data: any): Observable<any> {
    return this.http.post<any>(this.jobList, data);
  }
  patchItem(id: number): Observable<any> {
    return this.http.get<any>(`${this.jobList}/${id}`); // ya / ka matalab uske andar id ko call kiya 
  }
  update(id: number, data: any): Observable<any> {
    return this.http.put<any>(`${this.jobList}/${id}`, data);
  }
}
