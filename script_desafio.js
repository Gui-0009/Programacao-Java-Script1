
let nome_cliente = prompt('Digite seu nome')

let conta_min = Number(prompt("quantas pessoas (até 3 clientes)"))

//esse prompt está precente para não ouver problemas ao entender a maneira de escolher a mesa
prompt("Você deverá que escolher a opção pelo numero ao lado do sinal de subtração. Está de acordo?")

let mesa = Number(prompt('Qual tipo de mesa? \n("Mesa comum" - 4 (R$ 50 por pessoa); \n"Mesa espaçosa" - 6 (R$ 80 por pessoa); \n"Vista externa" - 8 (R$ 100 por pessoa))'))
//"\n" serve para quebrar a linha do texto

let pessoa_quatro = 50
let pessoa_seis = 80
let pessoas_oito = 100

if(mesa == 4){

   valor_total  = conta_min * pessoa_quatro
    console.log('Valor total da sua conta é de: ', valor_total)

}
else if( mesa == 6){

    valor_total = conta_min * pessoa_seis
    console.log('Valor total da sua conta é de: ', valor_total)

}
else if(mesa == 8){

    valor_total = conta_min * pessoas_oito
    console.log('Valor total da sua conta é de: ', valor_total)

}