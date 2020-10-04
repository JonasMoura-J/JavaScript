 console.log('a =',a)  //Aqui aconteceu o hoisting, e a fica como declarado, porém undefined

 var a = 2 

 console.log('a =',a)


 console.log('a =',b)  //Com let, não acontece o hoisting, nesse caso dará erro porque no primeiro console, a variavel não foi inicializada

 let b = 2 

 console.log('a =',b)