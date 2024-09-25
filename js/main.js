import { renderGallery } from './gallery.js';
import { setOnFormSubmit, hideModal } from './form.js';
import { showMessage } from './message.js';
import { getData, sendData } from './api.js';
import { showAlert, debounce } from './util.js';
import { init } from './filter.js';
import './form.js';
import './chooser-picture.js';

setOnFormSubmit(async (data) => {
  try {
    await sendData(data);
    hideModal();
    showMessage('success');
  } catch {
    showMessage('error');
  }
});

try {
  const data = await getData();
  const debouncedRenderGallery = debounce(renderGallery);
  init(data, debouncedRenderGallery);
  renderGallery(data);
} catch (err) {
  showAlert(err.message);
}
