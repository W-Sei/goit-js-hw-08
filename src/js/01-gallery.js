// Add imports above this line
import { galleryItems } from '/src/js/gallery-items';
// Change code below this line

// console.log(galleryItems);

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryGen = document.querySelector('.gallery');

const getItemMarkup = ({ preview, original, description }) => `
  <a class="gallery__item" href="${original}">
    <img class="gallery__image" src="${preview}" alt="${description}" />
  </a>
`;
const getImagesMarkup = images =>
  images.map(image => getItemMarkup(image)).join('');

galleryGen.innerHTML = getImagesMarkup(galleryItems);
galleryGen.addEventListener('click', onClickGallery);

new SimpleLightbox('.gallery a', {
  captionDelay: 250,
  captionsData: 'alt',
});

function onClickGallery(evt) {
  evt.preventDefault();
}
