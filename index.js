// reto 1, Explore las diferencias entre las variables y deje las palabras clave
// uso de let

let catName;
let quote;
function catTalk() {
  "use strict";

  catName = "Oliver";
  quote = catName + " says Meow!";

}
catTalk();

// reto 2, usar let para ver el alcance que tiene dependiendo de donde se defina

function checkScope() {
    "use strict";
      let i = "function scope";
      if (true) {
       let i = "block scope";
        console.log("Block scope i is: ", i);
      }
      console.log("Function scope i is: ", i);
      return i;
    }

// reto 3, usar const para declarar variables, una vez que se asigna una variable const, no 
// se puede reasignar, tiene el mismo alcance de let, las variables se declaran en mayuscula

    function printManyTimes(str) {
        "use strict";
      
        // change code below this line
      
        const SENTENCE = str + " is cool!";
        for(let i = 0; i < str.length; i+=2) {
          console.log(SENTENCE);
        }
      
        // change code above this line
      
      }
      printManyTimes("freeCodeCamp");


// reto 4, const no permite reasignar objetos, pero si modificar su contenido, lo que se conoce 
// como mutar


const s = [5, 7, 2];
function editInPlace() {
  "use strict";
  // change code below this line
s [0] = 2;
s [1] = 5;
s [2] = 7;
  // s = [2, 5, 7]; <- this is invalid

  // change code above this line
}
editInPlace();


// reto 5, Previene la mutación de objetos con Object.freeze
// ya no puede agregar, actualizar o eliminar propiedades de él. 

function freezeObj() {
    "use strict";
    const MATH_CONSTANTS = {
      PI: 3.14
    };
    // change code below this line
  Object.freeze(MATH_CONSTANTS);
  
    // change code above this line
    try {
      MATH_CONSTANTS.PI = 99;
    } catch( ex ) {
      console.log(ex);
    }
    return MATH_CONSTANTS.PI;
  }
  const PI = freezeObj();


  // reto 6, Usar funciones de flecha para escribir funciones anónimas concisas

  /* 
 const myFunc = function() {
  const myVar = "value";
  return myVar;
}

const myFunc = () => {
  const myVar = "value";
  return myVar;
}


const myFunc = () => "value"
*/

const magic = () => new Date;


// reto 7, Escribir funciones de flecha con parámetros
// .concat no cambia los arrays existentes, sino que devuelve un nuevo array.

const myConcat = (arr1, arr2) => arr1.concat(arr2);
// test your code
console.log(myConcat([1, 2], [3, 4, 5]));
// [1,2,3,4,5]


// reto 8, Escribir funciones de flecha de orden superior

const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];
const squareList = (arr) => {
  "use strict";
  // change code below this line
  const squaredIntegers = arr.filter( (num) => num > 0 && num % parseInt(num) === 0 ).map( (num) => Math.pow(num, 2) );
  // change code above this line
  return squaredIntegers;
};
// test your code
const squaredIntegers = squareList(realNumberArray);
console.log(squaredIntegers);

// reto 9, Establezca los parámetros predeterminados para sus funciones

const increment = (function() {
  "use strict";
  return function increment(number, value = 1) {
    return number + value;
  };
})();
console.log(increment(5, 2)); // returns 7
console.log(increment(5)); // returns 6


// reto 10, usar el operador de reposo args con parámetros de función 

const sum = (function() {
  "use strict";
  return function sum(...args) {    
    return args.reduce((a, b) => a + b, 0);
  };
  
})();
console.log(sum(1, 2, 3)); // 6


// reto 11, usar el operador de propagación para evaluar matrices en el lugar

const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;
(function() {
  "use strict";
  arr2 = [...arr1]; // change this line
})();
console.log(arr1 === arr2);


// reto 12, Usar asignación de destrucción para asignar variables de objetos

const AVG_TEMPERATURES = {
  today: 77.5,
  tomorrow: 79
};

function getTempOfTmrw(avgTemperatures) {
  "use strict";
  // change code below this line
  const { tomorrow: tempOfTomorrow } = avgTemperatures // change this line
  // change code above this line
  return tempOfTomorrow;
}

console.log(getTempOfTmrw(AVG_TEMPERATURES)); // should be 79

// reto 13, Usar asignación de destrucción para asignar variables de objetos anidados

const LOCAL_FORECAST = {
  today: { min: 72, max: 83 },
  tomorrow: { min: 73.3, max: 84.6 }
  };
  
  function getMaxOfTmrw(forecast) {
  'use strict';
  // change code below this line
  const { tomorrow : { max : maxOfTomorrow }} = forecast; // change this line
  // change code above this line
  return maxOfTomorrow;
  }
  
  console.log(getMaxOfTmrw(LOCAL_FORECAST)); // should be 84.6


  // reto 14, Use la asignación de destrucción para asignar variables de matrices

  let a = 8, b = 6;
(() => {
  "use strict";
  // change code below this line
  [b, a] = [a, b]
  // change code above this line
})();
console.log(a); // should be 6
console.log(b); // should be 8


// reto 15, Use la asignación de destrucción con el operador de reposo para reasignar elementos /// de la matriz

const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list) {
  "use strict";
  // change code below this line
  const [a,b, ...arr] = list; // change this
  // change code above this line
  return arr;
}
const arr = removeFirstTwo(source);
console.log(arr); // should be [3,4,5,6,7,8,9,10]
console.log(source); // should be [1,2,3,4,5,6,7,8,9,10];


// reto 16, usar asignación de destrucción para pasar un objeto como parámetros de una función

const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85
};
const half = (function() {
  "use strict"; // do not change this line

  // change code below this line
  return (({max, min}) => {
    // use function argument destructuring
    return (max + min) / 2.0;
  });
  // change code above this line

})();
console.log(stats); // should be object
console.log(half(stats)); // should be 28.015

// reto 17, crear cadenas usando literales de plantilla

const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["id-blacklist", "no-dup-keys"]
};
function makeList(arr) {
  "use strict";

  // change code below this line
  const resultDisplayArray = [];
  arr.map(val=>resultDisplayArray.push(`<li class="text-warning">${val}</li>`))
  // change code above this line

  return resultDisplayArray;
}
/**
 * makeList(result.failure) should return:
 * [ `<li class="text-warning">no-var</li>`,
 *   `<li class="text-warning">var-on-top</li>`, 
 *   `<li class="text-warning">linebreak</li>` ]
 **/
const resultDisplayArray = makeList(result.failure);


// reto 18, Escribir declaraciones literales de objetos concisos usando campos simples
/* Ejemplo

const getMousePosition = (x, y) => ({
  x: x,
  y: y
});

*/

const createPerson = (name, age, gender) => ({ name, age, gender});
  "use strict";
  // change code below this line
  
  // change code above this line

console.log(createPerson("Zodiac Hasbro", 56, "male")); // returns a proper object


// reto 19, Escribir funciones declarativas concisas con ES6
/*  Ejemplo

const person = {
  name: "Taylor",
  sayHello: function() {
    return `Hello! My name is ${this.name}.`;
  }
};

*/

// change code below this line
const bicycle = {
  gear: 2,
  setGear (newGear) {
    "use strict";
    this.gear = newGear;
  }
};
// change code above this line
bicycle.setGear(3);
console.log(bicycle.gear);


// reto 20, use la sintaxis de clase para definir una función constructora

function makeClass() {
  "use strict";
  /* Alter code below this line */
class Vegetable{
  constructor(carrot){
    this.name = carrot;
  }
}

  /* Alter code above this line */
  return Vegetable;
}
const Vegetable = makeClass();
const carrot = new Vegetable('carrot');
console.log(carrot.name); // => should be 'carrot'

// reto 21, utilizar getters y setters para controlar el acceso a un objeto

function makeClass() {
  "use strict";
  /* Alter code below this line */
class Thermostat{
    constructor(farenheit){
      this.farenheit = farenheit;
    }
    get temperature(){
      return 5 / 9 * (this.farenheit - 32);
    }
    set temperature(celsius){
      this.farenheit = celsius * 9.0 / 5 + 32;
    }
  }
  /* Alter code above this line */
  return Thermostat;
}
const Thermostat = makeClass();
const thermos = new Thermostat(76); // setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in C
thermos.temperature = 26;
temp = thermos.temperature; // 26 in C


// reto 22, Comprender las diferencias entre importar y requerir, se puede aprovechar para 
// importar pequeñas cantidades de código desde archivos grandes

"use strict";
import { capitalizeString } from "string_functions";
capitalizeString("hello!");


// reto 23, usar la exportación para reutilizar un bloque de código, Cuando queremos que un código, una función o una variable, se pueda usar en otro archivo, debemos exportarlo para importarlo en otro archivo. Al igual que import, exportes una característica que no es del navegador.

/* 

const capitalizeString = (string) => { 
return string.charAt (0) .toUpperCase () + string.slice (1); 
} 
export {capitalizeString} // Cómo exportar funciones. 
export const foo = "bar"; // Cómo exportar variables.


const capitalizeString = (string) => { 
  return string.charAt (0) .toUpperCase () + string.slice (1); 
} 
const foo = "bar"; 
export {capitalizeString, foo}

*/


"use strict";
export const foo = "bar";
export const bar = "foo";

// reto 24, Usa * para importar todo desde un archivo, Supongamos que tiene un archivo que desea importar todo su contenido en el archivo actual. Esto se puede hacer con la sintaxis de importación * .


"use strict";
import * as str from "capitalize_strings";


// reto 25, Crear un respaldo de exportación con la exportación predeterminada

"use strict";
export default function subtract(x,y) {return x - y;}


// reto 26, importar una exportación predeterminada

"use strict";
import subtract from "math_functions";
subtract(7,4);
