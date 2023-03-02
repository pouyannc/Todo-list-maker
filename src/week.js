import Todo from './functions/todos';
import getTodo from './functions/get-todo';
import toggleEdit from './functions/toggle-edit';
import removeTodo from './functions/remove-todo';

const weekDiv = () => {
  const week = document.createElement('div');
  week.className = 'todo-container';

  const todayDate = new Date();
  let datePlusWeek = new Date(todayDate);
  datePlusWeek.setDate(todayDate.getDate() + 7);
  const dd = String(datePlusWeek.getDate()).padStart(2, '0');
  const mm = String(datePlusWeek.getMonth() + 1).padStart(2, '0'); // January is 0!
  const yyyy = datePlusWeek.getFullYear();

  datePlusWeek = `${yyyy}-${mm}-${dd}`;

  Todo.todos.forEach((todo, i) => {
    if (todo.date < datePlusWeek) week.appendChild(getTodo(todo, i));
  });

  week.querySelectorAll('#edit-button').forEach((btn) => btn.addEventListener('click', toggleEdit));
  week.querySelectorAll('#remove-button').forEach((btn) => btn.addEventListener('click', removeTodo));

  return week;
};

export default weekDiv;
