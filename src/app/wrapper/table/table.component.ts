import { Component, OnInit } from '@angular/core';
import { FacadeTableService } from '../abstract/facade-table.service';
import { IPessoa } from '../model/pessoa';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  dataSource: IPessoa[] = [];
  displayNameColumns: string[] = [];
  constructor(private facadeTableService: FacadeTableService) { }

  ngOnInit(): void {
    this.dataSource = this.facadeTableService.getFacadeTable();
    this.displayNameColumns = Object.keys(this.dataSource[0]);
    console.log(this.displayNameColumns)
  }

}
