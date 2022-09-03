import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, take } from 'rxjs';
import { Cadastro } from '../model/Cadastro';
import { IPessoa } from '../model/IPessoa';

@Injectable({
  providedIn: 'root'
})
export class TableService {

  constructor(private httpClient: HttpClient) { }

  getDadosTabela(): Observable<IPessoa[]> | any {
    return this.httpClient.get<IPessoa[]>("http://localhost:3000/dados")
  }
  postDadosTabela(dados: Cadastro): Observable<IPessoa>{
    return this.httpClient.post<IPessoa>("http://localhost:3000/dados", dados)
  }
}
