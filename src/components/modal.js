import { profileTitle, popupInputTitle, profileSubtitle, popupInputSubtitle, popupEdit, popupCard, popupCardImage,
   popupCardLabel } from "./constants.js";
import { enableValidation, hideInputError } from "./validate.js";

export function openPopup(element) {
  element.classList.add('popup_active');
  document.addEventListener('keydown', closePopupOnEsc);
  enableValidation();
  const inputs = Array.from(element.querySelectorAll('.popup__input'));
  inputs.forEach((input) => {
    hideInputError(element.querySelector('.popup__form'), input);
  });
}

export function closePopup(element) {
  element.classList.remove('popup_active');
  document.removeEventListener('keydown', closePopupOnEsc);
}

function closePopupOnEsc(evt) {
    if (evt.key === 'Escape') {
            const popupOpened = document.querySelector('.popup_active');
            closePopup(popupOpened);
        }
}

export function handleProfileFormSubmit (evt){
  evt.preventDefault();
  profileTitle.textContent = popupInputTitle.value;
  profileSubtitle.textContent = popupInputSubtitle.value;
  closePopup(popupEdit);
}

export function showCard(imgSrc, label) {
    openPopup(popupCard);
    popupCardImage.src = imgSrc;
    popupCardLabel.textContent = label;
    popupCardImage.alt = label;
  }


