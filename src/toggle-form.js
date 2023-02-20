import form from './index';

const toggleForm = () => {
  form.classList.toggle('show');
};

export default toggleForm;

// solve the cyclic dependancy problem
