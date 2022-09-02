import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPessoa } from '../model/pessoa';

@Injectable({
  providedIn: 'root'
})
export class TableService {

  constructor(private httpClient: HttpClient) { }

  getDadosTabela(): Observable<IPessoa[]> | any {
    return this.httpClient.get<IPessoa[]>("http://localhost:3000/dados")
  }
}
