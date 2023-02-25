class Todo {
  constructor(title, details, date) {
    this.title = title;
    this.details = details;
    this.date = date;
  }

  static todos = [];

  static addTodo(title, details, date) {
    this.todos.push(new Todo(title, details, date));
  }
}

Todo.addTodo('Study', 'javascript', '2023-03-01');

export default Todo;
