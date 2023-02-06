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
export const popupEditSubmitBtn = popupEditForm.querySelector('.popup__submit-button');
export const profileTitle = profileTC.querySelector('.profile__title');
export const profileSubtitle = profileTC.querySelector('.profile__subtitle');
export const formList = Array.from(document.querySelectorAll('.popup__form'));
export const cardList = document.querySelector('.elements__cards');
export const popupAddSubmitForm = popupAdd.querySelector('.popup__form');
export const popupAddSubmitBtn = popupAddSubmitForm.querySelector('.popup__submit-button');
export const popupInputCardName = popupAdd.querySelector('#inputTitle');
export const popupInputLink = popupAdd.querySelector('#inputLink');
export const profilePhoto = document.querySelector('.profile__photo');
export const popupDelete = document.querySelector('#popup-delete');
export const popupDeleteForm = popupDelete.querySelector('.popup__form');
export const popupDeleteSubmitBtn = popupDeleteForm.querySelector('.popup__submit-button')
export const profileAvatarButton = document.querySelector('.profile__photo-hover-element');
export const popupAvatar = document.querySelector('#popup-avatar');
export const popupAvatarSubmitForm = popupAvatar.querySelector('.popup__form');
export const popupAvatarLink = popupAvatar.querySelector('#inputLink');
export const popupAvatarSubmitBtn = popupAvatarSubmitForm.querySelector('.popup__submit-button');
export const popupFormValidationSelectors = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit-button',
  inactiveButtonClass: 'popup__submit-button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_active'
};
export const cohortId = 'plus-cohort-15';
export const config = {
  url: `https://nomoreparties.co/v1/${cohortId}`,
  headers: {
    authorization: 'b79a7bcf-c1ec-44a0-a9b3-23fd8093a32f',
    'Content-Type': 'application/json'
  }
}
