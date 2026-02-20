/*
implementação de classes em DART

*/
class Data {
  int dia = 0;
  int mes =0;
  int ano =0;

  //construtor
  Data([int dia = 0, int mes = 0, int ano =0]){
    this.dia = dia;
    this.mes = mes;
    this.ano = ano;
  }

//metodo
  String obterData(){
    return "$dia/$mes/$ano";
  }

  String toString(){
    return obterData();
  }
  
}
main (){
var dataAniversario = new Data(08,11,1973);
dataAniversario.dia = 08;
dataAniversario.mes = 11;
dataAniversario.ano = 1973;

print("${dataAniversario.dia}/${dataAniversario.mes}/${dataAniversario.ano}");

var dataCarnaval = new Data(13,02,2026);

print(dataAniversario);

dataCarnaval.dia = 13;
dataCarnaval.mes = 02;
dataCarnaval.ano = 2026;

print(dataCarnaval.obterData());

}