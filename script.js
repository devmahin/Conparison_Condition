// const salary = 35000;
// const BCS = true;
// let height = 64;
// const hasCar = true;


// if(20000 < salary){
//     console.log("Kobul")
// }else{
//     console.log("Tomar kono jogota nai")
// }



// if( 21000 <= salary || height > 70){
//     console.log("Parfect gorgious")
// }else{
//     console.log("Not parfect")
// }


// if(salary >= 30000  && height <= 78){
//     console.log("Parfect gorgious")
// }else{
//     console.log("Not parfect")
// }



// ===================complex================
// if((20000 <= salary && hasCar === false) || BCS === true){
//     console.log("OK")
// }else{
//     console.log("Complex")
// }






// multipel else, else if , else
const price = 1000;

const tenPersent = 10;
const fivePersent = 5;

// if(price >= 5000){
//  10% discount
//     let discount = price * 10 / 100;
//     let totalPrice = price - discount
//     console.log(totalPrice)
// }else if(price > 2500){
//     let discount = price * 5 / 100;
//     let totalPrice = price - discount
//     console.log(totalPrice)
// }else if(price >= 1000){
//     let discount = price * 2 / 100;
//     let totalPrice = price - discount
//     console.log(totalPrice)

// }
// else{
//     console.log("dicount not allow")
// }





// age discount
// let age =61;
// let product = 500;
// if(age <= 20){
//     console.log("bibaho korte parbe")
// }else if(age >= 50){
//     let dicount = product * 10 / 100;
//     console.log(dicount) 

// }
//     else{
//     console.log("Hello")
// }


// HSC result
// let result =45;

// if(result >= 80 && result <= 100){
//     console.log("A+")
// }else if (result >= 70 && result <= 79){
//     console.log("A")
// }
// else if (result >= 60 && result <= 69){
//     console.log("A-")
// }
// else if (result >= 50 && result <= 59){
//     console.log("B")
// }
// else if (result >= 40 && result <= 49){
//     console.log("C")
// }else{
//     console.log("Fail")
// } 



// let money = 440;
// if(money >=300){
//     console.log(true)
// }



// ternary three parts
// simple ternary
// let applePrice = 350;
// let appleResult = applePrice >= 360?  console.log("vote dio") : console.log("vote dio nah");



// advance ternary
// let mangoPrice = 600;
let lider = true;

// mangoPrice = lider === true ? 0 :  mangoPrice + 400; 
// console.log(mangoPrice)


// optional ternary
let tometo = 100;
// if(lider === true){
//     if(tometo > 1000){
//         tometo /= 2
//     }
//     else{
//         tometo = 0
//     }
// }else{
//     tometo = tometo
// }
// console.log(parseInt(tometo))



tometo = lider === false ? tometo > 1000? tometo / 2: 0 : tometo + 100;
console.log(tometo)