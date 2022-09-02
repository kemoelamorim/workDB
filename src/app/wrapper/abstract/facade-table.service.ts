import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TableService } from '../core/table.service';
import { IPessoa } from '../model/pessoa';

@Injectable({
  providedIn: 'root'
})
export class FacadeTableService {

  constructor(private tableService: TableService) { }
  
  getFacadeTable(): Observable<IPessoa[]>{
    return this.tableService.getDadosTabela()
  }

}
