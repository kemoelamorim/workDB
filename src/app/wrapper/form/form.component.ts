import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FacadeTableService } from '../abstract/facade-table.service';
import { AtualizaTabelaService } from '../core/atualiza-tabela.service';
import { Cadastro } from '../model/Cadastro';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  formGroup!: FormGroup;
  constructor(
    private facadeTableService: FacadeTableService,
    private formBuilder: FormBuilder,
    private atualizaTabela: AtualizaTabelaService
    ) { }
  
  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      nome: ['', Validators.required],
      sobrenome: ['', Validators.required],
      altura: ['', Validators.required],
      nascimento: ['', Validators.required]
    })
  }

  cadastrar(){
    if(this.formGroup.valid){
      const cadastro = new Cadastro(this.formGroup.value);
      this.facadeTableService.postFacadeTable(cadastro).subscribe({
        next: (res) => {
          this.atualizaTabela.setObservable(res)
        },
        error: (error: any) => {
            console.error('ERRO: ', error);
        }
      })
      this.formGroup.reset();
    }
  }

}
