// import { getPictures } from './mocks/photo.js';
import { renderGallery } from './gallery.js';
import { setOnFormSubmit, hideModal } from './form.js';
import { showSuccesMessage, showErrorMessage } from './message.js';
import { getData, sendData } from './api.js';
import { showAlert } from './util.js';
import './form.js';
// import { showBigPicture } from './big-picture.js';

setOnFormSubmit(async (data) => {
  try {
    await sendData(data);
    hideModal();
    showSuccesMessage();
  } catch {
    showErrorMessage();
  }
});

try {
  const data = await getData();
  renderGallery(data);
} catch(err) {
  showAlert(err.message)
}
