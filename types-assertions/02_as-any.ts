// =============================================================================
// 1. Melewati pemeriksaan tipe yang ketat
interface StrictInterface {
  prop1: string;
  prop2: number;
}

const looseObject = { prop1: "value", extraProp: true };
const strictObject: StrictInterface = looseObject as any;

// =============================================================================
// 2. Mengakses properti yang tidak didefinisikan
const obj = { x: 10 };
(obj as any).y = 20;

// =============================================================================
// 3. Memanggil metode yang tidak ada
const str = "Hello";
(str as any).customMethod();

// =============================================================================
// 4. Mengubah tipe primitif
const num = 42;
const str2 = num as any as string;

// =============================================================================
// 5. Mengatasi masalah dengan JSON.parse
const jsonString = '{"x": 10, "y": 20, "bla": []}';
const parsed = JSON.parse(jsonString) as any;
console.log(parsed.x, parsed.y, parsed.bla);

// =============================================================================
// 6. Melewati pemeriksaan tipe dalam operasi array
const arr = [1, 2, 3];
(arr as any).push("4"); // Menambahkan string ke array number

// =============================================================================
// 7. Mengubah tipe return value fungsi
function someFunction(): number {
  return "not a number" as any;
}

// =============================================================================
// 8. Mengatasi masalah dengan union types yang kompleks
type ComplexType =
  | { type: "A"; valueA: string }
  | { type: "B"; valueB: number };
const value: ComplexType = { type: "A", valueB: 42 } as any;
