const funcsVar = []

for (var i = 0; i<10; i++){
    funcsVar.push(() => {
        console.log(i)
    })
}

funcsVar[2]()   //Nesse caso, independente do índice do arrai, o valor de i sempre sairá como 10 pois var não tem escopo de bloco
funcsVar[8]()

console.log("------------------")

const funcsLet = []

for (let i = 0; i<10; i++){
    funcsLet.push(() => {
        console.log(i)
    })
}

funcsLet[2]()   //pelo fato da Let também ter escopo de bloco, ela vai guardar o valor de i para os índices da func
funcsLet[8]()