import toggleProjectForm from './toggle-project';
import itemsDiv from '../todos-display';

const projects = [];

if ('projects' in localStorage) {
  projects.push(...JSON.parse(localStorage.getItem('projects')));
}

const renderProjectList = (idx = 'all') => {
  const panelTop = document.querySelector('.nav-panel').firstChild;
  if (idx === 'all') {
    projects.forEach((projectName) => {
      const newProject = document.createElement('div');
      newProject.textContent = projectName;
      newProject.id = newProject.textContent;
      panelTop.appendChild(newProject);

      const todoFormProjects = document.querySelector('#projects-field');
      todoFormProjects.appendChild(Object.assign(document.createElement('option'), { value: projectName, textContent: projectName }));

      const main = document.querySelector('.page-main');
      newProject.addEventListener('click', () => { main.replaceChild(itemsDiv(projectName), main.lastChild); });
    });
  } else {
    const projectName = projects[idx];

    const newProject = document.createElement('div');
    newProject.textContent = projectName;
    newProject.id = newProject.textContent;
    panelTop.appendChild(newProject);

    const todoFormProjects = document.querySelector('#projects-field');
    todoFormProjects.appendChild(Object.assign(document.createElement('option'), { value: projectName, textContent: projectName }));

    const main = document.querySelector('.page-main');
    newProject.addEventListener('click', () => { main.replaceChild(itemsDiv(projectName), main.lastChild); });
  }
};

const submitProject = (e) => {
  e.preventDefault();

  const content = document.querySelector('#content');
  const projectForm = e.target.parentNode;

  const nameField = document.querySelector('#project-title-field');
  const projectName = nameField.value;

  projects.push(projectName);

  localStorage.setItem('projects', JSON.stringify(projects)); // save projects to local storage

  renderProjectList(projects.length - 1);

  e.target.reset();
  content.classList.toggle('blur');
  projectForm.classList.toggle('show');
  content.removeEventListener('click', toggleProjectForm);
};

export { submitProject, renderProjectList, projects };
