main(){

  int a = 6;
  int b =10;
  double c = 1.44;
  String nome = "Patricia";

  var z =2;
  var x = true;

  print( z is int);
  print(x.runtimeType);

  //z = "pizza";
  
  print("Olá Dart!!!");
  print(a + b);
  print(a + c);
  print(nome);

  print("Olá " + nome  + (" ")+ (a + b).toString());

}