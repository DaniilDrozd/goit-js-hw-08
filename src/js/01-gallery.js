
import { galleryItems } from './gallery-items';


import SimpleLightbox from 'simplelightbox';

import 'simplelightbox/dist/simple-lightbox.min.css';

console.log(galleryItems);
const galleryMarkUp = document.querySelector('.gallery');


const imagesMarkup = createItemsMarkup(galleryItems);
galleryMarkUp.insertAdjacentHTML("beforeend",imagesMarkup);

function createItemsMarkup(items){
return items.map(({preview, original, description}) => {
    return  ` 
    <a class="gallery__link" href="${preview}">
    <img src="${preview}" class="gallery__image" data-source="${original}" alt="${description}">
    </a>
  </li>`;
})
.join("");
}

const onContainerClick = (e) => {
e.preventDefault();
if (e.target.classList.contains("gallery")) return;
const source = e.target.dataset.source;
const modal = basicLightbox.create(
    `<img src="${source}" width="800" height="600">`      
);
modal.show();
};

galleryMarkUp.addEventListener("click", onContainerClick);

var lightbox = new SimpleLightbox('.gallery a',{
    captionsData : 'alt',
    captionsDelay:250,
});
