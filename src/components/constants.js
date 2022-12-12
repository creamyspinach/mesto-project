export const popupAdd = document.querySelector('#popup-add');
export const profileTC = document.querySelector('.profile__text-container');
export const popupEdit = document.querySelector('#popup-edit');
export const profileEditButton = profileTC.querySelector('.profile__edit-button');
export const profileAddButton = document.querySelector('.profile__add-button');
export const popupInputTitle = popupEdit.querySelector('#inputName');
export const popupInputSubtitle = popupEdit.querySelector('#inputSubtitle');
export const closeButtons = document.querySelectorAll('.popup__close-button');
export const popups = Array.from(document.querySelectorAll('.popup'));
export const popupCard = document.querySelector('.popup-card');
export const popupCardImage = popupCard.querySelector('.popup__image');
export const popupCardLabel = popupCard.querySelector('.popup__label');
export const popupEditForm = popupEdit.querySelector('.popup__form');
export const profileTitle = profileTC.querySelector('.profile__title');
export const profileSubtitle = profileTC.querySelector('.profile__subtitle');
export const formList = Array.from(document.querySelectorAll('.popup__form'));
export const cardList = document.querySelector('.elements__cards');
export const popupAddSubmitForm = popupAdd.querySelector('.popup__form');
export const popupInputCardName = popupAdd.querySelector('#inputTitle');
export const popupInputLink = popupAdd.querySelector('#inputLink');
export const profilePhoto = document.querySelector('.profile__photo');
export const popupFormValidationSelectors = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit-button',
  inactiveButtonClass: 'popup__submit-button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_active'
}; 

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