import { profileTitle, popupInputTitle, profileSubtitle, popupInputSubtitle, popupEdit, popupCard, popupCardImage,
   popupCardLabel } from "./constants.js";
import { refreshProfile } from "./server.js";
import { enableValidation, hideInputError } from "./validate.js";

export function openPopup(element) {
  element.classList.add('popup_active');
  document.addEventListener('keydown', closePopupOnEsc);
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
  fetch('https://nomoreparties.co/v1/plus-cohort-15/users/me', {
    method: 'PATCH',
    headers: {
      authorization: 'b79a7bcf-c1ec-44a0-a9b3-23fd8093a32f',
      'Content-Type': 'application/json'
  },
    body: JSON.stringify({
      name: popupInputTitle.value,
      about: popupInputSubtitle.value
   })
  })
  .then((res) =>{
    if(res.ok) {
      refreshProfile();
      return res;
    }
    return Promise.reject(res.status);
  })
  .catch((err) => {
    console.error(`Ошибка: %{err}`);
  })
  closePopup(popupEdit);
}

export function showCard(imgSrc, label) {
    openPopup(popupCard);
    popupCardImage.src = imgSrc;
    popupCardLabel.textContent = label;
    popupCardImage.alt = label;
  }


