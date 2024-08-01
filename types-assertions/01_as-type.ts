// =============================================================================
// 1. Menegaskan tipe ketika TypeScript tidak dapat menginfernya dengan benar
let someValue: unknown = "Hello, TypeScript";
let strLength: number = (someValue as string).length;

// =============================================================================
// 2. Mengubah tipe dalam hierarchi kelas
class Animal {}
class Dog extends Animal {
  bark() {
    console.log("Woof!");
  }
}

let animal: Animal = new Dog();
(animal as Dog).bark();

// =============================================================================
// 3. Mengubah tipe objek literal
interface User {
  name: string;
  age: number;
}
const userInput = { name: "Alice", age: 30 };
const user = userInput as User;

// =============================================================================
// 4. Menegaskan tipe dalam array atau objek kompleks
const mixedArray = [1, "two", 3, "four"] as const;
const secondElement = mixedArray[1] as string;

// =============================================================================
// 5. Mengubah tipe ketika bekerja dengan DOM
const myElement = document.getElementById("myElement") as HTMLInputElement;
console.log(myElement.value);

// =============================================================================
// 6. Menegaskan tipe null atau undefined
function processNullableValue(value: string | null) {
  const definitelyString = value as string;
  console.log(definitelyString.length);
}

// =============================================================================
// 7. Mengubah tipe dalam intersection types
interface A {
  a: number;
}
interface B {
  b: string;
}
const obj: A = { a: 1 };
const combined = obj as A & B; // Perhatikan: ini tidak menambahkan properti 'b' secara runtime

// =============================================================================
// 8. Menegaskan tipe ketika menggunakan JSON.parse
const jsonString = '{"name": "John", "age": 30}';
const parsed = JSON.parse(jsonString) as { name: string; age: number };
