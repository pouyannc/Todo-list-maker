import getTodo from './functions/get-todo';
import removeTodo from './functions/remove-todo';
import Todo from './functions/todos';
import toggleEdit from './functions/toggle-edit';
import toggleCheck from './functions/toggle-check';

const homeDiv = () => {
  const home = document.createElement('div');
  home.className = 'todo-container';

  Todo.todos.forEach((todo, i) => {
    home.appendChild(getTodo(todo, i));
  });

  home.querySelectorAll('#checkbox').forEach((btn) => btn.addEventListener('click', toggleCheck));
  home.querySelectorAll('#edit-button').forEach((btn) => btn.addEventListener('click', toggleEdit));
  home.querySelectorAll('#remove-button').forEach((btn) => btn.addEventListener('click', removeTodo));

  return home;
};

export default homeDiv;
