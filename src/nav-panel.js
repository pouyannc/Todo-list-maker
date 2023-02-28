import toggleProjectForm from './functions/toggle-project';

const panelDiv = () => {
  const panel = document.createElement('div');
  panel.className = 'nav-panel';

  const homeBtn = document.createElement('div');
  homeBtn.textContent = 'All';
  const todayBtn = document.createElement('div');
  todayBtn.textContent = 'Today';
  const weekBtn = document.createElement('div');
  weekBtn.textContent = 'This Week';

  const projectsLabel = document.createElement('div');
  projectsLabel.textContent = 'General';

  const panelBottom = document.createElement('div');
  const projectsAdd = document.createElement('div');
  projectsAdd.textContent = 'Add Project Category';
  panelBottom.appendChild(projectsAdd);

  const panelTop = document.createElement('div');
  panelTop.appendChild(homeBtn);
  panelTop.appendChild(todayBtn);
  panelTop.appendChild(weekBtn);
  panelTop.appendChild(projectsLabel);

  panel.appendChild(panelTop);
  panel.appendChild(panelBottom);

  projectsAdd.addEventListener('click', toggleProjectForm);

  return panel;
};

export default panelDiv;
