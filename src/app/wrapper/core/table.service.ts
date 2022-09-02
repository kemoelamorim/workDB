import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, take } from 'rxjs';
import { Cadastro } from '../model/Cadastro';
import { Pessoa } from '../model/Pessoa';

@Injectable({
  providedIn: 'root'
})
export class TableService {

  constructor(private httpClient: HttpClient) { }

  getDadosTabela(): Observable<Pessoa[]> | any {
    return this.httpClient.get<Pessoa[]>("http://localhost:3000/dados")
  }
  postDadosTabela(dados: Cadastro) {
    console.log(JSON.stringify(dados))
    
    return this.httpClient.post("http://localhost:3000/dados",
      dados
      )
  }
}
