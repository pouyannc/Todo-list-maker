import getTodo from './functions/get-todo';
import Todo from './functions/todos';
import toggleEdit from './functions/toggle-edit';
import removeTodo from './functions/remove-todo';

const projectDiv = (projectName) => {
  const project = document.createElement('div');
  project.className = 'todo-container';

  Todo.todos.forEach((todo, i) => {
    if (todo.project === projectName) project.appendChild(getTodo(todo, i));
  });

  project.querySelectorAll('#edit-button').forEach((btn) => btn.addEventListener('click', toggleEdit));
  project.querySelectorAll('#remove-button').forEach((btn) => btn.addEventListener('click', removeTodo));

  if (project.children.length === 0) {
    const navTop = document.querySelector('.panel-top');
    project.appendChild(Object.assign(document.createElement('div'), { id: 'empty-project', textContent: 'No items left... Click here to delete project.' }))
      .addEventListener('click', () => { navTop.removeChild(document.querySelector(`#${projectName}`)); });
  }

  return project;
};

export default projectDiv;
