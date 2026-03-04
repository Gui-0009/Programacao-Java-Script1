//  Atividade 1: Função de Saudação Personalizada
//  Crie uma função chamada saudacao que recebe um nome e um horário
//  (manhã, tarde ou noite) e retorna uma saudação apropriada. Utilize parametros.

function saudacao(){

    let nome = prompt('Digite seu nome')
    let horario = prompt('Horário')

    if (horario == 'manhã' || horario == 'Manhã'){
        console.log('Bom dia ',nome)
    }
    else if(horario == 'tarde' || horario == 'Tarde'){
        console.log('Boa tarde ',nome)
    }
    else if(horario == 'noite' || horario == 'Noite'){
        console.log('Boa noite ',nome)
    }
    else{
        console.log('Algo deu errado')
    }
}
console.log(saudacao())

//  Atividade 2: Calculadora Simples
//  Crie uma função calculadora que recebe dois números e uma operação 
// ('soma', 'subtracao', 'multiplicacao', 'divisao') e retorna o resultado.

function calculadora(){

    let n1 = Number(prompt('Digite um numero'))
    let n2 = Number(prompt('Digite um numero'))
    let tipo = prompt('Digite o tipo de equação')
    if(tipo == 'Soma' || tipo == 'soma' || tipo == '+'){
        conta = n1 + n2
        console.log('Soma da conta é: ',conta)
    }
    else if(tipo == 'Subitração' || tipo == 'subitração' || tipo == '-'){
        conta = n1 - n2
        console.log('Subtração da conta é: ',conta)
    }
    else if(tipo == 'Multiplicação' || tipo == 'multiplicação' || tipo == '*'){
        conta = n1 * n2
        console.log('Multiplicação da conta é: ',conta)
    }
    else if(tipo == 'divisão' || tipo == 'divisão' || tipo == '/'){
        conta = n1 / n2
        console.log('Divisão da conta é: ',conta)
    }
}
console.log(calculadora())

//  Atividade 3: Validador de Senha -  Utilize variáveis globais.
//  Crie uma função validarSenha que verifica se uma senha tem pelo menos 8 
// caracteres, contém pelo menos um número e uma letra maiúscula.

function Validador(){

    let senha = prompt('Qual sua senha?')
    let senhacaracteres = senha.length
    let senhanumero = /\d/.test(senha)
    if(senhacaracteres >= 8){
        console.log('Tem 8 ou mais digitos')
    }
    else{
        console.log('Tem menos de 8 digitos, senha insegura')
    }
    if(senhanumero != 0){
        console.log('Sua senha tem pelo menos 1 numero.')
    }
    else{
        console.log('Sua senha não tem numeros')
    } 
}
console.log(Validador())

//  Atividade 4: Gerador de Tabuada utilize variáveis locais. 
//  Crie uma função gerarTabuada que recebe um número e retorna sua tabuada de 1 a 10.

function tabuada(){

    let n1 = Number(prompt('Digite um numero'))
    console.log(n1, '* 1',n1 * 1)
    console.log(n1, '* 2',n1 * 2)
    console.log(n1, '* 3',n1 * 3)
    console.log(n1, '* 4',n1 * 4)
    console.log(n1, '* 5',n1 * 5)
    console.log(n1, '* 6',n1 * 6)
    console.log(n1, '* 7',n1 * 7)
    console.log(n1, '* 8',n1 * 8)
    console.log(n1, '* 9',n1 * 9)
    console.log(n1, '* 10',n1 * 10)

}

console.log(tabuada())

// Atividade 5: CRie uma calculadora de IMC, utilize parâmetros
// 1 -  O usuario precisa digitar o peso e a idade
// 2 -  O sistema precisa fazer o calculo
// 3 -  Precisa mostrar ao usuário a saída de acordo com o calculo
// Obesidade 1, peso normal, desnutrição, obesidade 2, obedidade 3. 

function imc(){

    let idade = Number(prompt('Digite sua idade'))
    let peso = Number(prompt('Digite seu peso.'))
    let altura = Number(prompt('Digite sua altura.'))

    let imc_calculo = peso / (altura*altura)

    if(idade >= 18 && idade <= 59){
        if(imc_calculo < 18.5){
            console.log('A baixo do peso')
        }
        else if(imc_calculo >= 18.5 && imc_calculo <= 24.9){
            console.log('Peso normal')
        }
        else if(imc_calculo >= 25.0 && imc_calculo <= 29.9){
            console.log('Sobre peso')
        }
        else if(imc_calculo >= 30.0 && imc_calculo <= 34.9){
            console.log('Obesidade Grau 1')
        }
        else if(imc_calculo >= 35.0 && imc_calculo <= 39.9){
            console.log('Obesidade Grau 2')
        }
        else{
            console.log('Obesidade Grau 3')
        }
    }
    else{
        console.log('Algo deus errado. Tente novamente')
    }

}