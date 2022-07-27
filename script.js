let elements = document.querySelector('.elements');
/*const deleteButton = elements.querySelector('.card__delete-button');
deleteButton.addEventListener('click', function(evt) {
    const deleteCard = deleteButton.closest('.card');
    evt.target.deleteCard.remove();
});*/


const profileEditButton = document.querySelector('.profile__edit-button');
const editPopup = document.querySelector('#popup-edit');

profileEditButton.addEventListener('click', function() { 
    editPopup.classList.add('popup_active');
});


const editPopupSubmitButton = document.querySelector('.popup__submit-button');
const profieEditCloseButton = document.querySelector('#popup-edit__close-button');


function addValueToProfile (titleValue, subtitleValue) { // довавление title & subtitle из формы в профиль
    const profile = document.querySelector('.profile'); 
    const profileTC = profile.querySelector('.profile__text-container'); // нашли элемент, который заменим

    const profileTemplate = document.querySelector('#profile-template').content; // нашли сделанный шаблон и взяли все содержимое
    const profileTemplateTC = profileTemplate.querySelector('.profile__text-container').cloneNode(true); // в темплейте нашли и клонировали все содержимое 
    profileTemplateTC.querySelector('.profile__title').textContent = titleValue;
    profileTemplateTC.querySelector('.profile__subtitle').textContent = subtitleValue;

    profileTC.replaceWith(profileTemplateTC);
}

editPopupSubmitButton.addEventListener('click', function(event){
    event.preventDefault(); //без этого действия страница обновлялась и символы из формы не попадали в профиль
    const editPopupTitle = document.querySelector('#popup__input-1');
    const editPopupSubtitle = document.querySelector('#popup__input-2');

    addValueToProfile(editPopupTitle.value, editPopupSubtitle.value);

    editPopup.classList.remove('popup_active');
});

profieEditCloseButton.addEventListener('click', function() {
    editPopup.classList.remove('popup_active');
});


const profileAddButton = document.querySelector('.profile__add-button');
const addPopup = document.querySelector('#popup-add');

profileAddButton.addEventListener('click', function(){
    addPopup.classList.add('popup_active');
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
  const body = document.querySelector('.page');
  const popupCardTemplate = document.querySelector('#popup-card-template').content;
  const popupCard = popupCardTemplate.querySelector('.popup-card').cloneNode(true);

  popupCard.querySelector('.popup-card__image').src = imgSrc;
  popupCard.querySelector('.popup-card__label').textContent = label;

  popupCard.querySelector('.popup-card__close-button').addEventListener('click', function(){
    popupCard.remove();
  });
  
  body.append(popupCard);
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

const addPopupSubmitButton = document.querySelector('#popup-add__submit-button');

addPopupSubmitButton.addEventListener('click', function(event){
    event.preventDefault();
    const addPopupName = document.querySelector('#popup-add__input-1');
    const addPopupImgSrc = document.querySelector('#popup-add__input-2');

    addCard(addPopupName.value, addPopupImgSrc.value);

    addPopup.classList.remove('popup_active');
});

const addPopupCloseButton = document.querySelector('#popup-add__close-button');

addPopupCloseButton.addEventListener('click', function() {
    addPopup.classList.remove('popup_active');
});



