export const profileTC = document.querySelector('.profile__text-container');
export const popupEdit = document.querySelector('#popup-edit');
const popupEditForm = popupEdit.querySelector('.popup__form');
export const profileTitle = profileTC.querySelector('.profile__title');
export const profileSubtitle = profileTC.querySelector('.profile__subtitle');

import {popupInputTitle, popupInputSubtitle, closePopup} from './popupHandle.js';


popupEditForm.addEventListener('submit', handleProfileFormSubmit);

function handleProfileFormSubmit (evt){
  evt.preventDefault();
  profileTitle.textContent = popupInputTitle.value;
  profileSubtitle.textContent = popupInputSubtitle.value;
  closePopup(popupEdit);
}