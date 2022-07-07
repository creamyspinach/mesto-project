let elements = document.querySelector('.elements');
/*const deleteButton = elements.querySelector('.card__delete-button');
deleteButton.addEventListener('click', function(evt) {
    const deleteCard = deleteButton.closest('.card');
    evt.target.deleteCard.remove();
});*/



const profileEditButton = document.querySelector('.profile__edit-button');
const profileEditPopup = document.querySelector('.popup');

profileEditButton.addEventListener('click', function() {
    profileEditPopup.classList.add('popup_active');
});


const profileEditSubmitButton = document.querySelector('.popup__submit-button');



function addValueToProfile (titleValue, subtitleValue) {
    const profile = document.querySelector('.profile');
    const profileTC = profile.querySelector('.profile__text-container');

    const profileTemplate = document.querySelector('#profile-template').content;
    const profileTemplateTC = profileTemplate.querySelector('.profile__text-container').cloneNode(true);
    
    profileTemplateTC.querySelector('.profile__title').textContent = titleValue;
    profileTemplateTC.querySelector('.profile__subtitle').textContent = subtitleValue;

    profileTC.replaceWith(profileTemplateTC);
}

profileEditSubmitButton.addEventListener('click', function(event){
    event.preventDefault(); //без этого действия страница обновлялась и символы из формы не попадали в профиль
    const popupTitle = document.querySelector('#popup__input-1');
    const popupSubtitle = document.querySelector('#popup__input-2');

    profileEditPopup.classList.remove('popup_active');

    addValueToProfile(popupTitle.value, popupSubtitle.value);
});



