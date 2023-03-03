import getTodo from './functions/get-todo';
import removeTodo from './functions/remove-todo';
import Todo from './functions/todos';
import toggleEdit from './functions/toggle-edit';
import toggleCheck from './functions/toggle-check';
import renderTab from './functions/render-tab';

const itemsDiv = (tab) => {
  const display = document.createElement('div');
  display.className = 'todo-container';
  display.dataset.tab = tab;

  if (tab === 'all') {
    Todo.todos.forEach((todo, i) => {
      display.appendChild(getTodo(todo, i));
    });
  } else if (tab === 'today') {
    let todayDate = new Date();
    const dd = String(todayDate.getDate()).padStart(2, '0');
    const mm = String(todayDate.getMonth() + 1).padStart(2, '0'); // January is 0!
    const yyyy = todayDate.getFullYear();

    todayDate = `${yyyy}-${mm}-${dd}`;

    Todo.todos.forEach((todo, i) => {
      if (todo.date === todayDate) display.appendChild(getTodo(todo, i));
    });
  } else if (tab === 'week') {
    const todayDate = new Date();
    let datePlusWeek = new Date(todayDate);
    datePlusWeek.setDate(todayDate.getDate() + 7);
    const dd = String(datePlusWeek.getDate()).padStart(2, '0');
    const mm = String(datePlusWeek.getMonth() + 1).padStart(2, '0'); // January is 0!
    const yyyy = datePlusWeek.getFullYear();

    datePlusWeek = `${yyyy}-${mm}-${dd}`;

    Todo.todos.forEach((todo, i) => {
      if (todo.date < datePlusWeek) display.appendChild(getTodo(todo, i));
    });
  } else {
    Todo.todos.forEach((todo, i) => {
      if (todo.project === tab) display.appendChild(getTodo(todo, i));
    });

    if (display.children.length === 0) {
      const navTop = document.querySelector('.panel-top');
      display.appendChild(Object.assign(document.createElement('div'), { id: 'empty-project', textContent: 'No items left... Click here to delete project.' }))
        .addEventListener('click', () => {
          const formProjectField = document.querySelector('#projects-field');
          const currentProjectFieldOption = document.querySelector(`option[value="${tab}"`);
          formProjectField.removeChild(currentProjectFieldOption);
          navTop.removeChild(document.querySelector(`#${tab}`));
          renderTab('all');
        });
    }
  }

  if (document.querySelector(`#${tab}`)) {
    document.querySelectorAll('.panel-top > div').forEach((label) => { label.style.fontWeight = null; });
    document.querySelector(`#${tab}`).style.fontWeight = '900';
  }

  display.querySelectorAll('#checkbox').forEach((btn) => btn.addEventListener('click', toggleCheck));
  display.querySelectorAll('#edit-button').forEach((btn) => btn.addEventListener('click', toggleEdit));
  display.querySelectorAll('#remove-button').forEach((btn) => btn.addEventListener('click', removeTodo));

  return display;
};

export default itemsDiv;
