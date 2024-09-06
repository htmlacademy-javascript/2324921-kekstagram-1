const showSuccesMessage = document.querySelector('.success__inner');
const showErrorMessage = document.querySelector('.error__inner');
const onSuccesButton = showSuccesMessage.querySelector('.success__button');
const onErrorButton = showSuccesMessage.querySelector('.error__button');

onSuccesButton.addEventListener('click', showSuccesMessage);
onErrorButton.addEventListener('click', showErrorMessage);

export { showSuccesMessage, showErrorMessage };
