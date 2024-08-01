// =============================================================================
// 1. Menerima input yang tidak diketahui tipenya
function processUserInput(input: unknown) {
  if (typeof input === "string") {
    console.log(input.toUpperCase());
  } else if (typeof input === "number") {
    console.log(input.toFixed(2));
  } else {
    console.log("Input tidak dikenali");
  }
}

// =============================================================================
// 2. Menangani respons API yang tidak terdefinisi dengan baik
async function fetchData(): Promise<unknown> {
  const response = await fetch("https://api.example.com/data");
  return response.json();
}

// =============================================================================
// 3. Fungsi yang dapat menerima berbagai tipe argumen
function safelyAccessProperty(obj: unknown, key: string) {
  if (obj && typeof obj === "object" && key in obj) {
    return (obj as Record<string, unknown>)[key];
  }
  return undefined;
}

// =============================================================================
// 4. Menyimpan data yang tipenya akan diperiksa nanti
let userInput: unknown;
userInput = "Hello, World!";

if (typeof userInput === "string") {
  console.log(userInput.length);
}

// =============================================================================
// 5. Sebagai tipe kembalian untuk fungsi yang dapat mengembalikan berbagai tipe
function getConfigValue(key: string): unknown {
  // Implementasi
  // return "string";
  return 1;
}

const value = getConfigValue("apiKey");
if (typeof value === "string") {
  console.log(value.toUpperCase());
}
