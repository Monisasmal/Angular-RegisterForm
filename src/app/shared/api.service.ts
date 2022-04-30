import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private _http: HttpClient) { }
  postForm(data: any) {
    return this._http.post<any>("http://localhost:3000/signup", data).pipe(map((res: any) => {
      return res;
    }))
  }
  getForm() {
    return this._http.get<any>("http://localhost:3000/signup").pipe(map((res: any) => {
      return res;
    }))
  }
  updateForm(data: any, id: number) {
    return this._http.put<any>("http://localhost:3000/signup/" +id, data).pipe(map((res: any) => {
      return res;
    }))

  }
  deleteForm(id: number) {
    return this._http.delete<any>("http://localhost:3000/signup/" + id).pipe(map((res: any) => {
      return res;
    }))
  }
}
