// Interface (bisa di-merge)
interface ICar {
  brand: string;
}
interface ICar {
  model: string;
}
// Hasil: interface Car { brand: string; model: string; }

// Type (tidak bisa di-merge)
type TCar = {
  brand: string;
};
// Error: Duplicate identifier 'Car'
// type TCar = {
//   model: string;
// };
type TCarJoined = TCar & { model: string };

const result1: ICar = { brand: "Toyota", model: "Corolla" };
const result2: TCar = { brand: "Toyota" };
const result3: TCarJoined = { brand: "Toyota", model: "Corolla" };
