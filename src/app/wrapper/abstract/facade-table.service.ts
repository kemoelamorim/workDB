import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TableService } from '../core/table.service';
import { Cadastro } from '../model/Cadastro';
import { IPessoa } from '../model/IPessoa';

@Injectable({
  providedIn: 'root'
})
export class FacadeTableService {

  constructor(private tableService: TableService) { }
  
  getFacadeTable(): Observable<IPessoa[]>{
    return this.tableService.getDadosTabela()
  }
  postFacadeTable(dados: Cadastro): Observable<IPessoa>{
    return this.tableService.postDadosTabela(dados)
  }

}
