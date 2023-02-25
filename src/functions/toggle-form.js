const toggleForm = (e) => {
  const formContainer = document.querySelector('.form-container');
  const form = document.querySelector('.todo-form');
  const content = document.querySelector('#content');

  content.classList.toggle('blur');
  formContainer.classList.toggle('show');

  e.stopPropagation();

  if (e.target.id === 'add-button') {
    form.dataset.index = -1;
    form.reset();
  }

  if (formContainer.classList.contains('show')) {
    content.addEventListener('click', toggleForm);
  } else {
    content.removeEventListener('click', toggleForm);
  }
};

export default toggleForm;
