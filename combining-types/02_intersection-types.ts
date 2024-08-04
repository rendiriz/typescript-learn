type A = { a: number };
type B = { b: string };
type C = A & B;

let obj: C = { a: 1, b: "hello" };

// =============================================================================
interface Colorful {
    color: string;
}

interface Circle {
    radius: number;
}

type ColorfulCircle = Colorful & Circle;

let cc: ColorfulCircle = {
    color: "red",
    radius: 42
};
