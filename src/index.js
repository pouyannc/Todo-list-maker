import './style.css';
import headerDiv from './header';
import panelDiv from './nav-panel';
import homeDiv from './home';
import todayDiv from './today';
import formDiv from './form';
import submitForm from './functions/submit-form';
import toggleEdit from './functions/toggle-edit';

const content = document.getElementById('content');

content.appendChild(headerDiv());

const main = document.createElement('div');
main.className = 'page-main';

const navPanel = panelDiv();
main.appendChild(navPanel);

main.appendChild(homeDiv());
content.appendChild(main);

const form = formDiv();
document.body.appendChild(form);

navPanel.childNodes[0].addEventListener('click', () => { main.replaceChild(homeDiv(), main.lastChild); });
navPanel.childNodes[1].addEventListener('click', () => { main.replaceChild(todayDiv(), main.lastChild); });

form.addEventListener('submit', submitForm);

document.querySelectorAll('#edit-button').forEach((btn) => btn.addEventListener('click', toggleEdit));
