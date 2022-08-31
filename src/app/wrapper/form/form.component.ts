import { Component, OnInit } from '@angular/core';
import { FacadeTableService } from '../abstract/facade-table.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  constructor(private facadeTableService: FacadeTableService) { }
  
  ngOnInit(): void {
    
  }

}
