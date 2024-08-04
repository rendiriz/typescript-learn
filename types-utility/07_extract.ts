type T0 = Extract<"a" | "b" | "c", "a" | "f">;

type CatName = "miffy" | "boris" | "mor";
type CatNameTest = Extract<CatName, "mor">;