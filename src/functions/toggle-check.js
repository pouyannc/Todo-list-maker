import renderTab from './render-tab';
import Todo from './todos';

const toggleCheck = (e) => {
  const todoTile = e.target.parentNode;
  const currentTodo = Todo.todos[todoTile.id];

  if (currentTodo.checked) {
    currentTodo.checked = false;
  } else {
    currentTodo.checked = true;
  }

  localStorage.setItem('todos', JSON.stringify(Todo.todos)); // adding to localstorage

  renderTab();
};

export default toggleCheck;
