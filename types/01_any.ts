// =============================================================================
// 1. Migrasi bertahap dari JavaScript ke TypeScript
function getLegacyJavaScriptValue(): any {}
let legacyCode: any = getLegacyJavaScriptValue();

// =============================================================================
// 2. Interaksi dengan API atau library eksternal yang tidak memiliki definisi tipe
function doSomething(): any {}
const externalLibraryResult: any = doSomething();

// =============================================================================
// 3. Menyimpan nilai dengan tipe yang beragam
let mixedData: any[] = [1, "string", true, { key: "value" }];

// =============================================================================
// 4. Ketika tipe data tidak diketahui saat penulisan kode
function processUnknownData(data: any) {
  console.log(data);
}

// =============================================================================
// 5. Overriding tipe untuk kasus khusus
let strictlyTyped: string = "hello";
(strictlyTyped as any) = 42; // Mengabaikan pengecekan tipe

// =============================================================================
// 6. Implementasi fungsi yang sangat generik
function genericFunction(arg: any): any {
  return arg;
}
