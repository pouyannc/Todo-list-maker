import Todo from './todos';
import getTodo from './get-todo';
import toggleForm from './toggle-form';
import toggleEdit from './toggle-edit';

const submitForm = (e) => {
  e.preventDefault();

  const home = document.querySelector('.home');
  const content = document.querySelector('#content');
  const form = document.querySelector('.form-container');

  if (e.target.dataset.index === '-1') {
    // Create a new todo item.

    Todo.addTodo(e.target[0].value, e.target[1].value, e.target[2].value);

    home.appendChild(getTodo());
  } else {
    // Edit an existing todo item with index stored in e.target.id

    const todoIndex = parseInt(e.target.dataset.index, 10);

    const currentTodo = Todo.todos[todoIndex];
    currentTodo.title = e.target[0].value;
    currentTodo.details = e.target[1].value;
    currentTodo.date = e.target[2].value;

    const currentTodoTile = document.getElementById(e.target.dataset.index);
    home.replaceChild(getTodo(e), currentTodoTile);

    e.target.id = -1;
  }

  e.target.reset();
  content.classList.toggle('blur');
  form.classList.toggle('show');
  content.removeEventListener('click', toggleForm);

  document.querySelectorAll('#edit-button').forEach((btn) => btn.addEventListener('click', toggleEdit));
};

export default submitForm;
