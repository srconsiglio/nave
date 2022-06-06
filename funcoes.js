let velocity = 0
let nave = prompt("Bem-vindo a bordo! Digite o nome da nave:")
let opcao = true
//USAR O WHILE
while(opcao){
    let menu = prompt("1-Acelerar a nave em 5km \n 2-Desacelerar a nave em 5km \n 3 - Imprimir resultado \n 4- Sair")
    if(menu == 1){
        velocityPlus()
    }else if(menu ==2){
        velocityDowngrade()
    }else if(menu ==3){
        dadosDeBordo()
    }else if(menu ==4){
        alert("Obrigado por viajar!")
        opcao == false
    }else{
        alert("Opção inválida")
    }
}
//função de  acelerar
function velocityPlus(){
    velocity += 5
    return alert(velocity)
}
//função de desacelerar
function velocityDowngrade(){
    if(velocity <= 0){
        alert("A nave já está parada")
    } else{
        velocity -=5
    }
    return alert(velocity)
}
function dadosDeBordo(){
    return alert("O nome da nave é "+nave+" e a velocidade atual é "+velocity)
}