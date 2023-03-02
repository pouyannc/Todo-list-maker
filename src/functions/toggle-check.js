import Todo from './todos';

const toggleCheck = (e) => {
  const todoTile = e.target.parentNode;
  const currentTodo = Todo.todos[todoTile.id];

  if (currentTodo.checked) {
    currentTodo.checked = false;
  } else {
    currentTodo.checked = true;
  }
};

export default toggleCheck;
