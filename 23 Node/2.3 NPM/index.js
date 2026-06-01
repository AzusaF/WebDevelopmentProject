import generateName from "sillyname";
var sillyName = generateName();

import {randomSuperhero}  from "superheroes";
const newSuperhero = randomSuperhero();

console.log(`My name is ${sillyName}. I am ${newSuperhero}!`);