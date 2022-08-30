// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const galleryItemsAll = document.querySelector(`.gallery`);
console.log(galleryItemsAll);

function createImageCards(array) {
    return array
      .map(
        ({ preview, original, description }) =>
        `<a class="gallery__item" href=${original}>
    <img class="gallery__image" src=${preview} alt="${description}" />
  </a>`, 
      )
      .join('');
  }
  
const cardsMarkup = createImageCards(galleryItems);
galleryItemsAll.insertAdjacentHTML(`afterbegin`, cardsMarkup);

const lightbox = new SimpleLightbox('.gallery a', {   
    captionsData: 'alt',
    captionDelay: 250,
  });
