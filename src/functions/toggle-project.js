const toggleProjectForm = (e) => {
  const projectFormContainer = document.querySelector('.project-form-container');
  const content = document.querySelector('#content');

  content.classList.toggle('blur');
  projectFormContainer.classList.toggle('show');

  e.stopPropagation();

  if (projectFormContainer.classList.contains('show')) {
    content.addEventListener('click', toggleProjectForm);
  } else {
    content.removeEventListener('click', toggleProjectForm);
  }
};

export default toggleProjectForm;
