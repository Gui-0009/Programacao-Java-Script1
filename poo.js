// 2 - Atividades aluno:


//  1 - Classe Pessoa Básica -atributos  -  nome, idade, endereco, formacao

class Pessoa{

    constructor(nome,idade,endereco,formacao){

       this.nome = nome;
       this.idade = idade;
       this.endereco = endereco;
       this.formacao = formacao;

    }

    apresentacao(){

        console.log(`Nome: ${this.nome};\nIdade: ${this.idade};\nEndereço: ${this.endereco};\nFormação: ${this.formacao}.`)

    }

}

let pessoa = new Pessoa('Kaio','30','######','Trabalhador')

pessoa.apresentacao()




// 2: Classe Retângulo - atributos -  largura e altura

class Retangulo{
    constructor(largura,altura){
        this.largura = largura;
        this.altura = altura;
    }
    apresentacao(){
        console.log(`O retangulo ficara assim:\nLargura: ${this.largura} e Altura: ${this.altura}.`)
    }
}
let atributo = new Retangulo(70,80)

atributo.apresentacao()



// 3: Classe Conta Bancária , métodos - saque, deposito

class Conta_Bancaria{

    constructor(saque, deposito){
        this.saque = saque
        this.deposito = deposito;
    }

    apresentacao(){
        console.log(`Saque disponivel: ${this.saque};\nDisponivel no deposito: ${this.deposito}.`)
    }
}
let conta = new Conta_Bancaria(200,5000)

conta.apresentacao()


// 4: Classe Produto - attributos -  cor, tamanho

class Produto{
    constructor(cor,tamanho){
        this.cor = cor;
        this.tamanho =tamanho
    }

    apresentacao(){
        console.log(`A cor escolhida foi: ${this.cor};\nO tamanho será de: ${this.tamanho}.`)
    }
}
let atributo2 = new Produto('Cinza','50m')
atributo2.apresentacao()

// 6 -  Classe Aluno -  atributos - nome, serie - método estudar() 
class Aluno{
    constructor(nome,serie,horario,local){
        this.nome = nome
        this.serie = serie
        this.hoarario = horario
        this.local = local
    }


    apresentacao(){
        console.log(`Nome: ${this.nome};\nSérie: ${this.serie};\nHorario de estudo: ${this.hoarario};\nLocal de estudo: ${this.local}.`)
    }
}
let formacao = new Aluno('Pedro','Oitavo ano', '17:50', 'Biblioteca')
formacao.apresentacao()


// 3 - Desafio aluno



class Calculo{


       constructor(salario, quantidade_extra){
        this.carga = 220
        this.salario = salario;
        this.extra_50 = 1.5
        this.quantidade_extra = quantidade_extra
        
       }

      sal_hora(){


      return this.salario / this.carga
      
      }
     
      valor_extra(h_sal){

        return h_sal * this.extra_50

        }

       quanti_extra(){

        return this.quantidade_extra / this.extra_50

       }
       calculo_final(){

        return this.h_sal * this.extra_50

       }
    }


let calculo_sal_hora = new Calculo(10000,10)

let hr_sal =  calculo_sal_hora.sal_hora()
console.log('valor hora', hr_sal)

let valor_ex = calculo_sal_hora.valor_extra(hr_sal)
console.log('valor extra', valor_ex)

let quantidade_extra = calculo_sal_hora.quanti_extra()
console.log('Qunatidade de extras', quantidade_extra)

let calculo_f = calculo_sal_hora.calculo_final()
console.log('Ultimo calculo:', calculo_f)
