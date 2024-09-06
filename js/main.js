import { renderGallery } from './gallery.js';
import { setOnFormSubmit, hideModal } from './form.js';
// import { showSuccesMessage, showErrorMessage } from './message.js';
import { getData, sendData } from './api.js';
import { showAlert } from './util.js';
import './form.js';

setOnFormSubmit(async (data) => {
  try {
    await sendData(data);
    hideModal();
    // showSuccesMessage();
  } catch {
    // showErrorMessage();
  }
});

try {
  const data = await getData();
  renderGallery(data);
} catch(err) {
  showAlert(err.message)
}
