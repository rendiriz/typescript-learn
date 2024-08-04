interface User {
  name: string;
  age: number;
  email: string;
}

function createUser(user: Partial<User>): User {
  return {
    name: "John Doe",
    age: 30,
    email: "john.doe@example.com",
    ...user,
  };
}

const newUser = createUser({ name: "Jane Doe" });

console.log(newUser); // Output: { name: 'Jane Doe', age: 30, email: 'john.doe@example.com' }
