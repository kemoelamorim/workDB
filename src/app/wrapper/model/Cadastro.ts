import { DateHelper } from '../utils/DateHelper';
import { Pessoa } from './Pessoa';

export class Cadastro{
  id!: number;
  nome: string;
  sobrenome: string;
  altura: number;
  nascimento: string;
  idade!: number;
  constructor(cadastro: ICadastro){
    this.nome = cadastro.nome
    this.sobrenome = cadastro.sobrenome;
    this.altura = cadastro.altura;
    this.nascimento = cadastro.nascimento;
    this.calculaIdade();

  }
  calculaIdade(){
    const data = DateHelper.textoParaDate(this.nascimento);
    this.idadeCalculada(data, new Date())

  }
  private idadeCalculada(nascimento: Date, hoje: Date): void{
    this.idade =Math.floor(Math.ceil(Math.abs(nascimento.getTime() - hoje.getTime()) / (1000 * 3600 * 24)) / 365.25);
  }
  salvar(){
    return this;
  }
}

interface ICadastro{
  nome: string,
  sobrenome: string,
  altura: number,
  nascimento: string,
}