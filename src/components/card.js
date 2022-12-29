const cardTemplate = document.querySelector('#card-template').content;
import {closePopup, openPopup, showCard, setDeleteCardHandle} from './modal.js';
import { profileData, deleteCardRequest, putCardLikeRequest, deleteCardLikeRequest } from './api.js';
import { popupDelete, popupDeleteForm, popupDeleteSubmitBtn } from './constants.js';
import { renderLoading } from "./utils.js";

function getCardTemplate (template) {
  return template.querySelector('.card').cloneNode(true);
}

function toggleCardLike (element, cardId) {
  element.addEventListener('click', function() {
    const likeCounter = element.nextElementSibling;
    element.classList.toggle('card__heart-button_active');
    if (element.classList.contains('card__heart-button_active')) {
      putCardLikeRequest(cardId)
      .then((data) => {
        likeCounter.textContent = data.likes.length;
        })
      .catch((err) => {
        console.error(`Ошибка: ${err}`);
        element.classList.toggle('card__heart-button_active');
      });
    } else {
      deleteCardLikeRequest(cardId)
      .then((data) => {
          likeCounter.textContent = data.likes.length;
      })
      .catch((err) => {
        console.error(`Ошибка: ${err}`);
        element.classList.toggle('card__heart-button_active');
      });
    }
  });
}

export function createCard (cardName, cardImgSrc, cardLikesArr, cardOwnerId, cardId) {
  const cardElement = getCardTemplate(cardTemplate);
  const cardImage = cardElement.querySelector('.card__image');
  const cardLike = cardElement.querySelector('.card__heart-button');
  const cardLikeCounter = cardElement.querySelector('.card__heart-counter');
  const cardDeleteBtn = cardElement.querySelector('.card__delete-button');

  cardElement.querySelector('.card__subtitle').textContent = cardName;
  cardImage.src = cardImgSrc;
  cardImage.alt = cardName;
  cardLikeCounter.textContent = cardLikesArr.length;
  if (cardLikesArr) {
    cardLikesArr.forEach(element => {
    if (element._id.includes(cardOwnerId)) {
      cardLike.classList.toggle('card__heart-button_active');
    }
  });
  }
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

    setDeleteCardHandle (() => {
     deleteCardRequest(cardId)
     .then(() => {
       cardElement.remove();
       closePopup(popupDelete);
     })
     .catch((err) => {
       console.error(`Ошибка: ${err}`);
    })
    .finally(() => {
     renderLoading('deleteOff', popupDeleteSubmitBtn);
    });
   });
  });

  return cardElement;
}

export function setDeleteListenerOnPopup() {
  popupDeleteForm.addEventListener('submit', deleteCard());
}