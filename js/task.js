import list from './gallery-items.js';
const refs = {
  gallery: document.querySelector('.js-gallery'),
  modal: document.querySelector('#js-modal'),
  closeBtn: document.querySelector('[data-action=close-lightbox]'),
  largePic: document.querySelector('#js-large-picture')
}

function createElementImg(elem) {
  for (let item of elem) {
    let createLi = document.createElement('li');
    refs.gallery.append(createLi);
    let createImg = document.createElement('img');
    createLi.append(createImg);
    let createLink = document.createElement('a');
    createLi.append(createLink);
    createLi.setAttribute('class', 'gallery__item');
    createLink.setAttribute('class', 'gallery__link');
    createLink.setAttribute('href', item.original);
    createImg.setAttribute('class', 'gallery__image');
    createImg.setAttribute('src', item.preview);
    createImg.setAttribute('data-source', item.original);
    createImg.setAttribute('alt', item.description);
  }
}
createElementImg(list);

refs.gallery.addEventListener('click', onGalleryClick);

function onGalleryClick(event) {
  event.preventDefault();
  if (event.target.nodeName !== 'IMG') {
    return;
  }
  refs.modal.setAttribute('class', 'lightbox is-open');
  const largeImageURL = event.target.dataset.source;
  const largeImageAlt = event.target.alt;
  refs.largePic.src = largeImageURL;
  refs.largePic.alt = largeImageAlt;
  console.log(event.target);
}
refs.closeBtn.addEventListener('click', () => {
  refs.modal.setAttribute('class', 'lightbox');
  refs.largePic.src = '';
  refs.largePic.alt = '';
});