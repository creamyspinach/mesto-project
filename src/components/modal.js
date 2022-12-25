import { profileTitle, popupInputTitle, profileSubtitle, popupInputSubtitle, popupEdit, popupCard, popupCardImage,
   popupCardLabel, popupInputCardName, popupInputLink, popupAdd, popupAddSubmitForm, popupAvatarLink, popupAvatar,
   profilePhoto, popupEditSubmitBtn, popupAddSubmitBtn, cardList, popupAvatarSubmitBtn, popupDeleteSubmitBtn } from "./constants.js";
import { patchAvatarRequest, patchProfileRequest, postCardRequest } from "./api.js";
import { createCard } from "./card.js";

export let handleDeleteCardSubmit;
export const setDeleteCardHandle = (handle) => {
  handleDeleteCardSubmit = handle;
}

export const deleteCardStarter = () => {
  popupDeleteSubmitBtn.value = 'Удаление...';
  handleDeleteCardSubmit();
}

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
  popupEditSubmitBtn.value = 'Сохранение...';
  patchProfileRequest(popupInputTitle.value, popupInputSubtitle.value)
  .then((data) => {
    profileTitle.textContent = data.name;
    profileSubtitle.textContent = data.about;
    closePopup(popupEdit)
  })
  .catch((err) => {
    console.error(`Ошибка: ${err}`);
  })
  .finally(() => {
    popupEditSubmitBtn.value = 'Сохранить';
  })
}

export function handleAddCardFormSubmit (evt) {
  evt.preventDefault();
  popupAddSubmitBtn.value = 'Сохранение...';
  postCardRequest(popupInputCardName.value, popupInputLink.value)
  .then((data) =>{
      cardList.prepend(createCard(data.name, data.link, data.likes.length, data.owner._id, data._id));
      closePopup(popupAdd);
      popupAddSubmitForm.reset();
  })
  .catch((err) => {
    console.error(`Ошибка: ${err}`);
  })
  .finally(() => {
    popupAddSubmitBtn.value = 'Сохранить';
  })
}

export function handleProfileAvatarFormSubmit (evt) {
  evt.preventDefault();
  popupAvatarSubmitBtn.value = 'Сохранение...';
  patchAvatarRequest(popupAvatarLink.value)
  .then((data) => {
      profilePhoto.src = data.avatar;
      closePopup(popupAvatar);
    })
  .catch((err) => {
    console.error(`Ошибка: ${err}`);
  })
  .finally(() => {
    popupAvatarSubmitBtn.value = 'Сохранить';
  })
}

export function showCard(imgSrc, label) {
    openPopup(popupCard);
    popupCardImage.src = imgSrc;
    popupCardLabel.textContent = label;
    popupCardImage.alt = label;
  }


