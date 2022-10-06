

export const popupAdd = document.querySelector('#popup-add');
const profileEditButton = profileTC.querySelector('.profile__edit-button');
const profileAddButton = document.querySelector('.profile__add-button');
export const popupInputTitle = popupEdit.querySelector('#inputName');
export const popupInputSubtitle = popupEdit.querySelector('#inputSubtitle');
const closeButtons = document.querySelectorAll('.popup__close-button');
const popupArr = Array.from(document.querySelectorAll('.popup'));
export const popupCard = document.querySelector('.popup-card');
export const popupCardImage = popupCard.querySelector('.popup__image');
export const popupCardLabel = popupCard.querySelector('.popup__label');

import { profileTitle, profileSubtitle, popupEdit, profileTC } from "./profileFormHandle.js";



export function openPopup(element) {
  element.classList.add('popup_active');
}

export function closePopup(element) {
  element.classList.remove('popup_active');
}

profileEditButton.addEventListener('click', function() {
  popupInputTitle.value = profileTitle.textContent;
  popupInputSubtitle.value = profileSubtitle.textContent;
  openPopup(popupEdit);
});

profileAddButton.addEventListener('click', function(){
  openPopup(popupAdd);
});

closeButtons.forEach((button) => {
  const popup = button.closest('.popup');
  button.addEventListener('click', () => closePopup(popup));
});

popupArr.forEach((popup) => {
  popup.addEventListener('click', (evt) => {
    if (evt.target.classList.contains('popup')) {
      closePopup(popup);
    } 
  });
});

export function showCard(imgSrc, label) {
    openPopup(popupCard);
    popupCardImage.src = imgSrc;
    popupCardLabel.textContent = label;
    popupCardImage.alt = label;
  }

//   popupArr.forEach((popup) => {
//     popup.addEventListener('keydown', (evt) => {
//       if (evt.key = 'Escape') {
//          closePopup(popup);
//        }
//     });
//   });
  