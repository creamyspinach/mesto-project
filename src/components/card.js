const cardTemplate = document.querySelector('#card-template').content;
import {closePopup, showCard} from './modal.js';

function getCardTemplate (template) {
  return template.querySelector('.card').cloneNode(true);
}

function toggleCardLike (element) {
  element.addEventListener('click', function(evt) {
    evt.target.classList.toggle('card__heart-button_active');
  });
}

export function createCard (cardName, cardImgSrc) {
    const cardElement = getCardTemplate(cardTemplate);
    const cardImage = cardElement.querySelector('.card__image');
    const cardLike = cardElement.querySelector('.card__heart-button');
  
    cardElement.querySelector('.card__subtitle').textContent = cardName;
    cardImage.src = cardImgSrc;
    cardImage.alt = cardName;

    toggleCardLike(cardLike);
  
    cardElement.querySelector('.card__heart-button')
  
    cardElement.querySelector('.card__delete-button').addEventListener('click', function() {
      cardElement.remove();
    });
  
    cardElement.querySelector('.card__image').addEventListener('click', function(evt) {
      showCard(evt.target.src, evt.target.closest('.card').querySelector('.card__subtitle').textContent);
    });
  
    return cardElement;
  }

  // массив с карточками из задания
export const initialCards = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
  ];



