// var name = "Marta";
// var name = "Alex";
// console.log(name);
// name = "Hugo";
// console.log(name);

// let newName = "Maxim";
// let newName = "Marc";

var variable = null;
function key() {
  var variable;
  console.log(variable);
  console.log(variable);
  console.log(variable);
  console.log(variable);
  console.log(variable);
  variable = "NOT NULL";
}

key();
console.log("variable:", variable);

var dimitri = "cool guy";

if (true) {
  var dimitri = "very cool guy";
}

console.log(dimitri);

// const
// can not be reassigned
// can not be redeclared
// block level scope
// const is hoisted, but it doesnt get initialized

// let
// can be reassigned
// can not be redeclared
// block level scope
// let is hoisted, but it doesnt get initialized

// var
// can be reassigned
// can be redeclared
// function scope
// var is hoisted, but it gets initiliazed, by default, to undefined

// sayHello();
const banana = "das yellow fruit";
console.log(banana);

sayHello();
function sayHello() {
  console.log("hello");
}

const arrow = () => 1;
const arrow2 = () => {
  return 1;
};

const object = () => {
  return {
    name: "monique",
  };
};

// const obj2 = () => ({ name: "monique" });

const oneArg = (name) => `Hello ${name}`;
const multipleArgs = (as, we, usually, doNormallyt) => {
  return; ///
};

console.log(oneArg("Marta"));

const user = {
  name: "gosia",
  from: "poland",
  languagesSpoken: {
    english: "native",
    polish: "native",
    mandarin: "nope",
  },
};

// const name = user.name;
// const from = user.from;
console.clear();
const {
  from,
  name: somethingElse,
  languagesSpoken: { mandarin },
} = user;
console.log("somethingElse:", somethingElse);

// const from = user.from;

const user2 = {
  name: "marta",
  from: "spain",
  languagesSpoken: {
    english: "native",
    spanish: "native",
    dutch: "reasonable. i can survive and ask for cheese",
  },
};

const {
  name: name2,
  from: from2,
  languagesSpoken: { english: english2 },
} = user2;
// const from = user2.from;

function sayUserName(user) {
  const { name } = user;
  console.log("THE USER's NAME IS " + name);
}

sayUserName(user);
sayUserName(user2);
console.log(name);

console.clear();

const arrayOfNumbers = [1, 2, 3, 4, 5, 6];

const [pen, , , apple, penpineappleapplepen] = arrayOfNumbers;

const user3 = {
  name: "Querien",
  nationality: "Dutch",
  languagesSpoken: [
    { language: "portuguese", level: "nope" },
    { language: "spanish", level: "porsupuesto" },
  ],
  password: "12345678",
};

const {
  languagesSpoken: [, { level }],
} = user3;

// ===
// const level = user3.languagesSpoken[1].level

const speaksSpanish = `Querien speaks spanish at a ${level} level`;
console.log("level:", level);

// var numberOfTimes = 100;
// for (var numberOfTimes = 0; numberOfTimes < 250; numberOfTimes++) {}

// console.log(numberOfTimes);

const obj1 = { hello: "world", arr: [1, 2, 3] };

const obj2 = obj1;

const obj3 = { ...obj1 };

const arr1 = [1, 2, 3, { banana: "yellow" }];
const arr2 = [...arr1];
const arr3 = [, ...arr2];
const arr4 = [...arr1, ...arr2];
const [, , ...martaSH] = arr4;

const { password, ...dinosaurOrCrocodile } = user3;
console.log("rest:", dinosaurOrCrocodile);

/* const user3 = {
   name: "Querien",
   nationality: "Dutch",
   languagesSpoken: [
     { language: "portuguese", level: "nope" },
     { language: "spanish", level: "porsupuesto" },
   ],
   password: "12345678",
 }; */

const user4 = { ...user3, name: "Monique" };
const { password: ignore, ...restOfMonique } = user4;

const aFunc = (...args) => {
  console.log(args);
};

const numbers = [1, 1000, 3000, 5];

console.log(Math.max(...numbers));

aFunc(1, 2, true, null, { name: "gosia" });
