import getTodo from './functions/get-todo';
import Todo from './functions/todos';

const homeDiv = () => {
  const home = document.createElement('div');
  home.className = 'home';

  Todo.todos.forEach((todo, i) => {
    home.appendChild(getTodo(todo, i));
  });

  return home;
};

export default homeDiv;
