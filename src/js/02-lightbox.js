import { galleryItems } from './gallery-items.js';

const list = document.querySelector(".gallery");

const markup = galleryItems.map ((galleryItem) => `<li class="gallery__item">
<a class="gallery__link" href="${galleryItem.original}">
   <img class="gallery__image" src="${galleryItem.preview}" alt="${galleryItem.description}" />
</a>
</li>`)
.join("");
list.innerHTML = markup;
document.addEventListener('DOMContentLoaded', function () {
    const gallery = new SimpleLightbox('.gallery a', {
      captions: true,
      captionDelay: 250,
    });
  });