import './style.css';
import headerDiv from './header';
import panelDiv from './nav-panel';
import itemsDiv from './todos-display';
import renderTab from './functions/render-tab';
import { formDiv, projectFormDiv } from './form';
import submitForm from './functions/submit-form';
import submitProject from './functions/submit-project';

const content = document.getElementById('content');
content.appendChild(headerDiv());

const main = document.createElement('div');
main.className = 'page-main';

const navPanel = panelDiv();

main.appendChild(navPanel);
main.appendChild(itemsDiv('all'));

content.appendChild(main);

document.querySelector('#all').style.fontWeight = '900';

const form = formDiv();
document.body.appendChild(form);
const projectForm = projectFormDiv();
document.body.appendChild(projectForm);

navPanel.firstChild.childNodes[0].addEventListener('click', () => { renderTab('all'); });
navPanel.firstChild.childNodes[1].addEventListener('click', () => { renderTab('today'); });
navPanel.firstChild.childNodes[2].addEventListener('click', () => { renderTab('week'); });
navPanel.firstChild.childNodes[3].addEventListener('click', () => { renderTab('General'); });

form.addEventListener('submit', submitForm);
projectForm.addEventListener('submit', submitProject);
