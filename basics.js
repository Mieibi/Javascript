//Log to console

console.log("Hello World"); 
console.log(123);
console.log(true);
console.table({a:1,b:2}); //an object, it displays as a table on the console showing the index and the value

console.clear(); // to clear the console

//using console log to know how long a certain function runs

console.time("Hello") //Hello is the identifier, relating the beginning to the end
    console.log("Hello World");
    console.log("Hello World"); 
    console.log("Hello World"); 
    console.log("Hello World"); 
    console.log("Hello World"); 
    console.log("Hello World");   
console.timeEnd("Hello")

/*We can log order types such as arrays, variables,objects */

//variables and declarions

/* 
keywords used in variables : var, let, const
We can reassign variables when we use var and let
rules: 
    variables can contain letters, numbers, _ , currency
    it cannot start with numbers
    "$name" as a variable name is used mainly in jquery
const statement means constant the variable cannot be assigned another value, const has to be assigned a value when initialized. In the case of objects and arrays, we can assign a new value with the constant entity declared for objects(
    const = person {
        name : "joe",
        age : 12
    }
    The values within like name can be changed with the syntax : person.name = "jal" but we cannot write the entity person again with new values within
)
The same thing applies to arrays we can add new values to it but we cannot write out the entity again assigning new values.
*/
//var
var name = "John Doe"; 

//initializing (there's no value attached until later)
var greeting; 
greeting = "hello"  

//Data types
/* 
Primitive Data types:
    String
    Number
    Boolean
    Null
    Undefined --- initializing without assigning a value
    Symbols (with ES6)
Reference Type: They are gotten from references 
    Arrays 
    Functions
    Dates 
    Object wrappers
*/
console.clear();
//Primitive

//string 
const Name = "John";

//Number
const number = 45;

//Boolean
const hasKid = true;

//NULL
const car = null; //this gives object as data type

//undefined
let test;

//symbol
const sym = Symbol();

console.log(typeof Name); // Shows the data type of the variable
console.log(typeof hasKid); // returns boolean on console

//Reference Types - They return data type object as data type in console

//Array
const hobbies = ["movies","reading"]

console.log(typeof hobbies);

//Object - actual object

const address = {
    city : "Boston" ,
    Country : "Nigeria"
}

//date

const today = Date();

//type conversion

let val;

//Number to string
val = String(5); // this converts the number 5 to a string
val = String(4+4);

//boolean to string
val = String(true);

//putting the value of the variable converts the value to a string.

//output
console.log(val);
console.log(typeof val);
console.log(val.length); //length only works on strings -- this gives undefined since val is a number.

//string to numbers
let co = Number("5"); //Number function converts the data type string to a number.

//For boolean passing it in the Number function 
    //True outputs "1"
    //False outputs 0
    //The number function only works with numbers declared as strings, normal strings cannot be converted to numbers also arrays

console.log(co);
console.log(typeof co);
console.log(co.toFixed(1)); //This sets the number of decimal places.

//Numbers and the Math Object

const num1 = 100;
const num2 = 50;
let ca;
//simple math with number
/* 
Additon +
Subtraction -
multiplication *
Division /
modulus %
*/

//Math Object
ca = Math.PI; //Generates value of pi
ca = Math.E // generates eulers number
ca = Math.round(2.5); //round up numbers--- it does both round up and down
ca = Math.ceil(2.3); // rounds up only
ca = Math.floor(2.7); //rounds down only
ca = Math.sqrt(16);//square root of the number 
ca = Math.abs(-5); // we get the absolute number of the number
ca = Math.pow(8,2);//raise to power

//others are .max(to get the maximum number of a group of numbers), .min(to get the minimum number from a group of data)

ca = Math.random(); //to generate random numbers, to get a range multiply by the range and since it comes out as decimal places we can round up or round down the values .

console.log(ca);

//String Methods and Concatenation
let firstname = "Promise";
let lastname = "Amapakabo";

let go;
//concatenation

go = firstname + " " + lastname;
console.log(go);

//Append
vol = "broad";
vol += " goal";
console.log(vol);
//This string method comprises from basic string methods from other languages

//length
bol = vol.length;
console.log(bol) 

//turning string to uppercase
gal =firstname.toUpperCase();
console.log(gal);

//to know the index => indexof()
tall = firstname.indexOf('P')
console.log(tall)
//from the back we use; lastIndexOf("The character you are looking for")

//to know the character an index contains we use ; .charAt("the index")

//.substr("index of where you are starting from","index of where you are ending") ---- forming a string out of a string

let well = go.substr('4','11');
console.log(well);

//split(''), splits a string into an array.
//replace("character(s) you want to replace","what you replacing it with")
//includes("the character you are testing") ---- this method tells us if a character or characters is present in a string or not so it returns a boolean value
//x.concat('',what you are joing x with); this contantenate method the nuormal method of "x" + "y" = "xy"
function test() {
    var a = "3";
    var b = "8";
    
/***********Do not change the code above 👆*******/
//Write your code on lines 7 - 9:
    var c = a;
    a = b;
    b = c;
  
/***********Do not change the code below 👇*******/

    console.log("a is " + a);
    console.log("b is " + b);
}

// this more like adding dynamic html through javascript in our web page
//Templates Literals
const name = "John";
const age = 30;
const job = "Web developer";
const city = "Miami"

//without template strings (ES5)
html = "<ul><li> Name: " + name + "</li><li> Age: "+ age +"</li></ul>";  

//template strings fix the boring repetitiveness 

//with tempaltes (ES6)
html = `
    <ul>
        <li>Name: ${name}</li>
        <li>Age: ${age}</li>
        <li>Job: ${job}</li>
        <li>City: ${city}</li>
    </ul>
`
document.body.innerHTML = html;

//arrays
const numbers = [23,44,45,6]
const lab = new Array(2,5,6,7) 
//above are the two different ways of writing a string

let tal;

//array length
tal = numbers.length

//check if its an array
tal = Array.isArray(numbers);

//get a single value
tal = numbers[3]


//find index value
tal = numbers.indexOf(44);

//Mutating arrays

//add on to array
numbers.push(250);

//add on to front of array
numbers.unshift(250);

//take of number from end
numbers.pop();

//take of number from front
numbers.shift();

//splice out values
numbers.splice(0,2); //where the index of where you want to start, how many numbers you are removing

console.log(numbers)
//reverse array
numbers.reverse();

//Concatenate arrays
tal = numbers.concat(lab);

//sorting strings
hal = ["gh","ng","rw","uy"]
tal = hal.sort();

//sorting numbers we use the comapre function
tal =numbers.sort(function(x,y){
    return x-y;
})
//reverse is y-x

//find, this method shows the first number over 50 in the array.
function under50(num){
    return num < 50;
}
tal = numbers.find(under50);

console.log(numbers)
console.log(tal)

//object literals
const person = {
    ral: "goal",
    bol: "van",
    height: "6ft"
}

let i;
i = person; // if i console log this it will output all the items in the object person

//to get specific value
i = person.ral;

console.log(i);

// if you are in an object and you have something to calculate and one of the variables to use during the calculation is an object item, you use the "this" keyword. its more like i have an object item "age" witha value of "12" and i have an object item that is a function to calculate the year the person was born, normally we would do (assuming 2017 is the current year) "2017 - age" but this will produce an error so we use "2017 - this.age" which will bring up the year of birth.
//Date and times

let ub;

const present = new Date() // this gives todays date
let birth = new Date('9-10-1981')

ub = present
ub = birth
//converting the date to a string
//ub = present.toString()

//to get month,day,date and others and it is based on the index method so January will be like 0 if you want to get the month and its january
ub = present.getMonth(); 
ub = present.getDay();
ub = present.getDate();
ub = present.getFullYear();

//changing the date parameters we use "set"what you want to change
console.log(ub);

//if statements, normal syntax of c++ 
let x = 6
if (x < 5){
    console.log("it's bigger")
}
else{
    console.log("it's smaller") 
}

//in javascript assuming we have a variable holding a string 100 and we want to test if its equal to an integer 100, the console will tell us that they are equal which is just a minor setback in javascript but if we want consider the type of data in comparison to know if they are equal we use "===" three equal to signs and for not equal !==.


//assuming you want to know if a variable id defined or not we use "typeof"

if (typeof y !== 'undefined'){
    console.log(`The value of y is ${y}`)
}else{
    console.log("no value for y")
}

//comparison operators are the same for c++
// their comparators && - AND, || for OR 

//short hand of doing conditions

console.log(x === 6 ? "correct" : "wrong");

const col = "black";

//switch statement is the same in c++
switch (col) {
    case "blue":
        console.log("Color is blue");
        break;
    case "red":
        console.log("Color is red");
        break;
    default:
        console.log("No color available");
        break;
}

//Function Declaration

// Unlike ES5 where we have to set an if statement to set default names, ES6 we set default names in the parameter section so therefore if the call function is undefined.

function greet(Firstname = "John", Lastname = "Doe"){ 
    //console.log("hello")
    return `Hello ${Firstname} ${Lastname}` 
}
console.log(greet("Steve","Alade")); 

//functions here are the same as those of c++

//Immeditely Invokable Function Expressions - IIFES ---- a function you declare and run at the same time.
// (function(params) {
//     console.log("IIFE RAN...");
// })();
(function (name) {
    console.log(`hi ${name}`);
})("Brad");

//Property methods, when a function is an object item it is called a method.
const todo = {
    add: function() {
        console.log("Add todo..");
    }
}
todo.add()

for (let i = 0; i < 5 ;i++) {
    if (i === 2) {
        console.log("This is number two");
        continue; //without the continue statement number "2" will still show in the output, so with the continue statement, we are telling the compiler to move on to the next value in the array. 
    }
    console.log(i);
}
//"break statement to move out of the loop" 
//loops in javascript--- for,while, do-while, forEach, map, for in loop

const cars = ["Ford", "nissan","Toyota","IGM"]

cars.forEach(function(item){     //forEach loop has three parameters the iterater, index and array; if you call the index it will output the index of the array, call the array it will output the whole array each time is outputs the members of the array.
    console.log(item)
});
//MAP; used to return a different a array, it is best used with objects or array in an array. it just the same as the for each loop the only differnce is that you are returning to form a new array
const users = [
    {id: 1, name: "felix"},
    {id: 2, name: "jal"},
    {id: 3, name: "koko"}
]
//creating an array of the id's

const ids = users.map(function(user){
    return user.id;
})
console.log(ids)

const param = {
    k: "Phillipe Lobos",
    j: "James Saint-patrick",
    l: "Angela Valdez"
}
for(let xg in param){
    console.log(xg); //x is the key  of the different attributes of the object; this outputs k,j,l
    //to display the key values held by the keys
    console.log(param[xg]) 
}
