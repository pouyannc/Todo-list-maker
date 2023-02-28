const formDiv = () => {
  const formContainer = document.createElement('div');
  formContainer.className = 'form-container';

  const form = document.createElement('form');
  form.className = 'todo-form';
  form.dataset.index = -1;
  form.action = '/';
  form.method = 'post';

  form.appendChild(Object.assign(document.createElement('label'), { for: 'title', textContent: 'Title:' }));
  form.appendChild(Object.assign(document.createElement('input'), {
    type: 'text', name: 'title:', id: 'title-field', required: true,
  }));

  form.appendChild(Object.assign(document.createElement('label'), { for: 'details', textContent: 'Details:' }));
  form.appendChild(Object.assign(document.createElement('textarea'), {
    cols: 40, rows: 5, name: 'details:', id: 'details-field',
  }));

  form.appendChild(Object.assign(document.createElement('label'), { for: 'project', textContent: 'Project:' }));
  form.appendChild(Object.assign(document.createElement('select'), {
    name: 'projects:', id: 'projects-field',
  }))
    .appendChild(Object.assign(document.createElement('option'), { value: 'General', textContent: 'General' }));

  form.appendChild(Object.assign(document.createElement('label'), { for: 'date', textContent: 'Date:' }));
  form.appendChild(Object.assign(document.createElement('input'), {
    type: 'date', name: 'date:', id: 'date-field', required: true,
  }));

  form.appendChild(Object.assign(document.createElement('button'), { type: 'submit', id: 'submit-btn:', textContent: 'Done' }));

  formContainer.appendChild(form);

  return formContainer;
};

const projectFormDiv = () => {
  const formContainer = document.createElement('div');
  formContainer.className = 'project-form-container';

  const form = document.createElement('form');
  form.className = 'project-form';
  form.action = '/';
  form.method = 'post';

  form.appendChild(Object.assign(document.createElement('label'), { for: 'title', textContent: 'Title:' }));
  form.appendChild(Object.assign(document.createElement('input'), {
    type: 'text', name: 'title:', id: 'project-title-field', required: true,
  }));

  form.appendChild(Object.assign(document.createElement('button'), { type: 'submit', id: 'submit-btn:', textContent: 'Done' }));

  formContainer.appendChild(form);

  return formContainer;
};

export { formDiv, projectFormDiv };
