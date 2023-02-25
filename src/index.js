import './style.css';
import headerDiv from './header';
import panelDiv from './nav-panel';
import homeDiv from './home';
import formDiv from './form';
import submitForm from './functions/submit-form';

const content = document.getElementById('content');

content.appendChild(headerDiv());

const main = document.createElement('div');
main.className = 'page-main';
main.appendChild(panelDiv());

const home = homeDiv();
main.appendChild(home);

content.appendChild(main);

const form = formDiv();
document.body.appendChild(form);

form.addEventListener('submit', submitForm);
