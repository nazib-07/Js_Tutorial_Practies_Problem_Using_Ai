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
//For loop practies
let sum = 0;
for(let i=31; i<=58; i++){
   console.log(i);
    sum = sum+i;
}
console.log(sum);

//2. problem..
for(let i = 20; i<=50; i++){
    if(i%7===0){
      console.log(i);
    }
}
//3. problem
for(let i = 40; i<=80; i++){
    if(i%5===0 && i%7===0){
        console.log(i);
    }
}
//4. problem
let summation = 0;
for(let i = 1; i<=40; i = i+4){
    console.log(i);
    summation = summation +i;
}
console.log(summation);
//5. problem
let add = 0;
for(let i = 1; i<=50; i++){
    if(i%3===0 && i%4===0){
        console.log(`After mod: ${i}`);
        add = add+i;
    }
}
console.log(`Addition value: ${add}`);

//break and continue loop practise...
//1. problem
for (let i = 1; i <= 30; i++) {
    if (i == 16) {
        break;
    }
    console.log(i);
}
//2. problem..
for (let j = 1; j <= 40; j++) {
    if (j % 7 == 0) {
        continue;
    }
    console.log(j);
}
//3. problem...
for (let i = 1; i <= 15; i++) {
    if (i == 9) {
        continue;
    }
    console.log(i);
}

//object problem solve..
//1. 
const player = {
    name: 'Nazib',
    age : 24,
    sports: 'Football',
    team: 'Barcelona'
}
//console.log(player.team);

//2.
const favPlace = {
    name: `Cox's Bazar`,
    distance: '400km',
    popularity: 'High'
}
//console.log(`My fav place popularity is ${favPlace['popularity']}`);

//3.
const college = {
    name:'NDC',
    established: '1949',
    group: ['Science', 'Arts', 'Commerce']
}
//console.log(`The group of my college is ${college.group[2]}`);

//4. *** importent for understanding object ***...

const family = {
    father: {
        fatherName:'Sarder',
        age: 80,
        profession: 'Police'
    },
    mother:{
        motherName:'Sufia',
        age: 85,
        profession:'House wife'
    }
}
const result = family.father['age'] + family.mother['age'];
console.log(`My grand father age is ${family.father['age']} and grand mother age ${family.mother['age']}`);
console.log(`Total age of both ${result}`);

//Object key problem solving..
//1.
const book = {
    name:'Web Technology',
    writer: 'Jhanker mahabub',
    price: 200
}

const key = Object.keys(book);
const value = Object.values(book);
console.log(`Key use: ${key}`);
console.log(`value use: ${value}`);

//2..
const article = {
    title:'Learning js',
    category: 'Programming'
}
const check = Object.keys(article);
const chk = check.includes('author');
console.log(check, chk);
//solve another way..
if('author' in article){
    console.log('Yes, have author');
}else {
    console.log('No author');
}

//3.
const laptop = {
    brand: 'Dell',
    model: 'Inspiron',
    price: 45000
}

const valu = Object.values(laptop);
for (const key in laptop){
    const maan = laptop[key];
    console.log(key,maan);
}

//4..
const phone = {
    brand: 'Samsung',
    model: 'Galaxy S26',
    price: 90000
}
const keyy = Object.keys(phone);
for(let key of keyy){
    console.log(key, phone[key]);
}

//5..
const bike = {
    brand:'Hero',
    price: 120000,
    model: 'Splendor'
}
console.log(`Values are: ${Object.values(bike)}`);

//6..
const boi = {
    book1: 'Harry poter',
    book2: 'The Hobbit',
    book3: 'Game of Thrones'
}
const key1 = Object.keys(boi); 
for(let k of key1){
    console.log(k, boi[k]);
}

//7..
const number = {
    a:10,
    b:20,
    c:30,
    d:40
}
let sum = 0;
for(let a in number){
    sum = sum + number[a];
}
console.log(sum);

//8..
const building = {
    floors:10,
    address:{
        street:'Ayna mosque road',
        city: 'Dhaka',
    },
    type: 'Commercial'
}

for(let val in building){
    console.log(val, building[val]);
}

//Freez and seal method of object practise..
//1.
const headPhone ={
    brand:'Sony',
    price:3000,
    color:'red'
}
const objFreez = Object.freeze(headPhone);
headPhone.brand = 'Blue';
console.log(headPhone);
console.log('Using for in loop');
for(let key in headPhone){
    const value = headPhone[key];
    console.log(key, value);
}
console.log('Using for of loop');
const keyy = Object.keys(headPhone);
for(const key of keyy){
    const findValue = headPhone[key];
    console.log(key, findValue);
}

//2.
const player = {
    name:'Messi',
    goal: 800,
    club: 'Inter Miami'
}

const newAdd = Object.seal(player);
console.log('Before update the player object: ',player);
player.position = 'Lefty';
player.club = 'Berselona';
console.log('After update the player object: ',player);

//3.
const book = {
    name:'Harry Poter',
    author: 'JK Rowling',
    page: 500,
    duty: 'Null'
}
console.log(book);
delete book.duty;
console.log(book);

//4..
const animale = {
    name:'Tiger',
    location:'Sundarban'
}
console.log(animale);
const freezValue = Object.freeze(animale);
animale.location = 'Amazon Forest';
console.log('After uppdate animale location: ',animale);

//5..
const foodFood = {
    name:'pizza',
    price:500,
    size:'Large'
}
console.log('Before update the food price: ', foodFood);
const update = Object.seal(foodFood);
foodFood.price = 450;
console.log('After update the food price: ', foodFood);
//Function practise..
function myRoutine(){
    const work={
        rise: 'Walking',
        food: 'At 8am take breakfast',
        school: 'Go to school'
    }

    for(const key in work){
        const value = work[key];
        console.log(value);
    }
}
myRoutine();

//function parameter problem solve..
//1..
function ageFind(birthYear) {
    const currentYear = 2026;
    let age = currentYear - birthYear;
    if (age < 0) {
        console.log('তুই এলিয়েন ভাই!!');
    } else if (age > 60) {
        console.log('তুই বুইড়া হইছোছ');
    } else if (age > 23) {
        console.log('তুই বেডা হইছিস');
    } else {
        console.log('এখনো যুয়ান তুই');
    }
}
ageFind(2030);

//2..
function bazer(taka){
    const price = 35;
    let answer = taka/price;
    console.log(`You can purches Lawo: ${Math.round(answer.toFixed(2))} Ta`);
}
bazer(100);
//3..
function sellingPrice(price){
    const profitPrice = 250;
    console.log(`Selling price after given any item: ${price + profitPrice}`);
}
sellingPrice(100);

//4..
function spendTime(dailyHours){
    const monthlyHour = dailyHours*30;
    console.log(`Use phone in 30 day's ${monthlyHour} hours`);
}
spendTime(15);
//function return problem solving..
//1..
function higherNumber(a){
    if(a>10){
        return true;
    }else{
        return false;
    }
}
console.log(higherNumber(11));

//2..
function division(a){
    if(a%13===0){
        return true;
    }else{
        return false;
    }
}
console.log(division(39));

//3..
function restrurent(rice, curry, drinks){
    return rice+curry+drinks;
}
console.log(`খাবারের মোট বিল: ${restrurent(20, 50, 25)} টাকা`);

//4..
function numberCheck(a){
    if(a>0){
        return 'Positive';
    }
    else {
        return a*-1;
    }
}
console.log(numberCheck(2));
//5..
function evenOddarray(arr){
    if(arr.length%2===0){
        console.log('Yes, it is a even array');
    }else{
        console.log('It is an odd array');
    }
}
evenOddarray(['HTML', 'CSS', 'Javascript', 'React']);

//6..
function nameCheck(naam){
    return naam[0];

}
console.log(`First letter is ${nameCheck('Nazib')}`);
//7..
function arrayAdd(array){
    const add = array[0]+array[1];
    return add;
}
console.log(`Addition result is ${arrayAdd ([5,20, 15, 56,25])}`);
//8..
// function sumOfNumbers(num){
//     let sum = 0;
//     for(const key of num){
//         sum = sum + key;
//     }
//     return sum;
// }
// const result = sumOfNumbers([54,62,12,6]);
// console.log(result);

function sumOfNumbers(num) {
    let sum = 0;
    for (const key of num) {
        if (key % 2 === 0) {
            sum = sum + key;
        }
    }
    return sum;
}
const result = sumOfNumbers([54,62,12,6]);
console.log(result);
//8..
function addResult(num) {
    let sum = 0;
    for (let key of num) {
        if (key % 2 !== 0) {
            sum = sum + key;
        }
    }
    return sum;
}
console.log(addResult([5, 15, 8, 7]));

//9..
function smallArray(arr) {
    if (arr[0] < arr[1]) {
        return arr[0];
    } else {
        return arr[1];
    }
}
console.log(`Small array ${smallArray([50, 100, 40, 30])}`);

//10..
function findAge(age) {
    if (age < 18) {
        return 18;
    }
    else if (age > 45) {
        return 45;
    }
    else {
        return age;
    }
}

console.log(`My age is ${findAge(30)}`);

//11..
function oddArray(oddarray) {
    let sum = 0;
    for (const num of oddarray) {
        if (num % 4 === 0) {
            sum = sum + num;
        }
    }
    return sum;
}

console.log(oddArray([2, 4, 5, 7, 8, 32, 45]));

//12..
function takeNumber(number) {
    if (number < 20) {
        return number * 2;
    } else {
        let divide = number / 20;
        return divide;
    }
}

console.log(takeNumber(18));

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

//Array push method...
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
