import './style.css';
import headerDiv from './header';
import panelDiv from './nav-panel';
import homeDiv from './home';
import todayDiv from './today';
import weekDiv from './week';
import projectDiv from './project';
import { formDiv, projectFormDiv } from './form';
import submitForm from './functions/submit-form';
import submitProject from './functions/submit-project';

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
const projectForm = projectFormDiv();
document.body.appendChild(projectForm);

navPanel.firstChild.childNodes[0].addEventListener('click', () => { main.replaceChild(homeDiv(), main.lastChild); });
navPanel.firstChild.childNodes[1].addEventListener('click', () => { main.replaceChild(todayDiv(), main.lastChild); });
navPanel.firstChild.childNodes[2].addEventListener('click', () => { main.replaceChild(weekDiv(), main.lastChild); });
navPanel.firstChild.childNodes[3].addEventListener('click', () => { main.replaceChild(projectDiv('General'), main.lastChild); });

form.addEventListener('submit', submitForm);
projectForm.addEventListener('submit', submitProject);
