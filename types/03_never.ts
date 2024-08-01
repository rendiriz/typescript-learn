// =============================================================================
// 1. Fungsi yang selalu melempar error
function throwError(message: string): never {
  throw new Error(message);
}

// =============================================================================
// 2. Fungsi dengan loop tak terbatas
function infiniteLoop(): never {
  while (true) {
    // Kode yang akan dijalankan terus-menerus
  }
}

// =============================================================================
// 3. Exhaustive checking dalam switch statement
type Shape = "circle" | "square" | "triangle";

function getArea(shape: Shape): number {
  switch (shape) {
    case "circle":
      return Math.PI * Math.pow(5, 2);
    case "square":
      return 10 * 10;
    case "triangle":
      return (10 * 5) / 2;
    default: {
      const exhaustiveCheck: never = shape;
      return exhaustiveCheck;
    }
  }
}

// =============================================================================
// 4. Menyatakan bahwa suatu kondisi tidak mungkin terjadi
function assertNever(x: never): never {
  throw new Error("Unexpected object: " + x);
}
