// ----------- BLOCK BINDINGS

// const max = 19

// const max2

// if(condition){
//     const maxItems = 2
//     console.log(maxItems)
// }

// // maxItems here it's undefined

// if(condition){
//     let maxItems = 2
//     console.log(maxItems)
// }

// // maxItems here it's undefined

// if(condition){
//     var maxItems = 10
// }

// // maxItems is still available (BAD)

// var mess = 10

// const mess = 20

// let mess = 30

// const whatever = 10

// whatever = 30 // FORBIDDEN

// const person = {
//     name: 'John'
// }

// person.name = 'Arnold' // OK

// person = { // FORBIDDEN
//     name: 'Steven'
// }

// // LET VS VAR

// for(var i=0; i<10; i++){
//     // your code
// }

// console.log(i) // i is still accessible outside for loop (BAD!)

// for(let i=0; i<10; i++){
//     // your code
// }

// console.log(i) // not accessible

// ----------- FUNCTIONS - DEFAULT PARAMTERS

// function myFunc(url='myUrl', time= 10){

// }

// myFunc('http://whatever.com') // time will be 10

// myFunc('http://whatever.com', 20) // time will be 20

// // pre es6

// function myFuncPreES6(url, time) {
//     if(time===undefined) time= 10
// }

// ----------- FUNCTIONS - REST PARAMETERS

// function withRestParams(...rest) {
//   // rest is an array of all the parameters
//   let sum = 0;

//   rest.forEach((currentElement) => (sum = sum + currentElement));

//   rest.forEach(function (currentElement) {
//     return (sum = sum + currentElement);
//   });

//   return sum;
// }

// console.log(withRestParams(1));

// console.log(withRestParams(1, 2));

// console.log(withRestParams(1, 2, 3, 4, 5, 6, 7, 8, 9));

// ----------- FUNCTIONS - ARROW FUNCTIONS

// () => {};

// function whatever() {
//   console.log(this);
// }

// whatever();

// const arrow = () => {
//   console.log(this);
// };

// arrow();

// const button = document.querySelector();
// button.addEventListener("click", function () {
//   console.log(this); // button
//   this.classList.toggle("on");
// });

// const button = document.querySelector();

// console.log(this); // Window

// button.addEventListener("click", () => {
//   console.log(this); // Window
//   this.classList.toggle("on"); // WILL NOT BE WORKING
// });

// ----------- SHORTHAND SYNTAX

// function createPerson(name, age) {
//   // OLD WAY
//   return {
//     name: name,
//     age: age,
//   };
// }

// function createPerson(name, age) {
//   // NEW WAY
//   return {
//     name,
//     age,
//   };
// }

// ----------- DESTRUCTURING - OBJECT

// const myObject = {
//   type: "asd",
//   name: "whatever",
// };

// // NEW WAY
// const { type, name, value = 10 } = myObject;

// // OLD WAY
// const type = myObject.type;
// const name = myObject.name;
// const value = myObject.value ? myObject.value : 10; // myObject.value does not exists

// ----------- DESTRUCTURING - ARRAY

// const colors = ["red", "green", "blue"];

// const [firstColor, secondColor] = colors;

// const [, , thirdColor, fourthColor = "yellow"] = colors;
// console.log(firstColor); // "red"
// console.log(secondColor); // "green"
// console.log(thirdColor); // "blue"
// console.log(fourthColor); // "yellow"

// ----------- REST ITEMS

// const colors = ["red", "green", "blue"];

// const [firstColor, ...otherColors] = colors;

// console.log(firstColor); // "red"
// console.log(otherColors[0]); // "green"
// console.log(otherColors[1]); // "blue"

// ----------- SPREAD OPERATOR - OBJECTS

// const obj1 = { name: "John", age: 22 };
// const obj2 = { name: "Rambo", gender: "M" };

// const obj3 = { ...obj1, ...obj2, phone: "1321521323" };

// const obj4 = { ...obj1 };

// console.log(obj3);

// ----------- SPREAD OPERATOR - ARRAYS

// const arrayOfStrings = ["This", "is", "a", "sentence"];
// console.log(arrayOfStrings);

// console.log(...arrayOfStrings);

// const myString = "This is a sentence";
// const characters = [...myString];

// console.log(characters);
// console.log(myString.split(""));

// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];

// const arr3 = [...arr1, ...arr2];

// console.log(arr3);

// const clone = (arr) => [...arr];

// const clonedArray = clone([1, 3, 5]);
// console.log(clonedArray);

// ----------- VERY VERY USEFUL ARRAY METHODS

// 1.SOME
// const myAwesomeArray = ["a", "b", "c", "d", "b"];

// console.log(myAwesomeArray.some((element) => element === "a"));

// 2.EVERY

// console.log(myAwesomeArray.every((element) => element === "a"));

// 3.FOREACH

// myAwesomeArray.forEach((element) => console.log(element));

// const cars = [];

// cars.forEach((car) => console.log(car));

// 4.FINDINDEX & FIND

// const numbers = [24, 41, 23, 16, 59];

// console.log(
//   "find output:",
//   numbers.find((number) => number > 30)
// );
// console.log(
//   "findIndex output: ",
//   numbers.findIndex((number) => number > 30)
// );

// 5. MAP

// const numbers = [24, 41, 23, 16, 59];

// const squareNumber = numbers.map(
//   (currElement) => currElement * currElement + 1000
// );

// console.log(squareNumber);

// const squareNumber = [];

// numbers.forEach((currElement) => {
//   squareNumber.push(currElement * currElement + 1000);
// });

// 6. REDUCE

const numbers = [1, 4, 2, 1, 5];

console.log(
  numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
  // I ITERATION accumulator = 0, currentValue = 1 --> accumulator= accumulator + currentValue = 1
  // II ITERATION accumulator = 1, currentValue = 4 --> accumulator= accumulator + currentValue = 5
  // III ITERATION accumulator = 5, currentValue = 2 --> accumulator= accumulator + currentValue = 7
  // IV ITERATION accumulator = 7, currentValue = 1 --> accumulator= accumulator + currentValue = 8
  // V ITERATION accumulator = 8, currentValue = 5 --> accumulator= accumulator + currentValue = 13
);

const students = [
  {
    id: 10,
    name: "Poe Dameron",
    years: 14,
  },
  {
    id: 2,
    name: "Temmin 'Snap' Wexley",
    years: 30,
  },
  {
    id: 41,
    name: "Tallissan Lintra",
    years: 16,
  },
  {
    id: 99,
    name: "Ello Asty",
    years: 22,
  },
];

const totalYears = students.reduce((acc, student) => acc + student.years, 0);

console.log(totalYears);

// 7. FILTER

const pilots = [
  {
    id: 5,
    name: "Luke Skywalker",
    pilotingScore: 98,
    shootingScore: 56,
    isForceUser: true,
  },
  {
    id: 82,
    name: "Sabine Wren",
    pilotingScore: 73,
    shootingScore: 99,
    isForceUser: false,
  },
  {
    id: 22,
    name: "Zeb Orellios",
    pilotingScore: 20,
    shootingScore: 59,
    isForceUser: false,
  },
  {
    id: 15,
    name: "Ezra Bridger",
    pilotingScore: 43,
    shootingScore: 67,
    isForceUser: true,
  },
  {
    id: 11,
    name: "Caleb Dume",
    pilotingScore: 71,
    shootingScore: 85,
    isForceUser: true,
  },
];

const forceUsers = pilots
  .filter((pilot) => pilot.isForceUser)
  .map((pilot) => pilot.name);

const notForceUsers = pilots.filter((pilot) => !pilot.isForceUser);

console.log(forceUsers);

// with arrow functions <3
const totalScore = pilots
  .filter((pilot) => pilot.isForceUser)
  .map((pilot) => pilot.pilotingScore + pilot.shootingScore)
  .reduce((acc, score) => acc + score, 0);

console.log(totalScore);

// with normal functions
// const totalJediScore = pilots
//   .filter(function (person) {
//     return person.isForceUser;
//   })
//   .map(function (jedi) {
//     return jedi.pilotingScore + jedi.shootingScore;
//   })
//   .reduce(function (acc, score) {
//     return acc + score;
//   }, 0);

// console.log(
//   pilots
//     .filter((pilot) => pilot.isForceUser)
//     .map((pilot) => pilot.pilotingScore + pilot.shootingScore)
// );
