const cardTemplate = document.querySelector('#card-template').content;
const cardList = document.querySelector('.elements__cards');
const popupAddSubmitForm = popupAdd.querySelector('.popup__form');
const popupInputCardName = popupAdd.querySelector('#inputTitle');
const popupInputLink = popupAdd.querySelector('#inputLink');
import {popupAdd, popupCard, popupCardImage, popupCardLabel, showCard, closePopup} from './popupHandle.js';


function createCard (cardName, cardImgSrc) {
    const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
  
    cardElement.querySelector('.card__subtitle').textContent = cardName;
    cardElement.querySelector('.card__image').src = cardImgSrc;
    cardElement.querySelector('.card__image').alt = cardName;
  
    cardElement.querySelector('.card__heart-button').addEventListener('click', function(evt) {
      evt.target.classList.toggle('card__heart-button_active');
    });
  
    cardElement.querySelector('.card__delete-button').addEventListener('click', function() {
      cardElement.remove();
    });
  
    cardElement.querySelector('.card__image').addEventListener('click', function(evt) {
      showCard(evt.target.src, evt.target.closest('.card').querySelector('.card__subtitle').textContent);
    });
  
    return cardElement;
  }

  // массив с карточками из задания
const initialCards = [
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

initialCards.forEach(function(item){
  cardList.prepend(createCard(item.name, item.link));
});

popupAddSubmitForm.addEventListener('submit', function(evt){
    evt.preventDefault();
    cardList.prepend(createCard(popupInputCardName.value, popupInputLink.value));
    closePopup(popupAdd);
    popupAddSubmitForm.reset();
});