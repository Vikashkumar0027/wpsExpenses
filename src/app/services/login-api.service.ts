import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginApiService {
  url="http://localhost:3000/posts";

  constructor(private http:HttpClient) { }
  user():Observable<any>{
    // return this.http.post(this.url, data);
    return this.http.get<any>(this.url);
  }
 

}
