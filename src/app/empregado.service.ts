import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpregadoService {

  private baseUrl = 'http://localhost:8080/api/empregado';

  constructor(private http: HttpClient) { }

  getEmpregado(id: number): Observable<Object> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  criarEmpregado(empregado: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, empregado);
  }

  atualizarEmpregado(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  removerEmpregado(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  listarEmpregado(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  removerTodos(): Observable<any> {
    return this.http.delete(`${this.baseUrl}` + `/delete`, { responseType: 'text' });
  }
}
