const panelDiv = () => {
  const panel = document.createElement('div');
  panel.className = 'nav-panel';

  const homeBtn = document.createElement('div');
  homeBtn.textContent = 'Home';
  const todayBtn = document.createElement('div');
  todayBtn.textContent = 'Today';
  const weekBtn = document.createElement('div');
  weekBtn.textContent = 'Week';

  panel.appendChild(homeBtn);
  panel.appendChild(todayBtn);
  panel.appendChild(weekBtn);

  return panel;
};

export default panelDiv;
