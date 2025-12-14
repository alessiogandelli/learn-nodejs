// ===== VARIABLES =====
// Three ways to declare variables
let name = "John";           // can be reassigned
const age = 25;              // cannot be reassigned
var city = "New York";       // !! old way, avoid using

// ===== DATA TYPES =====
const string = "Hello";
const number = 42;
const boolean = true;
const array = [1, 2, 3, 4, 5];
const object = { firstName: "Jane", lastName: "Doe" };
const nullValue = null;
const undefinedValue = undefined;

// ===== FUNCTIONS =====
// Function declaration
function greet(name) {
    return `Hello, ${name}!`;
}

// Arrow function
const add = (a, b) => a + b;

// ===== CONDITIONALS =====
const score = 85;

if (score >= 90) {
    console.log("A grade");
} else if (score >= 80) {
    console.log("B grade");
} else {
    console.log("C grade or below");
}

// ===== LOOPS =====
// For loop
for (let i = 0; i < 5; i++) {
    console.log(`Count: ${i}`);
}

// For...of loop (arrays)
const fruits = ["apple", "banana", "orange"];
for (const fruit of fruits) {
    console.log(fruit);
}

// ===== ARRAY METHODS =====
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(num => num * 2);
const evens = numbers.filter(num => num % 2 === 0);
const sum = numbers.reduce((acc, num) => acc + num, 0);

// ===== OBJECTS =====
const person = {
    name: "Alice",
    age: 30,
    greet() {
        console.log(`Hi, I'm ${this.name}`);
    }
};

// ===== EXAMPLE: PUT IT ALL TOGETHER =====
function main() {
    console.log(greet("World"));
    console.log(`2 + 3 = ${add(2, 3)}`);
    person.greet();
    console.log("Doubled numbers:", doubled);
}

main();