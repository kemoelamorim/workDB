import { DateHelper } from '../utils/DateHelper';

export class Cadastro{
  private nome: string;
  private sobrenome: string;
  private altura: number;
  private nascimento!: string;
  private idade!: number;

  constructor(cadastro: ICadastro){
    this.nome = cadastro.nome
    this.sobrenome = cadastro.sobrenome;
    this.altura = cadastro.altura;
    this.calculaIdade(cadastro.nascimento);
  }

  calculaIdade(dataNascimento: string){
    const data = DateHelper.textoParaDate(dataNascimento);
    this.nascimento = DateHelper.dataPataTexto(data);
    this.idadeCalculada(data, new Date())
  }

  private idadeCalculada(nascimento: Date, hoje: Date): void{
    this.idade = Math.floor(Math.ceil(Math.abs(nascimento.getTime() - hoje.getTime()) / (1000 * 3600 * 24)) / 365.25);
  }
}

interface ICadastro{
  nome: string,
  sobrenome: string,
  altura: number,
  nascimento: string,
}