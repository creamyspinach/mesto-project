

export const popupAdd = document.querySelector('#popup-add');
export const profileTC = document.querySelector('.profile__text-container');
export const popupEdit = document.querySelector('#popup-edit');
export const profileEditButton = profileTC.querySelector('.profile__edit-button');
export const profileAddButton = document.querySelector('.profile__add-button');
export const popupInputTitle = popupEdit.querySelector('#inputName');
export const popupInputSubtitle = popupEdit.querySelector('#inputSubtitle');
export const closeButtons = document.querySelectorAll('.popup__close-button');
export const popupArr = Array.from(document.querySelectorAll('.popup'));
export const popupCard = document.querySelector('.popup-card');
export const popupCardImage = popupCard.querySelector('.popup__image');
export const popupCardLabel = popupCard.querySelector('.popup__label');
export const popupEditForm = popupEdit.querySelector('.popup__form');
export const profileTitle = profileTC.querySelector('.profile__title');
export const profileSubtitle = profileTC.querySelector('.profile__subtitle');



export function openPopup(element) {
  element.classList.add('popup_active');
}

export function closePopup(element) {
  element.classList.remove('popup_active');
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

//   popupArr.forEach((popup) => {
//     popup.addEventListener('keydown', (evt) => {
//       if (evt.key = 'Escape') {
//          closePopup(popup);
//        }
//     });
//   });
  