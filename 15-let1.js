var num = 1
{
    let num = 2
    console.log('dentro do escopo', num)
}
console.log('fora do escopo', num)

let num2 = 1
{
    let num2 = 2
    console.log('dentro do escopo', num2)
}
console.log('fora do escopo', num2)

//let te escopo global, escopo de funcao e escopo de bloco