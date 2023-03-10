import Todo from './todos';
import getTodo from './get-todo';
import toggleForm from './toggle-form';
import renderTab from './render-tab';

const submitForm = (e) => {
  e.preventDefault();

  const main = document.querySelector('.page-main');
  const content = document.querySelector('#content');
  const form = document.querySelector('.form-container');

  if (e.target.dataset.index === '-1') {
    // Create a new todo item.

    Todo.addTodo(e.target[0].value, e.target[1].value, e.target[2].value, e.target[3].value);

    main.lastChild.appendChild(getTodo(Todo.todos.at(-1), Todo.todos.length - 1));
  } else {
    // Edit an existing todo item with index stored in e.target.id

    const todoIndex = parseInt(e.target.dataset.index, 10);

    const currentTodo = Todo.todos[todoIndex];
    currentTodo.title = e.target[0].value;
    currentTodo.details = e.target[1].value;
    currentTodo.project = e.target[2].value;
    currentTodo.date = e.target[3].value;

    const currentTodoTile = document.getElementById(e.target.dataset.index);
    main.lastChild.replaceChild(getTodo(currentTodo, todoIndex), currentTodoTile);

    e.target.dataset.index = -1;
  }

  localStorage.setItem('todos', JSON.stringify(Todo.todos)); // adding to localstorage

  e.target.reset();
  content.classList.toggle('blur');
  form.classList.toggle('show');
  content.removeEventListener('click', toggleForm);

  renderTab();
};

export default submitForm;
