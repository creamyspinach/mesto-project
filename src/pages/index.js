import './index.css';
import { removeFormValidationErrors, turnButtonInvalid } from '../components/validate.js';
import {handleProfileFormSubmit, openPopup, closePopup, handleAddCardFormSubmit, handleProfileAvatarFormSubmit, 
 deleteCardStarter} from '../components/modal.js';
import {createCard} from '../components/card.js';
import {popupEditForm, profileTitle, profileSubtitle, profileEditButton, 
  popupInputTitle, popupInputSubtitle, popupEdit, popupAdd, profileAddButton, closeButtons, popups, popupAddSubmitForm, 
  cardList, popupFormValidationSelectors, profilePhoto,
  popupDeleteForm, popupAvatar, profileAvatarButton, popupAvatarSubmitForm, popupAvatarLink} from '../components/constants.js';
import {getCardsRequest, getProfileRequest, setProfileData } from '../components/api';

popupEditForm.addEventListener('submit', handleProfileFormSubmit);

popupAddSubmitForm.addEventListener('submit', handleAddCardFormSubmit);

popupAvatarSubmitForm.addEventListener('submit', handleProfileAvatarFormSubmit);

popupDeleteForm.addEventListener('submit', deleteCardStarter);

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

profileAvatarButton.addEventListener('click', function(){
  openPopup(popupAvatar);
  popupAvatarLink.value = "";
  removeFormValidationErrors(popupAvatar.querySelector('.popup__form'), popupFormValidationSelectors);
  turnButtonInvalid(popupAvatar.querySelector(popupFormValidationSelectors.submitButtonSelector), popupFormValidationSelectors.inactiveButtonClass);
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

Promise.all([
  getProfileRequest(),
  getCardsRequest()
])
.then((data) =>  {
      profileTitle.textContent = data[0].name;
      profileSubtitle.textContent = data[0].about;
      profilePhoto.src = data[0].avatar;
      setProfileData(data[0]);
      data[1].forEach((item) => {
        cardList.append(createCard(item.name, item.link, item.likes, item.owner._id, item._id));
    });
})
.catch((err) => {
  console.error(`Ошибка: ${err}`);
});
