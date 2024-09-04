import { getPictures } from './mocks/photo.js';
import { renderGallery } from './gallery.js';
import { setUserFormSubmit } from './form.js';
import { hideModal } from './form.js';
import { getData } from './api.js';
import './form.js';

getData(Form);

setUserFormSubmit(hideModal);

renderGallery(getPictures());
