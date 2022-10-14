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