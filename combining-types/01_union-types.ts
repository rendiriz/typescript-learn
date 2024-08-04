let result: number | string;
result = 10;        // Valid
result = "hello";   // Valid
// result = true;      // Error: Type 'boolean' is not assignable to type 'number | string'

// =============================================================================
type Alignment = "left" | "right" | "center";
let textAlign: Alignment = "left";  // Valid
// textAlign = "top";  // Error: Type '"top"' is not assignable to type 'Alignment'

