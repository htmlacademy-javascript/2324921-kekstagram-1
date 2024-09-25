const thumbnailTemplate = document.querySelector('#picture').content.querySelector('.picture');

const createThumbnail = ({ comments, description, likes, url, id }) => {
  const thumbnailElement = thumbnailTemplate.cloneNode(true);
  const imageElement = thumbnailElement.querySelector('.picture__img');

  imageElement.src = url;
  imageElement.alt = description;
  thumbnailElement.querySelector('.picture__comments').textContent = comments.length;
  thumbnailElement.querySelector('.picture__likes').textContent = likes;
  thumbnailElement.dataset.thumbnaiElementlId = id;

  return thumbnailElement;
};

const renderThumbnails = (pictures, containerElement) => {
  containerElement.querySelectorAll('.picture').forEach((element) => element.remove());
  const fragment = document.createDocumentFragment();
  pictures.forEach((picture) => {
    const thumbnailElement = createThumbnail(picture);
    fragment.append(thumbnailElement);
  });
  containerElement.append(fragment);
};

export { renderThumbnails };

