let valor1 = prompt("digite um numero");
let valor2 = prompt("digite um numero");
codigo = prompt("digite o codigo desejado");

switch(parseInt(codigo)){

    case 1:    
    soma = parseInt(valor1)+parseInt(valor2);
    console.log("o numero somado é "+soma);
    break;

    case 2:
    subtracao = parseInt(valor1) - parseInt(valor2);
    console.log("o numero subtraido é"+subtracao);
    break;

    case 3:
    divisao = parseInt(valor1)/parseInt(valor2);
    console.log("o numero dividido é"+divisao);
    break;


    case 4:
    multiplicacao = parseInt(valor1)*parseInt(valor2);
    console.log("o numero multiplicado é"+multiplicacao);
    break;

    default:
    console.log("Código inválido")




}

   
