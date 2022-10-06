
import {popupEditForm, profileTitle, profileSubtitle, handleProfileFormSubmit, openPopup, closePopup, profileEditButton, popupInputTitle, popupInputSubtitle, popupEdit, popupAdd, profileAddButton, closeButtons, popupArr} from './modal.js';
import {popupAddSubmitForm, cardList, initialCards, createCard, popupInputCardName, popupInputLink} from './card.js';

popupEditForm.addEventListener('submit', handleProfileFormSubmit);

popupAddSubmitForm.addEventListener('submit', function(evt){
    evt.preventDefault();
    cardList.prepend(createCard(popupInputCardName.value, popupInputLink.value));
    closePopup(popupAdd);
    popupAddSubmitForm.reset();
});

initialCards.forEach(function(item){
    cardList.prepend(createCard(item.name, item.link));
});

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