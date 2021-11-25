import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
   clientList=" http://localhost:3000/client";
  constructor(private http:HttpClient) { }

  catoList(): Observable<any> {
    return this.http.get<any>(this.clientList);
  }
  create(data: any): Observable<any> {
    return this.http.post<any>(this. clientList, data);
  }
  delete(id: number): Observable<any> {
    return this.http.delete<any>(`${this. clientList}/${id}`);
  }
  update(id: number, data: any): Observable<any> {
    return this.http.put<any>(`${this.clientList}/${id}`, data);
  }
  patchItem(id: number): Observable<any> {
    return this.http.get<any>(`${this.clientList}/${id}`); // ya / ka matalab uske andar id ko call kiya gaya
  }

}
