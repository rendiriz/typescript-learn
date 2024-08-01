let value: unknown;

value = 42;
console.log(value); // Output: 42

value = "hello";
console.log(value); // Output: hello

// Tidak bisa langsung menggunakan `unknown` tanpa pemeriksaan tipe
// console.log(value.toUpperCase()); // Error: Object is of type 'unknown'

// Menggunakan pemeriksaan tipe sebelum menggunakan nilai
if (typeof value === "string") {
  console.log(value.toUpperCase());
}

value = { name: "John", age: 30 };

if (typeof value === "object" && value !== null) {
  // Menggunakan casting untuk memperjelas tipe
  const user = value as { name: string; age: number };
  console.log(user.name);
}
