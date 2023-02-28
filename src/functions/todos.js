class Todo {
  constructor(title, details, project, date) {
    this.title = title;
    this.details = details;
    this.project = project;
    this.date = date;
  }

  static todos = [];

  static addTodo(title, details, project, date) {
    this.todos.push(new Todo(title, details, project, date));
  }
}

Todo.addTodo('Study', 'javascript', 'General', '2023-03-01');

export default Todo;
