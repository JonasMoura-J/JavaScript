const escola = 'cod3r'
console.log(escola.charAt(4))  // qual indice está

console.log(escola.charAt(5)) //O Js não retorna erro em alguns casos

console.log(escola.charCodeAt(3)) //Pega o valor do caracter na tabela ASCII

console.log(escola.indexOf('3')) //retorna o indice em que se encontra o caracater passado como parâmetro

console.log(escola.substring(1))
console.log(escola.substring(0, 3))  //pega partes da string

console.log('Escola '.concat(escola).concat('!')) //forma de concatenar, mas sabemos que não é a melhor forma

console.log(escola.replace(3, 'e'))

console.log(escola.replace(/\w/g, 'e'))  //expressão regular que sbstitui tudo que está na variavel pelo segundo parametro

console.log('Ana,Maria,Pedro'.split(',')) //transforma em array atraves do parametro de divisão passado