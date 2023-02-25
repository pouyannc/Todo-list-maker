import removeIcon from '../icons/remove.png';
import editIcon from '../icons/edit.png';
import Todo from './todos';

const getTodo = (todo, i) => {
  const todoTile = Object.assign(document.createElement('div'), { className: 'todo', id: i });

  const todoObj = Todo.todos[i];

  todoTile.appendChild((Object.assign(document.createElement('input'), { type: 'checkbox' })));
  todoTile.appendChild((Object.assign(document.createElement('div'), { textContent: todoObj.title })));
  todoTile.appendChild(Object.assign(document.createElement('div'), { textContent: todoObj.date }));
  todoTile.appendChild(Object.assign(document.createElement('div'), { textContent: 'Details' }));
  todoTile.appendChild(Object.assign(document.createElement('img'), { src: editIcon, id: 'edit-button' }));
  todoTile.appendChild(Object.assign(document.createElement('img'), { src: removeIcon, id: 'remove-button' }));

  return todoTile;
};

export default getTodo;
