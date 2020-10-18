const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'

const axios = require('axios')

axios.get(url).then(response=>{
    //array de objs
    const funcionarios = response.data
    
    // selecionando por genero e pais
    const func = funcionarios.filter((f) =>{
        const filtrados = f.genero == 'F' && f.pais == 'China'
        return filtrados
    })


    //pegando quem tem o menor salario
    const menorSalario = (func, funcAtual) => {
        return func.salario < funcAtual.salario ? func : funcAtual
    }

    const funcionaria = func.reduce(menorSalario)

    console.log(funcionaria)
})
