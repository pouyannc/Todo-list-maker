import './style.css';
import headerDiv from './header';
import panelDiv from './nav-panel';
import homeDiv from './home';
import formDiv from './form';

const content = document.getElementById('content');

content.appendChild(headerDiv());

const body = document.createElement('div');
body.className = 'page-body';
body.appendChild(panelDiv());
body.appendChild(homeDiv());

content.appendChild(body);

const form = formDiv();
content.appendChild(form);

export default form;
