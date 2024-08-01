// =============================================================================
// 1. Fungsi dasar dengan tipe parameter dan return
function add(a: number, b: number): number {
  return a + b;
}

// =============================================================================
// 2. Arrow function dengan tipe
const multiply = (a: number, b: number): number => a * b;

// =============================================================================
// 3. Fungsi dengan parameter opsional
function greet(name: string, greeting?: string): string {
  return greeting ? `${greeting}, ${name}!` : `Hello, ${name}!`;
}

// =============================================================================
// 4. Fungsi dengan parameter default
function createUser(
  name: string,
  age: number = 18
): { name: string; age: number } {
  return { name, age };
}

// =============================================================================
// 5. Fungsi dengan rest parameters
function sum(...numbers: number[]): number {
  return numbers.reduce((acc, curr) => acc + curr, 0);
}

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

// =============================================================================
// 7. Function dengan callback
function fetchData(callback: (data: string) => void): void {
  // Simulasi fetch
  setTimeout(() => callback("Data fetched"), 1000);
}

// =============================================================================
// 8. Fungsi sebagai parameter
function executeOperation(
  x: number,
  y: number,
  operation: (a: number, b: number) => number
): number {
  return operation(x, y);
}

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

// =============================================================================
// 11. Fungsi yang mengembalikan fungsi
function createMultiplier(factor: number): (x: number) => number {
  return (x) => x * factor;
}

// =============================================================================
// 12. Async function typing
async function fetchUserData(id: number): Promise<User> {
  // Implementasi
  return { name: "Bob", greet() {} };
}

// =============================================================================
// 13. Function dengan union types
function formatValue(value: string | number): string {
  if (typeof value === "string") {
    return value.toUpperCase();
  } else {
    return value.toFixed(2);
  }
}
