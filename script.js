let elements = document.querySelector('.elements');

const profileTC = document.querySelector('.profile__text-container');
const profileTitle = profileTC.querySelector('.profile__title');
const profileSubtitle = profileTC.querySelector('.profile__subtitle');
const profileEditButton = profileTC.querySelector('.profile__edit-button');
const popupEdit = document.querySelector('#popup-edit');
const popupEditSubmitButton = popupEdit.querySelector('.popup__submit-button');
const profileEditCloseButton = popupEdit.querySelector('.popup__close-button');

profileEditButton.addEventListener('click', function() {
  openPopup(popupEdit);
});

profileEditCloseButton.addEventListener('click', function() {
  closePopup(popupEdit);
});

popupEditSubmitButton.addEventListener('click', addValueToProfile);

function addValueToProfile(evt){
  evt.preventDefault();
  const titleValue = popupEdit.querySelector('#popup__input-1').value;
  const subtitleValue = popupEdit.querySelector('#popup__input-2').value;
  profileTitle.textContent = titleValue;
  profileSubtitle.textContent = subtitleValue;
  closePopup(popupEdit);
}

function openPopup(element) {
  element.classList.add('popup_active');
}

function closePopup(element) {
  element.classList.remove('popup_active');
}


const profileAddButton = document.querySelector('.profile__add-button');
const popupAdd = document.querySelector('#popup-add');

profileAddButton.addEventListener('click', function(){
    openPopup(popupAdd);
});



function addCard (cardName, cardImgSrc) {
  const cardList = document.querySelector('.elements__cards');
  const cardTemplate = document.querySelector('#card-template').content;
  let cardElement = cardTemplate.querySelector('.card').cloneNode(true);

    cardElement.querySelector('.card__subtitle').textContent = cardName;
    cardElement.querySelector('.card__image').src = cardImgSrc;

    cardElement.querySelector('.card__heart-button').addEventListener('click', function(evt) {
        evt.target.classList.toggle('card__heart-button_active');
    });

    cardElement.querySelector('.card__delete-button').addEventListener('click', function() {
      cardElement.remove();
    });

    cardElement.querySelector('.card__image').addEventListener('click', function(evt) {
      showCard(evt.target.src, evt.target.closest('.card').querySelector('.card__subtitle').textContent);
    });

    cardList.prepend(cardElement);
}


function showCard(imgSrc, label) {
  
  const popupCard = document.querySelector('.popup-card');
  openPopup(popupCard);
  popupCard.querySelector('.popup__image').src = imgSrc;
  popupCard.querySelector('.popup__label').textContent = label;

  popupCard.querySelector('.popup__close-button').addEventListener('click', function(){
    closePopup(popupCard);
  });
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
  addCard(item.name, item.link);
});

const popupAddSubmitButton = popupAdd.querySelector('.popup__submit-button');

popupAddSubmitButton.addEventListener('click', function(evt){
    evt.preventDefault();
    const addPopupName = document.querySelector('#popup-add__input-1');
    const addPopupImgSrc = document.querySelector('#popup-add__input-2');

    addCard(addPopupName.value, addPopupImgSrc.value);

    closePopup(popupAdd);
});

const popupAddCloseButton = popupAdd.querySelector('.popup__close-button');

popupAddCloseButton.addEventListener('click', function() {
    closePopup(popupAdd);
});



