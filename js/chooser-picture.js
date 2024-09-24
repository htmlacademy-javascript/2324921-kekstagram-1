const FILE_TYPES = ['jpg', 'jpeg', 'png'];

const fileChooserElement = document.querySelector('.img-upload input[type=file]');
const previewElement = document.querySelector('.img-upload__preview img');
const effectsItemElement = document.querySelectorAll('.effects__item span');

fileChooserElement.addEventListener('change', () => {
  const file = fileChooserElement.files[0];
  const fileName = file.name.toLowerCase();

  const matches = FILE_TYPES.some((it) => fileName.endsWith(it));

  if (matches) {
    previewElement.src = URL.createObjectURL(file);
    effectsItemElement.forEach((element) => {
      element.style.backgroundImage = `url(${URL.createObjectURL(file)})`;
    }
    );
  }
});
