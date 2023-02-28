import Todo from './functions/todos';
import getTodo from './functions/get-todo';
import toggleEdit from './functions/toggle-edit';

const todayDiv = () => {
  const today = document.createElement('div');
  today.className = 'today';

  let todayDate = new Date();
  const dd = String(todayDate.getDate()).padStart(2, '0');
  const mm = String(todayDate.getMonth() + 1).padStart(2, '0'); // January is 0!
  const yyyy = todayDate.getFullYear();

  todayDate = `${yyyy}-${mm}-${dd}`;

  Todo.todos.forEach((todo, i) => {
    if (todo.date === todayDate) today.appendChild(getTodo(todo, i));
  });

  document.querySelectorAll('#edit-button').forEach((btn) => btn.addEventListener('click', toggleEdit));

  return today;
};

export default todayDiv;
