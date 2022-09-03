import { Component, Input, OnInit } from '@angular/core';
import { FacadeTableService } from '../abstract/facade-table.service';
import { AtualizaTabelaService } from '../core/atualiza-tabela.service';
import { IPessoa } from '../model/IPessoa';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  dataSource: IPessoa[] = [];
  displayNameColumns: string[] = [];
  constructor(
    private facadeTableService: FacadeTableService,
    private atualizaTabela: AtualizaTabelaService
    ){ 
      atualizaTabela.getObservable().subscribe(()=>{
        this.ngOnInit()
      })
    }

  ngOnInit(): void {
    this.facadeTableService.getFacadeTable().subscribe({
      next: (dados: IPessoa[]) => {
				this.dataSource = dados;
        this.displayNameColumns = Object.keys(this.dataSource[0]);
			}
    });
  }
  onDestroy(){
    this.dataSource = []
  }

}
