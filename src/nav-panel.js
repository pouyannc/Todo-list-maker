const panelDiv = () => {
  const panel = document.createElement('div');
  panel.className = 'nav-panel';

  const homeBtn = document.createElement('div');
  homeBtn.textContent = 'Home';
  const todayBtn = document.createElement('div');
  todayBtn.textContent = 'Today';
  const weekBtn = document.createElement('div');
  weekBtn.textContent = 'Week';
  const projectsBtn = document.createElement('div');
  weekBtn.textContent = 'Projects';

  panel.appendChild(homeBtn);
  panel.appendChild(todayBtn);
  panel.appendChild(weekBtn);
  panel.appendChild(projectsBtn);

  return panel;
};

export default panelDiv;
