// =============================================================================
// 1. Fungsi dasar dengan tipe parameter dan return
function add(a: number, b: number): number {
  return a + b;
}

console.log(add(1, 2)); // Output: 3
// console.log(add(1, "string")); // Error: Argument of type 'string' is not assignable to parameter of type 'number'.

// =============================================================================
// 2. Arrow function dengan tipe
const multiply = (a: number, b: number): number => a * b;

console.log(multiply(2, 2)); // Output: 4
// console.log(multiply(2, "string")); // Error: Argument of type 'string' is not assignable to parameter of type 'number'.

// =============================================================================
// 3. Fungsi dengan parameter opsional
function greet(name: string, greeting?: string): string {
  return greeting ? `${greeting}, ${name}!` : `Hello, ${name}!`;
}

console.log(greet("John", "Holla")); // Output: Holla, John!
console.log(greet("John")); // Output: Hello, John!

// =============================================================================
// 4. Fungsi dengan parameter default
function createUser(
  name: string,
  age: number = 18
): { name: string; age: number } {
  return { name, age };
}

console.log(createUser("John", 20)); // Output: { name: 'John', age: 20 }
console.log(createUser("John")); // Output: { name: 'John', age: 18 }

// =============================================================================
// 5. Fungsi dengan rest parameters
function sum(...numbers: number[]): number {
  return numbers.reduce((acc, curr) => acc + curr, 0);
}

console.log(sum(1, 2, 3, 4)); // Output: 10

// =============================================================================
// 6. Function overloading
function processInput(input: string): string;
function processInput(input: number): number;
function processInput(input: string | number): string | number {
  if (typeof input === "string") {
    return input.toUpperCase();
  } else {
    return input * 2;
  }
}

console.log(processInput("hello")); // Output: HELLO
console.log(processInput(5)); // Output: 10

// =============================================================================
// 7. Function dengan callback
function fetchData(callback: (data: string) => void): void {
  // Simulasi fetch
  setTimeout(() => callback("Data fetched"), 1000);
}

fetchData((data) => console.log(data)); // Output: Data fetched

// =============================================================================
// 8. Fungsi sebagai parameter
function executeOperation(
  x: number,
  y: number,
  operation: (a: number, b: number) => number
): number {
  return operation(x, y);
}

const result1 = executeOperation(5, 3, (a, b) => a + b);
console.log(result1); // Output: 8

const result2 = executeOperation(5, 3, (a, b) => a - b);
console.log(result2); // Output: 2

// =============================================================================
// 9. Object method typing
interface Calculator {
  add: (a: number, b: number) => number;
  subtract: (a: number, b: number) => number;
}

const calculator: Calculator = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
};

console.log(calculator.add(5, 3)); // Output: 8
console.log(calculator.subtract(5, 3)); // Output: 2

// =============================================================================
// 10. Typing this dalam fungsi
interface User {
  name: string;
  greet(this: User): void;
}

const user: User = {
  name: "Alice",
  greet() {
    console.log(`Hello, I'm ${this.name}`);
  },
};

user.greet(); // Output: Hello, I'm Alice

// =============================================================================
// 11. Fungsi yang mengembalikan fungsi
function createMultiplier(factor: number): (x: number) => number {
  return (x) => x * factor;
}

const double = createMultiplier(2);
console.log(double(5)); // Output: 10

// =============================================================================
// 12. Async function typing
async function fetchUserData(id: number): Promise<User> {
  // Implementasi
  return { name: "Bob", greet() {} };
}

fetchUserData(1).then((user) => console.log(user.name)); // Output: Bob

// =============================================================================
// 13. Function dengan union types
function formatValue(value: string | number): string {
  if (typeof value === "string") {
    return value.toUpperCase();
  } else {
    return value.toFixed(2);
  }
}

console.log(formatValue("123")); // Output: 123
console.log(formatValue(123.456)); // Output: 123.46