import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginApiService {
  url = 'http://localhost:3000/posts';
  categoryList = 'http://localhost:3000/catogary';
  ur3 = 'http://localhost:3000/products';

  constructor(private http: HttpClient) {}
  user(): Observable<any> {
    // return this.http.post(this.url, data);
    return this.http.get<any>(this.url);
  }
  create(data: any): Observable<any> {
    return this.http.post<any>(this.categoryList, data);
  }
  catList(): Observable<any> {
    return this.http.get<any>(this.categoryList);
  }
  delete(id: number): Observable<any> {
    return this.http.delete<any>(`${this.categoryList}/${id}`);
  }
  categoryItem(id: number): Observable<any> {
    return this.http.get<any>(`${this.categoryList}/${id}`); // ya / ka matalab uske andar id ko call kiya gaya
  }
  update(id: number, data: any): Observable<any> {
    return this.http.put<any>(`${this.categoryList}/${id}`, data);
  }
}
