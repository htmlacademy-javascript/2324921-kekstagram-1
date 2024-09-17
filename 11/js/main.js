import { renderGallery } from './gallery.js';
import { setOnFormSubmit, hideModal } from './form.js';
import { showSuccessMessage, showErrorMessage } from './message.js';
import { getData, sendData } from './api.js';
import { showAlert, debounce } from './util.js';
import './form.js';
// import './choose-picture.js';
import { init, getFilteredPictures } from './filter.js';

setOnFormSubmit(async (data) => {
  try {
    await sendData(data);
    hideModal();
    showSuccessMessage();
  } catch {
    showErrorMessage();
  }
});

try {
  const data = await getData();
  const debouncedRenderGallery = debounce(renderGallery);
  init(data, debouncedRenderGallery);
  renderGallery(getFilteredPictures);
} catch (err) {
  showAlert(err.message);
}
