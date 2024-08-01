// Type
type Keys = "firstname" | "lastname";
type DynamicPerson = {
  [K in Keys]: string;
};

// Interface (tidak mendukung computed properties secara langsung)

const result1: DynamicPerson = {
  firstname: "John",
  lastname: "Doe",
};
