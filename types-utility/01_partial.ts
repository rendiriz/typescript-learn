interface User {
  name: string;
  age: number;
  email: string;
}

function createUser(user: Partial<User>): User {
  return {
    ...user,
    name: "John Doe",
    age: 30,
    email: "john.doe@example.com",
  };
}

const newUser = createUser({ name: "Jane Doe" });

console.log(newUser);
