import Todo from './todos';

const removeTodo = (e) => {
  const currentTodoIndex = e.target.parentNode.id;

  Todo.todos.splice(currentTodoIndex, 1);

  const currentTodoTile = document.getElementById(currentTodoIndex);
  document.querySelector('.page-main').lastChild.removeChild(currentTodoTile);
};

export default removeTodo;
