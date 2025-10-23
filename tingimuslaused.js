// tingimuslaused if
// let age = 13;

// if(age >= 18){
//     console.log("You are old enough.");
// }
// else {
//     console.log("You must be older.");
// }

// let time = 14;

// if(time < 12){
//     console.log("Good morning");
// }
// else{
//     console.log("Good afternoon");
// }

// let isStudent = false;

// if(isStudent){
//     console.log("You are a student!");
// }
// else{
//     console.log("You are NOT a student!");
// }

// let age = 25;
// let hasLicense = false;

// if(age >= 16){
//     console.log("You are old enough to drive");

//     if(hasLicense){
//         console.log("You have your license");
//     }
//     else{
//         console.log("You dont have a license yet");
//     }
// }
// else{
//     console.log("You have to be older than or 16");
// }

// const myText = document.getElementById("myTetx");
// const mySubmit = document.getElementById("mySubmit");
// const resultElement = document.getElementById("resultElement");

// let age = 18;

// mySubmit.onclick = function(){

//     age = myText.value;
//     age = Number(age);
// }
// if (age >= 100){
//   resultElement.textContent = ("You are too old to enter");
//   }
// if (age >= 18) {
//   resultElement.textContent = ("Old enough");
// } 
// else if (age < 0) {
//   resultElement.textContent = ("Your age cant be below 0");
// } 
// else{
//   resultElement.textContent = ("Not old enough");
// }

// const myCheckbox = document.getElementById("myCheckbox");
// const visaBtn = document.getElementById("visaBtn");
// const masterCardBtn = document.getElementById("masterCardBtn");
// const payPalBtn = document.getElementById("payPalBtn");
// const mySubmit = document.getElementById("mySubmit");
// const subResult = document.getElementById("subResult");
// const paymentResult = document.getElementById("paymentResult");

// mySubmit.onclick = funtion(){

//         if(myCheckbox.checked){
//             subResult.textContent = `Your are subscribed!`;
//         }
//         else{
//                 subResult.textContent = `You are NOT subscribed!`;
//         }
//         if(visaBtn.checked){
//                 paymentResult.textContent = `with Visa`;
//         }
//         else if(masterCardBtn.checked){
//                 paymentResult.textContent = `with MasterCard`;
//         }
//         else if(payPalBtn.checked){
//                 paymentResult.textContent = `with PayPal`;
//         }
//         else{
//                 paymentResult.textContent = `You must select payment!`;
//         }
            
// }

// ternary operator = a shortcut to if {} and else{} statements
//                         helps to assign a variable based on a condition
//                         condition ? codeIfTrue : codeIfFalse

// let age = 21;
// let message = age >= 18 ? "You are an adult" : "You are a minor";
// console.log(message);

// let time = 16;
// let greeting = time < 12 ? "Good morning" : "Good afternoon";
// console.log(greeting);

// let isStudent = true;
// let message = isStudent ? "You are a student" : "You are not a student";
// console.log(message);

// let purchaseAmount = 115;
// let discount = purchaseAmount >= 100 ? 10 : 0;
// console.log(`Your total is $${purchaseAmount - purchaseAmount * (discount/100)}`);

// let day = 1;

// switch(day){
//     case 1:
//         console.log("It is Monday");
//         break;
//     case 2:
//         console.log("It is Tuesday");
//         break;
//     case 3:
//         console.log("Its Wednesday");
//         break;
//     case 4:
//         console.log("Its Thursday");
//         break;
//     case 5:
//         console.log("Its Friday");
//         break;
//     case 6:
//         console.log("Its Saturday");
//         break;
//     case 7:
//         console.log("Its Sunday");
//         break;
//     default:
//         console.log(`${day} is not a day`);
// }

// let testScore = 99;
// let letterGrade;

// switch(true){
//     case testScore >= 90:
//         letterGrade = "A";
//         break;
//     case testScore >= 80:
//         letterGrade = "B";
//         break;
//     case testScore >= 70:
//         letterGrade = "C";
//         break;
//     case testScore >= 50:
//         letterGrade = "D";
//         break;
//     case testScore <= 50:
//         letterGrade = "F";
//         break;
//     default:
//         console.log(`${testScore} is not a score`);
// }
// console.log(letterGrade);

// let userName = "Goblin";

// console.log(userName.charAt(0)); // 0 näitab esimest tähte, 1 teist tähte jne.

// console.log(userName.indexOf("o")); // näitab mitmes täht on stringis

// console.log(userName.length); näitab mitu tähte stringis on

// console.log(userName.trim(2)); eemaldab white spacei stringist

// console.log(userName.slice(1, 3)); näitab stringi antud väärtuste vahemikus

// console.log(userName.repeat(3)); kordab stringi x korda 

// console.log(userName.replace("Goblin", "Thor")); asendab stringis sõna millegi muu vastu

// const email = "goblin1@gmail.com";

// let userName = email.slice(0, email.indexOf("@"));
// let extension = email.slice(email.lastIndexOf("@")+1, email.length);

// console.log(userName);
// console.log(extension);

// let userName = window.prompt("Enter your username: ");

// userName = userName.trim();
// userName = userName.charAt(0).toUpperCase() + userName.slice(1).toLowerCase();


// console.log(userName);
// document.getElementById("myH1").textContent = `Hello ${userName}`;

// const temp = 25;

// if(temp > 0 && temp <=30){
//     console.log("the weather is good");
// }

// else{
//     console.log("the weather is bad");
// }

// if(temp <= 0 || temp > 30){
//     console.log("the weather is bad");
// }

// else{
//     console.log("the weather is good");
// }

// const isSunny = true;

// if(!isSunny){
//     console.log("pilv");
// }
// else{
//     console.log("päike");
// }

// const PI = "3.14";

// if(PI !== "3.14"){
//     console.log("That is Pi");
// }
// else{
//     console.log("That is not Pi");
// }