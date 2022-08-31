import { Injectable } from '@angular/core';
import { TableService } from '../core/table.service';
import { IPessoa } from '../model/pessoa';

@Injectable({
  providedIn: 'root'
})
export class FacadeTableService {

  constructor(private tableService: TableService) { }
  
  getFacadeTable(): IPessoa[]{
    return this.tableService.getDadosTabela()
  }

}
