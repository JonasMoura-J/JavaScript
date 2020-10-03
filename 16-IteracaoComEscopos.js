for(var i = 0; i<10; i++){
    console.log(i)
}
console.log('i =',i)

for(let j = 0; j<10; j++){
    console.log(j)
}
console.log('i =',j) //vai dar erro, pois j não definido nesse escopo,(let não é visualizado fora do bloco)