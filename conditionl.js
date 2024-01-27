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
// convat inc to meter
    let meter = height * 0.0254
let BMI = weight / Math.pow(meter, 2)
// console.log(BMI)



// ternary
if(BMI < 18.5){
    console.log("you are underweight.")
}else if(BMI >= 18.5 && BMI <=24.9){
    console.log("you are normal.")

}
else if(BMI >=25 && BMI <= 29.9){
    console.log("you are overweight")

}else{
    console.log("you are overweight")

}





/***
Grade Calculator

Create a simple JavaScript program that takes a student's score as input and returns their corresponding grade based on the following grading scale:

    A: 90-100
    B: 80-89
    C: 70-79
    D: 60-69
    F: 0-59

***/
let gradingScale = 60;
if(gradingScale >= 90 && gradingScale <= 100){
    console.log("A+")
}

else if(gradingScale >= 80 && gradingScale <= 89){
    console.log("B")
}
else if(gradingScale >= 70 && gradingScale <= 79){
    console.log("C")
}
else if(gradingScale >= 60 && gradingScale <= 69){
    console.log("D")
}
else if(gradingScale >= 0 && gradingScale <= 59){
    console.log("F")
}else{
    console.log("absent")
}








/***

if you get more then 80 then inside your friend score. 
    If your friend get more than 80. then go for a lunch. 
    if your friend get below 80 but greater than or equal 60 then tell your friend, good luck next time. 
    if your friend get less than 60 but more than or equal to 40 then, keep your friend's message unseen.
    if your friend get less than 40, block your friend
if you get less than 80 go to home and sleep and act sad

Note: 
use nested if-else-if-else
*/

// let score = 71;
// if(score > 80){
//     console.log("go for a lunch")
// }else if(score >= 60 && score <= 80){
//     console.log("good luck next time.")
// }
// else if(score >= 40 && score < 60){
//     console.log("hidden")
// }else if(score < 40){
//     console.log("block your friend")
// }else if(score <= 80){
//     console.log("go to home and sleep and act sad")
// }else{
//     console.log("oK")
// }





/***

you have two numbers in two variables, called: num1, num2

now declare a variable called result. 
if num1 is bigger than num2 then result will be double of num1. if not, then the value of the variable result will be the sum of num1 and num2.

write a simple if-else. 

also, write it using ternary operator.

 */


// let num1 =  70;
// let num2 = 90;
// let result;
// if(num1 >= num2){
//    result = num1 * 2;
// }else{
//     result = num1 + num2
// }
// console.log(result)


// ternaryResult
// let ternaryResult = num1 >= num2? num1 * 2: num1 + num2
// console.log(ternaryResult)




/***
Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/

let age = 117;
let students = true;
let senior = 60;
let tiketPrice = 800;

if(age < 10){
    console.log("free")
}else if (students){
    tiketPrice = tiketPrice * 50 / 100; 
}
else if (age >= 60){
    tiketPrice = tiketPrice * 15 / 100; 
}

else{
    console.log("Regular ticket fare 800 tk")
}
console.log(tiketPrice)


