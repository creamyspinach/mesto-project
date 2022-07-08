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


function addValueToProfile (titleValue, subtitleValue) {
    const profile = document.querySelector('.profile');
    const profileTC = profile.querySelector('.profile__text-container');

    const profileTemplate = document.querySelector('#profile-template').content;
    const profileTemplateTC = profileTemplate.querySelector('.profile__text-container').cloneNode(true);
    
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
    const cardElement = cardTemplate.querySelector('.card').cloneNode(true);

    cardElement.querySelector('.card__subtitle').textContent = cardName;
    cardElement.querySelector('.card__image').src = cardImgSrc;

    cardList.prepend(cardElement);
}

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
})
