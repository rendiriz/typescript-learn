interface CatInfo {
  age: number;
  breed: string;
}

type CatName = "miffy" | "boris" | "mordred";

const cats: Record<CatName, CatInfo> = {
  miffy: { age: 10, breed: "Persian" },
  boris: { age: 5, breed: "Maine Coon" },
  mordred: { age: 16, breed: "British Shorthair" },
};

console.log(cats.miffy); // Output: { age: 10, breed: 'Persian' }
// console.log(cats.jira); // Error: Property 'jira' does not exist on type 'Record<"miffy" | "boris" | "mordred", CatInfo>'.