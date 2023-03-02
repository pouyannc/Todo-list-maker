import removeIcon from '../icons/remove.png';
import editIcon from '../icons/search.png';
import Todo from './todos';

const getTodo = (todo, i) => {
  const todoTile = Object.assign(document.createElement('div'), { className: 'todo', id: i });

  const todoObj = Todo.todos[i];

  const checkbox = todoTile.appendChild((Object.assign(document.createElement('input'), { id: 'checkbox', type: 'checkbox' })));
  if (todo.checked) checkbox.checked = true;
  if (todo.checked) todoTile.classList.add('checked');

  todoTile.appendChild((Object.assign(document.createElement('div'), { textContent: todoObj.title })));
  todoTile.appendChild(Object.assign(document.createElement('div'), { textContent: new Date(todoObj.date.replace(/-/g, '/')).toDateString() }));
  todoTile.appendChild(Object.assign(document.createElement('img'), { src: editIcon, id: 'edit-button' }));
  todoTile.appendChild(Object.assign(document.createElement('img'), { src: removeIcon, id: 'remove-button' }));

  return todoTile;
};

export default getTodo;
