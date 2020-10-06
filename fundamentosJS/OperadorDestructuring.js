const pessoa = {     
    nome: 'Jonas',
    idade: 18,
    altura: 1.86,
    peso: 70.0,
    endereco:{
        rua: 'Tenente',
        numero: '05'
    }
}

const{nome, idade} = pessoa  //desestruração de nom e idade de pessoa
console.log(nome, idade)    //se faz dessa fora para não precisar escrever (pessoa.nome)

//dessa forma, eu não fico preso aos nomes das chaves do objeto pessoa, posso renomer as variaveis
const{nome: varNome, idade: varIdade} = pessoa  
console.log(varNome, varIdade)

const{endereco:{rua, numero}} = pessoa  //acessando um objeto dentro de outro obj por desestruturação
console.log(rua, numero)