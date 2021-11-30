import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JobhistoryService {
  jobHistoryList= 'http://localhost:3000/jobHistory';
  constructor(private http:HttpClient) { }
  
historyLst():Observable<any>{
  return this.http.get<any>(this.jobHistoryList);
}
create(data: any): Observable<any> {    
  return this.http.post<any>(this. jobHistoryList, data);
}
}
