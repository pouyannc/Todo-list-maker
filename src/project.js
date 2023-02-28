import getTodo from './functions/get-todo';
import Todo from './functions/todos';
import toggleEdit from './functions/toggle-edit';

const projectDiv = (projectName) => {
  const project = document.createElement('div');
  project.className = projectName;

  Todo.todos.forEach((todo, i) => {
    if (todo.project === projectName) project.appendChild(getTodo(todo, i));
  });

  project.querySelectorAll('#edit-button').forEach((btn) => btn.addEventListener('click', toggleEdit));

  return project;
};

export default projectDiv;
