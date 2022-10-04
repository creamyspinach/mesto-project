const elements = document.querySelector('.elements');
const profileTC = document.querySelector('.profile__text-container');
const profileTitle = profileTC.querySelector('.profile__title');
const profileSubtitle = profileTC.querySelector('.profile__subtitle');
const profileEditButton = profileTC.querySelector('.profile__edit-button');
const popupEdit = document.querySelector('#popup-edit');
const popupEditForm = popupEdit.querySelector('.popup__form');
const popupInputTitle = popupEdit.querySelector('#inputName');
const popupInputSubtitle = popupEdit.querySelector('#inputSubtitle');
const profileAddButton = document.querySelector('.profile__add-button');
const popupAdd = document.querySelector('#popup-add');
const cardList = document.querySelector('.elements__cards');
const cardTemplate = document.querySelector('#card-template').content;
const popupAddSubmitForm = popupAdd.querySelector('.popup__form');
const popupCard = document.querySelector('.popup-card');
const popupCardImage = popupCard.querySelector('.popup__image');
const popupCardLabel = popupCard.querySelector('.popup__label');
const closeButtons = document.querySelectorAll('.popup__close-button');
const addPopupName = popupAdd.querySelector('#popup__input-1');
const addPopupImgSrc = popupAdd.querySelector('#popup__input-2');
const popupForms = document.querySelectorAll('.popup__form');



closeButtons.forEach((button) => {
  const popup = button.closest('.popup');
  button.addEventListener('click', () => closePopup(popup));
});

profileEditButton.addEventListener('click', function() {
  popupInputTitle.value = profileTitle.textContent;
  popupInputSubtitle.value = profileSubtitle.textContent;
  openPopup(popupEdit);
});

popupEditForm.addEventListener('submit', handleProfileFormSubmit);

function handleProfileFormSubmit (evt){
  evt.preventDefault();
  profileTitle.textContent = popupInputTitle.value;
  profileSubtitle.textContent = popupInputSubtitle.value;
  closePopup(popupEdit);
}

function openPopup(element) {
  element.classList.add('popup_active');
}

function closePopup(element) {
  element.classList.remove('popup_active');
}

profileAddButton.addEventListener('click', function(){
  openPopup(popupAdd);
});

function createCard (cardName, cardImgSrc) {
  const cardElement = cardTemplate.querySelector('.card').cloneNode(true);

  cardElement.querySelector('.card__subtitle').textContent = cardName;
  cardElement.querySelector('.card__image').src = cardImgSrc;
  cardElement.querySelector('.card__image').alt = cardName;

  cardElement.querySelector('.card__heart-button').addEventListener('click', function(evt) {
    evt.target.classList.toggle('card__heart-button_active');
  });

  cardElement.querySelector('.card__delete-button').addEventListener('click', function() {
    cardElement.remove();
  });

  cardElement.querySelector('.card__image').addEventListener('click', function(evt) {
    showCard(evt.target.src, evt.target.closest('.card').querySelector('.card__subtitle').textContent);
  });

  return cardElement;
}

function showCard(imgSrc, label) {
  openPopup(popupCard);
  popupCardImage.src = imgSrc;
  popupCardLabel.textContent = label;
  popupCardImage.alt = label;
}

// массив с карточками из задания
const initialCards = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
  ];

initialCards.forEach(function(item){
  cardList.prepend(createCard(item.name, item.link));
});

popupAddSubmitForm.addEventListener('submit', function(evt){
    evt.preventDefault();
    cardList.prepend(createCard(addPopupName.value, addPopupImgSrc.value));
    closePopup(popupAdd);
    popupAddSubmitForm.reset();
});


const showInputError = (formElement, inputElement, errorMessage) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add('popup__input_type_error');
  errorElement.textContent = errorMessage;
  errorElement.classList.add('popup__input-error_active');
};

const hideInputError = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove('popup__input_type_error');
  errorElement.classList.remove('popup__input-error_active');
  errorElement.textContent = '';
};

const checkInputValidity = (formElement, inputElement) => {
  console.log(inputElement.validity);
  if (inputElement.validity.tooShort) {
    showInputError(formElement, inputElement, inputElement.dataset.errorTooShort);
  }
  if (inputElement.validity.valueMissing) {
    showInputError(formElement, inputElement, inputElement.dataset.errorEmpty);
  }
  else if (inputElement.validity.patternMismatch) {
    showInputError(formElement, inputElement, inputElement.dataset.errorPattern);
  }
  else if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage);
  } else {
    hideInputError(formElement, inputElement);
  }
};

const toggleButtonState = (inputList, buttonElement) => {
  if (hasInvalidInput(inputList)) {
    buttonElement.disabled = true;
    buttonElement.classList.add('popup__submit-button_disabled');
  } else {
    buttonElement.disabled = false;
    buttonElement.classList.remove('popup__submit-button_disabled');
  }
}

const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
}

const setEventListeners = (formElement) => {
  const inputList = Array.from(formElement.querySelectorAll('.popup__input'));
  const buttonElement = formElement.querySelector('.popup__submit-button');
  toggleButtonState(inputList, buttonElement);
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', function () {
      checkInputValidity(formElement, inputElement);
      toggleButtonState(inputList, buttonElement);
    });
  });
};



const enableValidation = () => {
  const formList = Array.from(document.querySelectorAll('.popup__form'));
  formList.forEach((formElement) => {
    formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });
    setEventListeners(formElement);
  })
}

enableValidation();