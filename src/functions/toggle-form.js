const toggleForm = (e) => {
  const form = document.querySelector('.form-container');
  const content = document.querySelector('#content');

  content.classList.toggle('blur');
  form.classList.toggle('show');

  e.stopPropagation();

  if (form.classList.contains('show')) {
    content.addEventListener('click', toggleForm);
  } else {
    content.removeEventListener('click', toggleForm);
  }
};

export default toggleForm;
