let isAtivo = false

isAtivo = true

isAtivo = 1
console.log(!!isAtivo)

//os verdadeiros (todos os numeros inteiros, exceto o 0)
console.log(!!-1)
console.log(!!' ')
console.log(!![])
console.log(!!{})
console.log(!! Infinity)
console.log(!!(isAtivo = true))

//os falsos

console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

//muuuuito usado
let nome = 'Lucas'
console.log(nome || 'Desconhecido') //se tiver nome, adiciona, se não tiver, imprime desconhecido


