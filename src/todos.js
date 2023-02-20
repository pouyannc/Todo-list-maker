class Todo {
  constructor(title, details, date) {
    this.title = title;
    this.details = details;
    this.date = date;
  }
}

const todos = [];

todos.push(new Todo('Study', 'javascript', 'Feb 19, 2023'));

export default todos;
