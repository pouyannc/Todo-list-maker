import toggleProjectForm from './toggle-project';
import projectDiv from '../project';

const submitProject = (e) => {
  e.preventDefault();

  const content = document.querySelector('#content');
  const projectForm = e.target.parentNode;

  const panelTop = document.querySelector('.nav-panel').firstChild;
  const nameField = document.querySelector('#project-title-field');
  const projectName = nameField.value;

  const newProject = document.createElement('div');
  newProject.textContent = projectName;
  newProject.id = newProject.textContent;
  panelTop.appendChild(newProject);

  const todoFormProjects = document.querySelector('#projects-field');
  todoFormProjects.appendChild(Object.assign(document.createElement('option'), { value: projectName, textContent: projectName }));

  const main = document.querySelector('.page-main');
  newProject.addEventListener('click', () => { main.replaceChild(projectDiv(projectName), main.lastChild); });

  e.target.reset();
  content.classList.toggle('blur');
  projectForm.classList.toggle('show');
  content.removeEventListener('click', toggleProjectForm);
};

export default submitProject;
