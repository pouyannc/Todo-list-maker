import addIcon from './icons/plus.png';
import toggleForm from './functions/toggle-form';

const headerDiv = () => {
  const header = document.createElement('div');
  header.className = 'header';

  const title = document.createElement('div');
  title.textContent = 'TO-DO';

  const addBtn = document.createElement('img');
  addBtn.id = 'add-button';
  addBtn.src = addIcon;

  header.appendChild(title);
  header.appendChild(addBtn);

  addBtn.addEventListener('click', toggleForm);

  return header;
};

export default headerDiv;
