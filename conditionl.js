/***

Free Drinks
    - Burger more than 500tk: free Coke
    - Else Coke: 30tk
*/


// let burgerPrice = 60;
// let Coke = 30;
// if(burgerPrice >= 500){
//     console.table( "free Coke")
// }else{
//     console.log("Total price :" + " " +(burgerPrice + Coke) + " " + "taka")
// }

// ternary condition

let burger = 200;
let coke = 30;
burger = burger >= 500 ? "Burger plus " + "Free cook"  : "Not allow discount" + "total " + (burger + coke);
console.log(burger) 






///// task 2
/*** 

BMI Calculator and Health Category

Create a JavaScript program that calculates the Body Mass Index (BMI) and assigns a health category based on the BMI value. Use nested if-else statements to determine the health category.

    - Calculate BMI using the formula: BMI = weight (kg) / (height (m))^2
    - BMI < 18.5, you are underweight.
    - BMI >= 18.5 and BMI <=24.9, you are normal.
    - BMI >=25 and BMI <= 29.9, you are overweight.
    - Otherwise, you are obese.

*/


let weight = 65;
let height = 65;
// convat inc to mitter
    let mitter = height * 0.0254
    console.log(mitter)
let BMI = weight / Math.pow(mitter, 2)
console.log(BMI)


if(BMI < 18.5){
    consolel.log("you are underweight.")
}else if(BMI >= 18.5 && BMI <=24.9){
    consolel.log("you are normal.")

}
else if(BMI >=25 && BMI <= 29.9){
    consolel.log("you are overweight")

}else{
    consolel.log("you are overweight")

}