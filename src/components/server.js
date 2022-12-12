import {profileTitle, profileSubtitle, profilePhoto, cardList} from './constants.js';
import {createCard} from './card.js';

export function refreshProfile() {
    fetch('https://nomoreparties.co/v1/plus-cohort-15/users/me', {
    headers: {
        authorization: 'b79a7bcf-c1ec-44a0-a9b3-23fd8093a32f'
    }
    })
    .then((res) => {
      if(res.ok) {
        return res.json();
      }
      return Promise.reject(res.status);
    })
    .then((data) => {
      profileTitle.textContent = data.name;
      profileSubtitle.textContent = data.about;
      profilePhoto.src = data.avatar;
    })
    .catch((err) => {
      console.error(`Ошибка: ${err}`);
    })
  }

  export function refreshCards() {
    fetch('https://nomoreparties.co/v1/plus-cohort-15/cards', {
        headers: {
            authorization: 'b79a7bcf-c1ec-44a0-a9b3-23fd8093a32f'
        }
    })
    .then((res) => {
        if(res.ok) {
            return res.json();
        }
        return Promise.reject(res.status);
    })
    .then((cards) => {
//        console.log(cards);
        cards.forEach((item) => {
            console.log(item.link);
            cardList.prepend(createCard(item.name, item.link));
        });
    })
    .catch((err) => {
        console.error(`Ошибка: ${err}`);
    })
  }
