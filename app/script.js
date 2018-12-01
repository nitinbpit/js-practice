console.log('This is testing console..');

// //Method Borrowing--------------------------------------------------------------
// //call, apply and bind methods of Object
// var john = {
//   name : 'John Smith',
//   yearOfBirth : 1990,
//   salary : 80000,
//   calcAge : function(currentYear){
//     return currentYear-this.yearOfBirth;
//   }
// }
// var neo = {
//   name : 'Neo Anderson',
//   yearOfBirth : 1995,
//   salary : 75000,
// }
//
// neo.calcAge = john.calcAge; //method borrowing
// console.log(neo.calcAge(2018));
//
// console.log(john.calcAge.call(neo,2018));  //call method - takes separate arguments
//
// console.log(john.calcAge.apply(neo, [2018])); // apply method - takes an array
//
// var neoAge = john.calcAge.bind(neo); // bind method - binds an object with a method to use it later
// console.log(neoAge(2018));

// //Closure-----------------------------------------------------------------------
// //an anonymous self-invokin function assigns counter=0 and returns another anonymous
// //function and this returned function is assigned to variable add.
// //Interesting part obout closure is that now this returned function has access
// //to the counter variable even if the outer function has done executing.
// //So, now counter variable can only be accessed by the add variable.
// var add = (function () {
//     var counter = 0;
//     return function () {counter += 1; return counter}
// })();
// add();
// add();
// add();
// console.log(add());

// //Hoisting----------------------------------------------------------------------
// //declarations are moved to the top automatically while initialisations/assignments are not.
// //below statement prints underfined because declaration for demoFunc variable has
// //been automatically moved to the top but defination of function has not been assignet to it yet
// console.log(demoFunc); // prints undefined
// console.log(typeof demoFunc); // prints undefined
// //demoFunc(); // this return error because as of now, demoFunc is just a variable without any initialisation
// var demoFunc = function(){
//   console.log('Demo function called.');
// };
// console.log(demoFunc2); // prints the contents of the function
// console.log(typeof demoFunc2); // prints function
// demoFunc2(); // invokes the function as declaration is moved to the top.
// function demoFunc2 (){
//   console.log('Demo function 2 called.');
// }


// document.querySelector('.my-button').addEventListener('click',function(){
//   document.querySelector('.my-para').innerHTML = 'Button Clicked';
//   document.querySelector('.my-input').value = 'Button Clicked';
// console.log('Button Clicked.');
// });



// // Inheritance (Prototype Chaining)---------------------------------------------
// var Person = function(name, yearOfBirth){ //constructor
//   this.name = name;
//   this.yearOfBirth = yearOfBirth;
// }
// Person.prototype.calcAge = function(currentYear){ //method added to prototype property of constructor
//   this.age = currentYear-this.yearOfBirth;
// }
// var john = new Person('John', 1990); //
// var mark = new Person('Mark', 1995); // these objects dont have separate copies of calcAge method
// john.calcAge(2018);
// mark.calcAge(2018);

//-----------------------------------------------------------------------------
// var me = {
//   name : 'Nitin',
//   yearOfBirth : 1990,
//   height : 1.8,
//   weight : 75,
//   calcBmi : function(){
//     this.bmi = this.weight/(this.mass**2);
//   },
//   calcAge : function(currentYear){
//     var age = currentYear-this.yearOfBirth;
//     console.log('Current Age is ' + age + ' years.');
//   },
//   retirement : function(countryName){
//     console.log(this);
//     var retirementAge = 50;
//     switch(countryName){
//       case 'India':
//       retirementAge = 60;
//       break;
//       case 'US':
//       retirementAge = 65;
//       break;
//     }
//     var message = ' years left until retirement.'
//     return function(currentYear, yearOfBirth){
//       console.log(this);
//       var yearsToRetire = retirementAge-(currentYear-yearOfBirth);
//       console.log(yearsToRetire + message);
//     }
//   }
// }
//
// me.calcAge(2018);
// me.retirement('US')(2018,1990);

// //easy challenge-------------------------------------------------------------
//
// var people = [
//   {
//     'name' : 'John',
//     'age' : '',
//     'height' : '',
//     'bmi' : ''
//   },
//   {
//     'name' : 'Mark',
//     'age' : '',
//     'height' : '',
//     'bmi' : ''
//   }
// ];
// people[0].age = prompt('Enter Weight of John in Kilograms.');
// people[0].height = prompt('Enter Height of John in Meters.');
// people[0].bmi = people[0].age/(people[0].height**2);
// people[1].age = prompt('Enter Age of Mark in Kilograms.');
// people[1].height = prompt('Enter Height of Mark in Meters.');
// people[1].bmi = people[1].age/(people[1].height**2);
// console.log(people);
// johnBMIHigher = people[0].bmi>people[1].bmi;
// console.log('Is John\'s BMI is higher than Mark\'s? ' + johnBMIHigher);
// //console.log('Is John\'s BMI is higher than Mark\'s?');
// //console.log(people[0].bmi>people[1].bmi);



// //Closure----------------------------------------------------------------------
// //1. function returns another function
// //2. member variables of outer function are accessible by inner function even after outer function has done executing and is no longer in Execution Context
// function greeter(name, age){
//   var message = name + ' is ' + age + ' years old.';
//   return function(){
//     console.log(message);
//   };
// }
// var jamesGreeter = greeter('james', 23); // greeter function returns anonymous function and this function is assigned to jamesGreeter
// jamesGreeter(); // message variable of greeter function is still accessible by this anonymous function

// //Passing Functions as Arguments (Callback Functions)-----------------------------
// var years = [1990, 1965, 2000, 2010];
// function arrayCalc(arr, fn){
//   var arrRes = [];
//   for (var i=0;i<arr.length;i++){
//     arrRes.push(fn(arr[i]));
//   }
//   return arrRes;
// }
//
// function calculateAge(el){
//   return 2016 - el;
// }
// function isAdult(el){
//   return el >= 18;
// }
// function maxHeartRate(el){
//   if(el>=18 && el <=81){
//     return Math.round(206.9 - (0.67+el));
//   }else{
//     return -1;
//   }
// }
//
// var ages = arrayCalc(years, calculateAge);
// var isAdult = arrayCalc(arrayCalc(years, calculateAge), isAdult);
// var heartRates = arrayCalc(arrayCalc(years, calculateAge), maxHeartRate);
//
// console.log(ages);
// console.log(isAdult);
// console.log(heartRates);







// //operations on array-----------------------------------------------------------
// {
//   var array = [1,2];
//   console.log(array);
//   array[array.length]=3; // insert at end
//   console.log(array);
//   array.push(4); //insert at end
//   console.log(array);
//   array.shift(5); //removes from beginning
//   console.log(array);
//   array.unshift(6); //inserts at beginning
//   console.log(array);
//   array.pop(); //removes from end
//   console.log(array);
//   console.log(array.indexOf(1));
// }


// //loops-------------------------------------------------------------------------
// var array = [1,2,3];
// var object = {
//   'name' : 'john',
//   'age' : '23'
// }
// for (var a=0;a<array.length;a++){
//   console.log(array[a]);
// }
// var index=0;
// while(index!==array.length){
//   console.log(array[index]);
//   index++;
// }
// index=0;
// do{
//   console.log(array[index]);
//   index++;
// }while(index!==array.length);
// for(element in array){
//   console.log(array[element]);
// }
// for(property in object){
//   console.log(object.property);
// }


// //object-----------------------------------------------------------------------
// var john = {
//   firstName: 'John',
//   lastName : 'Smith',
//   birthYear : 1990,
//   calcAge : function (currentYear){
//     this.age = currentYear-this.birthYear;
//   }
// }
// john.calcAge(2018);
// console.log(john);
//
//
// var newObj = new Object();
// var newArray = new Array();




// //Method Borrowing--------------------------------------------------------------
// //call, apply and bind methods of Object
// var john = {
//   name : 'John Smith',
//   yearOfBirth : 1990,
//   salary : 80000,
//   calcAge : function(currentYear){
//     return currentYear-this.yearOfBirth;
//   }
// }
// var neo = {
//   name : 'Neo Anderson',
//   yearOfBirth : 1995,
//   salary : 75000,
// }
//
// neo.calcAge = john.calcAge; //method borrowing
// console.log(neo.calcAge(2018));
//
// console.log(john.calcAge.call(neo,2018));  //call method - takes separate arguments
//
// console.log(john.calcAge.apply(neo, [2018])); // apply method - takes an array
//
// var neoAge = john.calcAge.bind(neo); // bind method - binds an object with a method to use it later
// console.log(neoAge(2018));

// //Closure-----------------------------------------------------------------------
// //an anonymous self-invokin function assigns counter=0 and returns another anonymous
// //function and this returned function is assigned to variable add.
// //Interesting part obout closure is that now this returned function has access
// //to the counter variable even if the outer function has done executing.
// //So, now counter variable can only be accessed by the add variable.
// var add = (function () {
//     var counter = 0;
//     return function () {counter += 1; return counter}
// })();
// add();
// add();
// add();
// console.log(add());

// //Hoisting----------------------------------------------------------------------
// //declarations are moved to the top automatically while initialisations/assignments are not.
// //below statement prints underfined because declaration for demoFunc variable has
// //been automatically moved to the top but defination of function has not been assignet to it yet
// console.log(demoFunc); // prints undefined
// console.log(typeof demoFunc); // prints undefined
// //demoFunc(); // this return error because as of now, demoFunc is just a variable without any initialisation
// var demoFunc = function(){
//   console.log('Demo function called.');
// };
// console.log(demoFunc2); // prints the contents of the function
// console.log(typeof demoFunc2); // prints function
// demoFunc2(); // invokes the function as declaration is moved to the top.
// function demoFunc2 (){
//   console.log('Demo function 2 called.');
// }

// //------------------------------------------------------------------------------
// var y = 1;
//   if (function f(){}) {
//     function f2(){};
//     y += typeof f; //undefined
//     y+=typeof f2; //function
//   }
// console.log(y);
//
//
//   var Employee = function (name, company, salary) {
//     this.name = name || "";       //Public attribute default value is null
//     this.company = company || ""; //Public attribute default value is null
//     this.salary = salary || 5000; //Public attribute default value is null
//
//     // Private method
//     var increaseSalary = function (t) {
//         t.salary = t.salary + 1000;
//     };
//
//     // Public method
//     this.dispalyIncreasedSalary = function() {
//         increaseSalary(this);
//         console.log(this.salary);
//     };
//   };
//   var john = new Employee('john','infy',50000);
//   john.dispalyIncreasedSalary();
//  var name = 'nitin';
//   console.log(typeof undefined)  ;


// //------------------------------------------------------------------------------
//   function Person(first, last, age, eyecolor) {
//     this.firstName = first;
//     this.lastName = last;
//     this.age = age;
//     this.eyeColor = eyecolor;
// }
// Person.prototype.name = function() {
//     return this.firstName + " " + this.lastName;
// };
// var myFather = new Person("John", "Doe", 50, "blue");
// document.querySelector("body").innerHTML =
// "My father is " + myFather.name();
// console.log(myFather);

// var Person = function(name, age){
//   this.name = name;
//   this.age = age;
// };
//
// var john = new Person('John',30);
// Person.prototype.salary = 5000;

// //var is function scoped--------------------------------------------------------
// var i = 10;
// (function(){
//   var i=2;
//   console.log(i);
// })();
// console.log(i);
// //let and const are block scoped------------------------------------------------
// let j=15;
// {
//   let j = 1;
//   console.log(j);
// }
// console.log(`This is ${j}`);
