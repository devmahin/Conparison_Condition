const salary = 35000;
const BCS = true;
let height = 64;
const hasCar = true;


if(20000 < salary){
    console.log("Kobul")
}else{
    console.log("Tomar kono jogota nai")
}



if( 21000 <= salary || height > 70){
    console.log("Parfect gorgious")
}else{
    console.log("Not parfect")
}


if(salary >= 30000  && height <= 78){
    console.log("Parfect gorgious")
}else{
    console.log("Not parfect")
}



// ===================complex================
if((20000 <= salary && hasCar === false) || BCS === true){
    console.log("OK")
}else{
    console.log("Complex")
}