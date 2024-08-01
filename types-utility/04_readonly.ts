interface Todo {
  title: string;
}

const todo: Readonly<Todo> = {
  title: "Delete inactive users",
};

// Cannot assign to 'title' because it is a read-only property.
// todo.title = "Hello";
