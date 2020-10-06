const random = ({min = 0, max = 1000}) =>{  //valores padroes de min e max
    let valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}
const obj = {max:50, min:40} //o random irá ficar entre 40 e 50
console.log(random(obj))


const randomArray = ([min = 0, max = 1000]) => {
    (min>max)?[min,max] = [max,min]: [min,max]

    let valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}
console.log(`Com array ${randomArray([50,51])}`)
console.log(`Com array ${randomArray([900])}`) //Nesse caso, o segundo parametro assume o valor de 1000
console.log(`Com array ${randomArray([,51])}`) //Nesse caso, o primeiro parametro assume o valor de 0

