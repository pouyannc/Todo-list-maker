import toggleForm from './toggle-form';
import Todo from './todos';

const toggleEdit = (e) => {
  const currentTodo = Todo.todos[e.target.parentNode.id];

  const form = document.querySelector('.todo-form');
  const titleField = document.querySelector('#title-field');
  const detailsField = document.querySelector('#details-field');
  const projectField = document.querySelector('#projects-field');
  const dateField = document.querySelector('#date-field');

  form.dataset.index = e.target.parentNode.id;
  titleField.value = currentTodo.title;
  detailsField.value = currentTodo.details;
  projectField.value = currentTodo.project;
  dateField.value = currentTodo.date;

  toggleForm(e);
};

export default toggleEdit;
