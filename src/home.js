import removeIcon from './icons/remove.png';
import editIcon from './icons/edit.png';
import Todo from './functions/todos';

const homeDiv = () => {
  const home = document.createElement('div');
  home.className = 'home';

  Todo.todos.forEach((todo, i) => {
    const todoDiv = home.appendChild(Object.assign(document.createElement('div'), { id: i, className: 'todo' }));

    todoDiv.appendChild((Object.assign(document.createElement('input'), { type: 'checkbox' })));
    todoDiv.appendChild((Object.assign(document.createElement('div'), { textContent: todo.title })));
    todoDiv.appendChild(Object.assign(document.createElement('div'), { textContent: todo.date }));
    todoDiv.appendChild(Object.assign(document.createElement('img'), { src: editIcon }));
    todoDiv.appendChild(Object.assign(document.createElement('img'), { src: removeIcon }));
  });

  return home;
};

export default homeDiv;
