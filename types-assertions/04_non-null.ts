// =============================================================================
// 1. Mengakses elemen DOM
const element = document.getElementById("myElement")!;
element.innerHTML = "Hello, World!";

// =============================================================================
// 2. Mengakses properti objek yang mungkin undefined
interface User {
  name?: string;
}
function printUserName(user: User) {
  console.log(user.name!.toUpperCase());
}

// =============================================================================
// 3. Mengakses item array yang mungkin undefined
const numbers = [1, 2, 3, 4, 5];
const lastNumber = numbers.pop()!;
console.log(lastNumber * 2);

// =============================================================================
// 4. Menggunakan hasil dari fungsi yang mungkin return undefined
function findUser(id: number): User | undefined {
  // implementasi
  return undefined;
}
const user = findUser(1)!;
console.log(user.name);
