const formDiv = () => {
  const formContainer = document.createElement('div');
  formContainer.className = 'form-container';

  const form = document.createElement('form');
  form.className = 'todo-form';
  form.action = '/';
  form.method = 'post';

  form.appendChild(Object.assign(document.createElement('label'), { for: 'title', textContent: 'Title:' }));
  form.appendChild(Object.assign(document.createElement('input'), { type: 'text', name: 'title:', required: true }));

  form.appendChild(Object.assign(document.createElement('label'), { for: 'details', textContent: 'Details:' }));
  form.appendChild(Object.assign(document.createElement('textarea'), { cols: 40, rows: 5, name: 'details:' }));

  form.appendChild(Object.assign(document.createElement('label'), { for: 'date', textContent: 'Date:' }));
  form.appendChild(Object.assign(document.createElement('input'), { type: 'date', name: 'date:', required: true }));

  form.appendChild(Object.assign(document.createElement('button'), { type: 'submit', id: 'submit-btn:', textContent: 'Done' }));

  formContainer.appendChild(form);

  return formContainer;
};

export default formDiv;
