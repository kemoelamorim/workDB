import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPessoa } from '../model/pessoa';

@Injectable({
  providedIn: 'root'
})
export class TableService {
  myDataArray = [
    {
      id: "1",
      nome:"kemoel",
      sobrenome:"miranda",
      altura:"1.75",
      data:"09/05/1994",
      idade: "28"
    },
    {
      id: "2",
      nome:"thamiris",
      sobrenome:"ruany",
      altura:"1.75",
      data:"15/07/1993",
      idade: "29"
    },
    {
      id: "3",
      nome:"maria",
      sobrenome:"franco",
      altura:"1.75",
      data:"13/10/1992",
      idade: "30"
    },
  ]

  constructor(private httpClient: HttpClient) { }

  getDadosTabela(): Observable<IPessoa> | any {
    return this.myDataArray;
  }
}
