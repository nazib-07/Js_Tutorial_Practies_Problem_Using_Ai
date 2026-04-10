let userInput = prompt("Enter 4 digite code: ");
function myFunction (otp){
    let otpString = otp.toString();
    switch(otpString){
        case "1234": 
        case "5678":
        case "0000":
            console.log("Access granted");
            break;
        default:
            if(otpString === "9999"){
                console.log("OTP expired");;
            } else{
                console.log("Invalid OTP");
            }
    }
}
console.log(myFunction(userInput));

///Question on my versity mid exam:
let userInput = String(prompt("Enter the code"));
function checkCode(input){
    if(input==="ICE3205"){
        document.querySelector('#check').innerHTML = "<h3>Access Granted</h3>";
    }else{
         document.querySelector('#check').innerHTML = "<h3>Error code</h3>"
    }
}
document.write(checkCode(userInput));

//problem solve:
//1. Write a Program to reverse a string in JavaScript.
let str = "Nazib";
let result = str.split('').reverse().join('');
console.log(result);

//2. Write a Program to check whether a string is a palindrome string.
let myFunction = (str)=>{
    const myName = str.split('').reverse().join('');
   return str === myName;
}
console.log(myFunction("nazibna"));
console.log(myFunction("nazibizan"));

//problem solve of for..in loop!
let car = {
    name: "BMW",
    Model : "2345MD",
    ID: 23474
}
for (carOut in car){
    console.log(car[carOut]);
}

let carName = "BMW@car";
for(out in carName){
    console.log(out+"-"+carName[out]);
}

let arr = ['Apple', 'Orange', 'Mango'];
for(fruit in arr){
    console.log(arr[fruit]);
}

let outPut_car = {
    brand: "OD",
    model: "Q7",
    color: "Black"
}
for(outCar in outPut_car){
    console.log(outPut_car[outCar] = null);
}
console.log(typeof(outPut_car));

//problem solve of for..of loop!
let new_arr = ['HTML', 'CSS', 'Javascript', 'React'];
for(let lang of new_arr){
    console.log(lang);
}

let str = 'Nazib ul alam';
for(let newStr of str){
    console.log(newStr);
    console.log(newStr.trim());
}
console.log(`String length is ${str.length}.`);

const nums = new Set([10, 20, 30, 30, 30, 40, 50, 60]);
      for (let num of nums) {
         console.log(num)
      }

const mapCreate = new Map();
mapCreate.set('name', 'Nazib');
mapCreate.set('ID', 9007);
mapCreate.set('city', 'Dhaka');
for(let [newMap, value] of mapCreate){
    console.log(`After create map object ${newMap} = ${value}`);
}
//control flow statement ---> "continue"!
let x = 1;
while(x<10){
    x = x+1;
    if(x==5){
        continue;//skip this number which is 5...
    }
    console.log(x);
}
//Break statement..
for(let brck = 1; brck<=10; brck++){
    if(brck==5){
        break;
    }else{
        console.log("Use else statement");
    }
}

