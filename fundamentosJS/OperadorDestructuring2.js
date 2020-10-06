const [a] = [12]

const[n1, n2 , , n4, n5, n6 = 0] = [10,8,9,8]

console.log(n1,n2,n4,n5,n6)

//primeiro elemnto ignorado, primeiro elemento que está no array interno tbm ignorado
const[,[, nota]] = [[,8,9],[,9,6,8]]
console.log(nota)
