import 'dart:io';

main (){
const PI = 3.1416;


stdout.write("Digite o valor do raio:");
var entrada = stdin.readLineSync();

final double raio = double.parse(entrada!);

var area = PI* raio * raio;

print(area);

}

