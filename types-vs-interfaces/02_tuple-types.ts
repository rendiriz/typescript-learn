// Type
type Point = [number, number];

// Interface (bisa, tapi kurang alami)
interface PointInterface {
  0: number;
  1: number;
  length: 2;
}

const result1: Point = [1, 2];
const result2: PointInterface = [1, 2];
