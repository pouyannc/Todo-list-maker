import itemsDiv from '../todos-display';

const renderTab = (tabId = document.querySelector('.todo-container').dataset.tab) => {
  const main = document.querySelector('.page-main');
  main.replaceChild(itemsDiv(tabId), main.lastChild);
};

export default renderTab;
