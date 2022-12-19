import {profileTitle, profileSubtitle, profilePhoto, cardList} from './constants.js';
import {createCard} from './card.js';
export let profileData = false;

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
      profileData = data;//занес data профиля в переменную, чтобы не выполнять заново запрос при сравнении с владельцем card при добавлении мусорки
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
      cards.forEach((item) => {
          cardList.prepend(createCard(item.name, item.link, item.likes.length, item.owner._id, item._id));
      });
  })
  .catch((err) => {
      console.error(`Ошибка: ${err}`);
  })
}

