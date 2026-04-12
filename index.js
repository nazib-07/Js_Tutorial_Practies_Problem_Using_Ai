//include and index method's problem solve..
//1. problem
const fruit = ['Mango', 'Banana', 'orange', 'lichi'];
if(fruit.includes('Mango')){
    console.log(`Yes, Mango is present`);
}else{
    console.log('Mango is not present.');
}

//2.problem..
const homanName = ['Nazib','Bulbul', 'Alif', 'Choton'];
const findName = homanName.indexOf('Bulbul');
if(homanName.includes('Bulbul')){
    console.log(`Yes, Bulbul is present and index is ${findName}`);
}else{
    console.log('please find another name');
}

//3. problem..
const nameList = ['Rimon', 'Rifaat', 'Rajeeb'];
const findNamelist = nameList.indexOf('Rifaat');
console.log(`Index is: ${findName}`);

//4.problem..
const city = ['Dhaka', 'CTG', 'Sylhet'];
const addCity = city.push('Rajshahi');
console.log(city);
if(city.includes('rajshahi')){
    console.log(`Yes, Rajshahi is present`);
}else{
    console.log('Check spelling');
}

//4.problem
const playGame = ['Cricket', 'Football', 'Batminton'];
console.log(playGame.includes('Chess'));

//Loop (for...of loop) problem solve...
//1. problem...
const sub = ['Data Structure', 'Web development', 'Software development', 'Microwave'];
for(const declear of sub){
    console.log(declear);
}

//2. problem..
const food = ['Kacci', 'Polaw', 'Biriani', 'Kala vuna'];
for(const display_food of food){
    console.log(display_food);
}

//3. problem..
const xm = ['MCA', 'WEB Tech', 'MEA', 'SRE', 'SRM'];
for(const done_xm of xm){
    console.log(done_xm);
}
//While() loop practies..
//1. problem
let count = 1;
while(count<=10){
    console.log(`${count}: I want to become a web developer.`);
    count++;
}
//2
let one_twenty = 1;
while(one_twenty<=20){
    console.log(one_twenty);
    one_twenty++;
}

//3. problem
let multiply = 0;
while(multiply<=10){
    let result = multiply*3;
    console.log(`Table of three: ${multiply} * 3 = ${result}`);
    multiply++;
}





















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

//Funcction practies..
const newFunction = function (a,b){
    return a + b;
}
console.log(newFunction(5,5));

let button = document.querySelector('#btn');
const myFunction = ()=>{
    alert(`It's done by create function`);
    button.addEventListener('click', ()=>{
        let p_tag = document.createElement('h2');
        p_tag.textContent = 'Function is properly working!';
        document.body.append(p_tag);
    });
}
myFunction();

//Try string method using in function.
let Button = document.querySelector('#btn');
const mynewFunction = (name, age)=>{
    Button.addEventListener('click', ()=>{
        let h3_tag = document.createElement('h3');
        console.log(name, age);
        let Trim = name.trim();
        h3_tag.textContent = `Name is ${Trim} and age is ${age}`;
        document.body.append(h3_tag);
    });
}
mynewFunction('S M Nazib Ul Alam', 22);

//Function as a constructor..
const myfunction = new Function("a", "b", "return a*b");
let value = document.querySelector('#para');
value.textContent = `The result of multiplication: ${myfunction(5,5)}`;

fun('Top');
function fun (pos){
    let headding = document.createElement('h2');
    headding.textContent = `The function is the position: ${pos}`;
    document.body.appendChild(headding);
}
fun('Bottom');
if(1){
    fun1('Top');
function fun1 (pos1){
    let headding1 = document.createElement('h2');
    headding1.textContent = `The function is the position: ${pos1}`;
    document.body.appendChild(headding1);
}
fun1('Bottom');
}

//Js Math() and Number () mehtods...
const num = 4.5673;
console.log(Math.trunc(num));

let count = -100;
console.log(Math.sign(count));
let power = 5;
console.log(Math.pow(power, 5));

let squrRoot = 8;
console.log(Math.sqrt(squrRoot));

let absoluteValue = -5.69;
console.log(Math.abs(absoluteValue));
let coun = [3,10,5,8,50, 2];
console.log(`Numbers are: ${coun} and type is ${typeof(coun)}`);
console.log(`Max number is: ${Math.max(3,10,5,8,50, 2)} and min number is: ${Math.min(3,10,5,8,50, 2)}`);

console.log (Math.floor((Math.random()*10))+1);
//Array slice and splice method...
let array = [0,1,2,3,4,5];
console.log(array.slice(0,2), array ,array.splice(1,4), array);

//ARray Methods....
let demon_slayer = ['Tanjiro', 'Inoske', 'Tomioka', 'Giue'];
let black_clover = ['Asta', 'Leivai', 'Youno', 'Yeami', 'Necth'];

const all_heros = demon_slayer.concat(black_clover);
console.log(all_heros);
//Spread Operator method approch use to add or marge two arrays...
const new_all_heros = [...demon_slayer, ...black_clover];
console.log(new_all_heros);

// Flat method solve the array into depth by depth. which means nested array would be marge by single array..
let new_arr = [1,2,3,[4,5,6],7,8,[9, 10, 11]];
const resule_arr = new_arr.flat(Infinity);
console.log(resule_arr);

//isArray, form, of method in array...

console.log(Array.isArray('Nazib'));//false. because name not inside the sq.bracket []..

console.log(Array.isArray(['Nazib']));//Return true.

console.log(Array.from('Nazib'));
let a = 200, b = 300, c = 400;
console.log(Array.of(a,b,c));

//
let number = [10,20,30,40,50];
let newAdd = number.push(60);
console.log(number);

let peopleName = ['Sajeeb', 'Sagor', 'Sakib', 'Nazib'];
let newMember = peopleName.push('Sumon');
console.log(peopleName);

let game = ['palne','Bus', 'snake', 'fighting'];
let removeGame = game.pop();
console.log(game);

let num = [24,36,48,60];
let addNum = num.unshift(12);
console.log(num);

let bookName = ['DSP', 'Data Structure', 'Web development', 'Software requirement', 'Microwave and antenna'];
console.log(bookName);
let deleteBook = bookName.shift();
console.log(bookName);
//include method
const picnic = ['Sakib', 'Rahim', 'karim','Jeaon'];
if(picnic.includes('Sakib')){
    console.log(`Let's do party`);
}else{
    console.log('Ghor ey jah beda');
}
