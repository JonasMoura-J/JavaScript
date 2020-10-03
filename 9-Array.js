const valores = [7.7, 8.9, 6.3, 9.2]

console.log(valores[0],valores[3])   //se tentar acessar um índice que não existe, não irá gerar um erro
console.log(valores)

//adicionar um elemento
valores[4] = 4
console.log(valores)

console.log(valores.length)

valores.push({id: 3}, false, null, 'teste')  //array com diversos tipos
console.log(valores)

console.log(valores.pop()) //pega p ultimo elemento do array e passa

delete valores[0]
console.log(valores)