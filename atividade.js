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
    else if(horario == 'nooite' || horario == 'Noite'){
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
    if(senhanumero == True){
        console.log('Sua senha tem pelo menos 1 digito.')
    }
    else{
        console.log('Sua senha não tem numeros')
    } 
}
console.log(Validador())

//  Atividade 4: Gerador de Tabuada utilize variáveis locais. 
//  Crie uma função gerarTabuada que recebe um número e retorna sua tabuada de 1 a 10.

