import './index.css';
import { removeFormValidationErrors, turnButtonValid, turnButtonInvalid } from '../components/validate.js';
import {handleProfileFormSubmit, openPopup, closePopup} from '../components/modal.js';
import {createCard} from '../components/card.js';
import {popupEditForm, profileTitle, profileSubtitle, profileEditButton, 
  popupInputTitle, popupInputSubtitle, popupEdit, popupAdd, profileAddButton, closeButtons, popups, popupAddSubmitForm, 
  cardList, popupInputCardName, initialCards, popupInputLink, popupFormValidationSelectors, profilePhoto} from '../components/constants.js';
import { refreshProfile, refreshCards } from '../components/server';

popupEditForm.addEventListener('submit', handleProfileFormSubmit);

popupAddSubmitForm.addEventListener('submit', function(evt){
    evt.preventDefault();
    cardList.prepend(createCard(popupInputCardName.value, popupInputLink.value));
    closePopup(popupAdd);
    popupAddSubmitForm.reset();
});

// initialCards.forEach(function(item){
//     cardList.prepend(createCard(item.name, item.link));
// });

// getCards().forEach(function(item){
//   cardList.prepend(createCard(item.name, item.link));
// });

profileEditButton.addEventListener('click', function() {
  popupInputTitle.value = profileTitle.textContent;
  popupInputSubtitle.value = profileSubtitle.textContent;
  openPopup(popupEdit);
  removeFormValidationErrors(popupEdit.querySelector('.popup__form'), popupFormValidationSelectors);
});

profileAddButton.addEventListener('click', function(){
  openPopup(popupAdd);
  removeFormValidationErrors(popupAdd.querySelector('.popup__form'), popupFormValidationSelectors);
  console.log(popupFormValidationSelectors.inactiveButtonClass);
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