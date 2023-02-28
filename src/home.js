import getTodo from './functions/get-todo';
import Todo from './functions/todos';
import toggleEdit from './functions/toggle-edit';

const homeDiv = () => {
  const home = document.createElement('div');
  home.className = 'home';

  Todo.todos.forEach((todo, i) => {
    home.appendChild(getTodo(todo, i));
  });

  home.querySelectorAll('#edit-button').forEach((btn) => btn.addEventListener('click', toggleEdit));

  return home;
};

export default homeDiv;
