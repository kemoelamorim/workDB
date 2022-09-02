import { Component, OnInit } from '@angular/core';
import { FacadeTableService } from '../abstract/facade-table.service';
import { Pessoa } from '../model/Pessoa';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  dataSource: Pessoa[] = [];
  displayNameColumns: string[] = [];
  constructor(private facadeTableService: FacadeTableService) { }

  ngOnInit(): void {
    this.facadeTableService.getFacadeTable().subscribe({
      next: (dados: Pessoa[]) => {
				this.dataSource = dados;
        this.displayNameColumns = Object.keys(this.dataSource[0]);
			}
    });
  }
  onDestroy(){
    this.dataSource = []
  }

}
