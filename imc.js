function calcula_imc(){
  altura = document.imcform.altura.value
  peso = document.imcform.peso.value
  imc = (peso/(altura*altura))
  
  if(imc<18.5){
      alert(" Voce está abaixo do peso, indice :"+ imc)
  }
  else if (imc>=18.5 && imc<=24.99){
    alert(" Voce está com o peso ideal , indice :"+ imc)
  }
  else if (imc>=25 && imc<=29.99){
    alert(" Voce está com sobrepeso, indice :"+ imc)
  }
  else if (imc>=30 && imc<=39.99){
    alert(" Voce está com obesidade, indice :"+ imc)
  }
  else if (imc>=40){
    alert(" Voce está com obesidade morbida, indice :"+ imc)
  }
}