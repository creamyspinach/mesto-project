import './index.css';
import { removeFormValidationErrors, turnButtonValid, turnButtonInvalid } from '../components/validate.js';
import {handleProfileFormSubmit, openPopup, closePopup} from '../components/modal.js';
import {createCard, deleteCard} from '../components/card.js';
import {popupEditForm, profileTitle, profileSubtitle, profileEditButton, 
  popupInputTitle, popupInputSubtitle, popupEdit, popupAdd, profileAddButton, closeButtons, popups, popupAddSubmitForm, 
  cardList, popupInputCardName, initialCards, popupInputLink, popupFormValidationSelectors, profilePhoto, popupDelete, popupDeleteForm} from '../components/constants.js';
import { refreshProfile, refreshCards } from '../components/server';

popupEditForm.addEventListener('submit', handleProfileFormSubmit);

popupAddSubmitForm.addEventListener('submit', function(evt){
    evt.preventDefault();
    fetch('https://nomoreparties.co/v1/plus-cohort-15/cards', {
    method: 'POST',
    headers: {
      authorization: 'b79a7bcf-c1ec-44a0-a9b3-23fd8093a32f',
      'Content-Type': 'application/json'
  },
    body: JSON.stringify({
      name: popupInputCardName.value,
      link: popupInputLink.value
   })
  })
  .then((res) =>{
    if(res.ok) {
      refreshCards();
      return res;
    }
    return Promise.reject(res.status);
  })
  .catch((err) => {
    console.error(`Ошибка: ${err}`);
  })
    closePopup(popupAdd);
    popupAddSubmitForm.reset();
});

profileEditButton.addEventListener('click', function() {
  popupInputTitle.value = profileTitle.textContent;
  popupInputSubtitle.value = profileSubtitle.textContent;
  openPopup(popupEdit);
  removeFormValidationErrors(popupEdit.querySelector('.popup__form'), popupFormValidationSelectors);
});

profileAddButton.addEventListener('click', function(){
  openPopup(popupAdd);
  removeFormValidationErrors(popupAdd.querySelector('.popup__form'), popupFormValidationSelectors);
  turnButtonInvalid(popupAdd.querySelector(popupFormValidationSelectors.submitButtonSelector), popupFormValidationSelectors.inactiveButtonClass);
});

closeButtons.forEach((button) => {
  const popup = button.closest('.popup');
  button.addEventListener('click', () => closePopup(popup));
});

popups.forEach((popup) => {
  popup.addEventListener('click', (evt) => {
    if (evt.target.classList.contains('popup')) {
      closePopup(popup);
    } 
  });
});



refreshProfile();
refreshCards();