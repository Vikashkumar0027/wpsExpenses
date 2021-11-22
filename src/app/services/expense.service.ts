import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {

  expenseList= 'http://localhost:3000/expense';
  category = 'http://localhost:3000/catogary';

  constructor(private http: HttpClient){}

  ExpList(): Observable<any> {
    return this.http.get<any>(this.expenseList);
  }
categoryLst():Observable<any>{
  return this.http.get<any>(this.category);
}
create(data: any): Observable<any> {
  return this.http.post<any>(this. expenseList, data);
}
delete(id: number): Observable<any> {
  return this.http.delete<any>(`${this.expenseList}/${id}`);
}
patchItem(id: number): Observable<any> {
  return this.http.get<any>(`${this.expenseList}/${id}`); // ya / ka matalab uske andar id ko call kiya gaya
}
update(id: number, data: any): Observable<any> {
  return this.http.put<any>(`${this.expenseList}/${id}`, data);
}
// catList(): Observable<any> {
//   return this.http.get<any>(this.categoryList);
// }

}
