import { projects } from './functions/submit-project';
import toggleProjectForm from './functions/toggle-project';

const panelDiv = () => {
  const panel = document.createElement('div');
  panel.className = 'nav-panel';

  const homeBtn = document.createElement('div');
  homeBtn.textContent = 'All';
  homeBtn.id = 'all';
  const todayBtn = document.createElement('div');
  todayBtn.textContent = 'Today';
  todayBtn.id = 'today';
  const weekBtn = document.createElement('div');
  weekBtn.textContent = 'This Week';
  weekBtn.id = 'week';

  if (projects === []) projects.push('General');

  const panelBottom = document.createElement('div');
  panelBottom.className = 'panel-bottom';
  const projectsAdd = document.createElement('div');
  projectsAdd.textContent = 'Add Project Category';
  panelBottom.appendChild(projectsAdd);

  const panelTop = document.createElement('div');
  panelTop.className = 'panel-top';
  panelTop.appendChild(homeBtn);
  panelTop.appendChild(todayBtn);
  panelTop.appendChild(weekBtn);

  panel.appendChild(panelTop);
  panel.appendChild(panelBottom);

  projectsAdd.addEventListener('click', toggleProjectForm);

  return panel;
};

export default panelDiv;
