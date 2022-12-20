const cardTemplate = document.querySelector('#card-template').content;
import {closePopup, openPopup, showCard} from './modal.js';
import { refreshCards, profileData } from './server.js';
import { popupDelete, popupDeleteForm } from './constants.js';

function getCardTemplate (template) {
  return template.querySelector('.card').cloneNode(true);
}

function toggleCardLike (element, cardId) {
  element.addEventListener('click', function() {
    const likeCounter = element.nextElementSibling;
    element.classList.toggle('card__heart-button_active');
    if (element.classList.contains('card__heart-button_active')) {
      fetch(`https://nomoreparties.co/v1/plus-cohort-15/cards/likes/${cardId}`, {
        method: 'PUT',
        headers: {
          authorization: 'b79a7bcf-c1ec-44a0-a9b3-23fd8093a32f',
          'Content-Type': 'application/json'
        }
      })
      .then((res) => {
        if (res.ok) {
          likeCounter.textContent = parseInt(likeCounter.textContent) + 1;
          return res.json();
        }
        return Promise.reject(res.status);
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`);
        element.classList.toggle('card__heart-button_active');
      })
    } else {
      fetch(`https://nomoreparties.co/v1/plus-cohort-15/cards/likes/${cardId}`, {
        method: 'DELETE', 
        headers: {
          authorization: 'b79a7bcf-c1ec-44a0-a9b3-23fd8093a32f',
          'Content-Type': 'application/json'
        }
      })
      .then((res) => {
        if (res.ok) {
          likeCounter.textContent = parseInt(likeCounter.textContent) - 1;
          return res.json();
        }
        return Promise.reject(res.status);
      })
      .catch((res) => {
        console.log(`Ошибка: ${err}`);
        element.classList.toggle('card__heart-button_active');
      })
    }
  });
}



export function createCard (cardName, cardImgSrc, cardLikeIndex, cardOwnerId, cardId) {
    const cardElement = getCardTemplate(cardTemplate);
    const cardImage = cardElement.querySelector('.card__image');
    const cardLike = cardElement.querySelector('.card__heart-button');
    const cardLikeCounter = cardElement.querySelector('.card__heart-counter');
    const cardDeleteBtn = cardElement.querySelector('.card__delete-button');
  
    cardElement.querySelector('.card__subtitle').textContent = cardName;
    cardImage.src = cardImgSrc;
    cardImage.alt = cardName;
    cardLikeCounter.textContent = cardLikeIndex;

    toggleCardLike(cardLike, cardId);
  
    cardElement.querySelector('.card__image').addEventListener('click', function(evt) {
      showCard(evt.target.src, evt.target.closest('.card').querySelector('.card__subtitle').textContent);
    });

    cardElement.dataset.cardId = cardId;

    if (profileData._id === cardOwnerId) {
      cardDeleteBtn.classList.add('card__delete-button_active');
    }

    cardDeleteBtn.addEventListener('click', function() {
      openPopup(popupDelete);
      
      popupDeleteForm.addEventListener('submit', function() {
        deleteCard(cardId, cardElement);
        closePopup(popupDelete);
      })
    });
  
    return cardElement;
  }


export function deleteCard (cardId, cardElement) {
  fetch(`https://nomoreparties.co/v1/plus-cohort-15/cards/${cardId}`, {
    method: 'DELETE',
    headers: {
      authorization: 'b79a7bcf-c1ec-44a0-a9b3-23fd8093a32f',
      'Content-Type': 'application/json'
  }
  })
  .then((res) =>{
    if(res.ok) {
      return res.json();
    }
    return Promise.reject(res.status);
  })
  .then(() => {
    cardElement.remove();
  })
  .catch((err) => {
    console.error(`Ошибка: ${err}`);
  })
}



