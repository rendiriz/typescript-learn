// =============================================================================
// 1. Membuat array read-only dengan tipe literal
const colors = ["red", "green", "blue"] as const;
// colors memiliki tipe: readonly ["red", "green", "blue"]

// =============================================================================
// 2. Membuat objek read-only dengan properti literal
const config = {
  apiUrl: "https://api.example.com",
  timeout: 5000,
  retries: 3,
} as const;
// Setiap properti menjadi readonly dan memiliki tipe literal
// config.apiUrl = "https"; // Error

// =============================================================================
// 3. Menggunakan dalam union types
function setTheme(theme: (typeof colors)[number]) {
  // ...
}
setTheme("red"); // OK
// setTheme("yellow"); // Error

// =============================================================================
// 4. Menggunakan dalam enum-like objects
const HttpStatus = {
  OK: 200,
  NOT_FOUND: 404,
  INTERNAL_SERVER_ERROR: 500,
} as const;

function handleStatus(status: (typeof HttpStatus)[keyof typeof HttpStatus]) {
  // ...
}

// =============================================================================
// 5. Menggunakan dalam mapped types
const rolePermissions = {
  admin: ["create", "read", "update", "delete"],
  editor: ["read", "update"],
  viewer: ["read"],
} as const;

type Roles = keyof typeof rolePermissions;
type Permissions = (typeof rolePermissions)[Roles][number];
