// ===== VARIABLES =====
// Three ways to declare variables
let name: string = "John";           // can be reassigned
const age: number = 25;              // cannot be reassigned
var city: string = "New York";       // !! old way, avoid using

// ===== DATA TYPES =====
const string: string = "Hello";
const number: number = 42;
const boolean: boolean = true;
const array: number[] = [1, 2, 3, 4, 5];
const object: { firstName: string; lastName: string } = { firstName: "Jane", lastName: "Doe" };
const nullValue: null = null;
const undefinedValue: undefined = undefined;

// ===== FUNCTIONS =====
// Function declaration
function greet(name: string): string {
    return `Hello, ${name}!`;
}

// Arrow function
const add = (a: number, b: number): number => a + b;

// ===== CONDITIONALS =====
const score: number = 85;

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
const fruits: string[] = ["apple", "banana", "orange"];
for (const fruit of fruits) {
    console.log(fruit);
}

// ===== ARRAY METHODS =====
const numbers: number[] = [1, 2, 3, 4, 5];
const doubled: number[] = numbers.map(num => num * 2);
const evens: number[] = numbers.filter(num => num % 2 === 0);
const sum: number = numbers.reduce((acc, num) => acc + num, 0);

// ===== OBJECTS =====
const person: { name: string; age: number; greet: () => void } = {
    name: "Alice",
    age: 30,
    greet() {
        console.log(`Hi, I'm ${this.name}`);
    }
};


// ===== CLASSES =====
class Animal {
    name: string;
    
    constructor(name: string) {
        this.name = name;
    }
    speak(): void {
        console.log(`${this.name} makes a noise.`);
    }
}

class Dog extends Animal {
    constructor(name: string) {
        super(name);
    }
    speak(): void {
        console.log(`${this.name} barks.`);
    }
}

const dog = new Dog("Rex");
dog.speak(); // Rex barks.

const animal = new Animal("Generic Animal");
animal.speak(); // Generic Animal makes a noise.





// ===== EXAMPLE: PUT IT ALL TOGETHER =====
function main(): void {
    console.log(greet("World"));
    console.log(`2 + 3 = ${add(2, 3)}`);
    person.greet();
    console.log("Doubled numbers:", doubled);
}




main();


