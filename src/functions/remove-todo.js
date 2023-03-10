import Todo from './todos';
import renderTab from './render-tab';

const removeTodo = (e) => {
  const currentTodoIndex = e.target.parentNode.id;

  Todo.todos.splice(currentTodoIndex, 1);

  localStorage.setItem('todos', JSON.stringify(Todo.todos)); // adding to localstorage

  const currentTodoTile = document.getElementById(currentTodoIndex);
  document.querySelector('.page-main').lastChild.removeChild(currentTodoTile);

  renderTab();
};

export default removeTodo;
