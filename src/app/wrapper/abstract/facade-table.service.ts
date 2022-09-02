import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TableService } from '../core/table.service';
import { Cadastro } from '../model/Cadastro';
import { Pessoa } from '../model/Pessoa';

@Injectable({
  providedIn: 'root'
})
export class FacadeTableService {

  constructor(private tableService: TableService) { }
  
  getFacadeTable(): Observable<Pessoa[]>{
    return this.tableService.getDadosTabela()
  }
  postFacadeTable(dados: Cadastro): any{
    return this.tableService.postDadosTabela(dados)
  }

}
