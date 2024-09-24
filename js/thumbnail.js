const thumbnailTemplate = document.querySelector('#picture').content.querySelector('.picture');
const containerElement = document.querySelector('.pictures');

const createThumbnail = ({ comments, description, likes, url, id }) => {
  const thumbnail = thumbnailTemplate.cloneNode(true);
  const image = thumbnail.querySelector('.picture__img');

  image.src = url;
  image.alt = description;
  thumbnail.querySelector('.picture__comments').textContent = comments.length;
  thumbnail.querySelector('.picture__likes').textContent = likes;
  thumbnail.dataset.thumbnailId = id;

  return thumbnail;
};

const renderThumbnails = (pictures) => {
  containerElement.querySelectorAll('.picture').forEach((element) => element.remove());
  const fragment = document.createDocumentFragment();
  pictures.forEach((picture) => {
    const thumbnail = createThumbnail(picture);
    fragment.append(thumbnail);
  });
  containerElement.append(fragment);
};

export { renderThumbnails };

