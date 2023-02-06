import { profileTitle, popupInputTitle, profileSubtitle, popupInputSubtitle, popupEdit, popupCard, popupCardImage,
   popupCardLabel, popupInputCardName, popupInputLink, popupAdd, popupAddSubmitForm, popupAvatarLink, popupAvatar,
   profilePhoto, popupEditSubmitBtn, popupAddSubmitBtn, cardList, popupAvatarSubmitBtn, popupDeleteSubmitBtn } from "./constants.js";
import { patchAvatarRequest, patchProfileRequest, postCardRequest } from "./Api.js";
import { createCard } from "./card.js";
import { renderLoading } from "./utils.js";

export let handleDeleteCardSubmit;
export const setDeleteCardHandle = (handle) => {
  handleDeleteCardSubmit = handle;
}

export const deleteCardStarter = () => {
  renderLoading('deleteOn', popupDeleteSubmitBtn);
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
  renderLoading('saveOn', popupEditSubmitBtn);
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
    renderLoading('saveOff', popupEditSubmitBtn);
  })
}

export function handleAddCardFormSubmit (evt) {
  evt.preventDefault();
  renderLoading('saveOn', popupAddSubmitBtn);
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
    renderLoading('saveOff', popupAddSubmitBtn);
  })
}

export function handleProfileAvatarFormSubmit (evt) {
  evt.preventDefault();
  renderLoading('saveOn', popupAvatarSubmitBtn);
  patchAvatarRequest(popupAvatarLink.value)
  .then((data) => {
      profilePhoto.src = data.avatar;
      closePopup(popupAvatar);
    })
  .catch((err) => {
    console.error(`Ошибка: ${err}`);
  })
  .finally(() => {
    renderLoading('saveOff', popupAvatarSubmitBtn);
  })
}

export function showCard(imgSrc, label) {
    openPopup(popupCard);
    popupCardImage.src = imgSrc;
    popupCardLabel.textContent = label;
    popupCardImage.alt = label;
  }


