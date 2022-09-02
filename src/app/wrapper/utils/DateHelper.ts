export class DateHelper{
  
  constructor(){
    throw new Error('DateHelper não pode ser instanciada')
  }
  
  static dataPataTexto(data: Date){
    return `${data.getDate()}/${(data.getMonth()+1)}/${data.getFullYear()}`
  }
  static textoParaDate(texto: string): Date{
    if(!/\d{4}-\d{2}-\d{2}/.test(texto)){
      throw new Error("Deve ser usado o formato aaaa-mm-dd")
    }
    const exp = /-/g;
    const date = new Date(texto.replace(exp, ','));
    return date;
  }
}