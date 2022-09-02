import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FacadeTableService } from '../abstract/facade-table.service';
import { Cadastro } from '../model/Cadastro';
import { Pessoa } from '../model/Pessoa';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit, OnChanges {
  formGroup!: FormGroup;
  constructor(
    private facadeTableService: FacadeTableService,
    private formBuilder: FormBuilder
    ) { }

  ngOnChanges(): void {
  }
  
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
        next: () => {
          this.ngOnChanges()
        },
        error: (error: any) => {
            console.error('ERRO: ', error);
        }
    })
      //this.formGroup.reset();
    }
  }

}
