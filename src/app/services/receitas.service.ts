import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReceitasService {

  constructor(private _http: HttpClient) { }

  addReceita(data: any): Observable<any> {
    return this._http.post('http://localhost:3000/receitas', data);
  }

  updateReceita(id: number, data: any): Observable<any> {
    return this._http.put(`http://localhost:3000/receitas/${id}`, data);
  }

  getReceitaList(): Observable<any> {
    return this._http.get('http://localhost:3000/receitas');
  }

  deleteReceita(id: number): Observable<any> {
    return this._http.delete(`http://localhost:3000/receitas/${id}`);
  }
}
