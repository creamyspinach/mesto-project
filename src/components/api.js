import {profileTitle, profileSubtitle, profilePhoto, cardList} from './constants.js';
import {createCard} from './card.js';


export const cohortId = 'plus-cohort-15'
export const config = {
  url: `https://nomoreparties.co/v1/${cohortId}`,
  headers: {
    authorization: 'b79a7bcf-c1ec-44a0-a9b3-23fd8093a32f',
    'Content-Type': 'application/json'
  }
}

export let profileData;
export let nearlyDeletedCardId;

export const setProfileData = (data) => {
  profileData = data;
}

export const makeFetchRequest = (method, path, body = false) => {
  const request = {
    method: method,
    headers: config.headers
  }
  if (body) {
    request.body = JSON.stringify(body);
  }
  return fetch(config.url + path, request)
  .then((res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(res.status);
  })
}

export const getProfileRequest = () => {
  return makeFetchRequest("GET", '/users/me');
}

export const getCardsRequest = () => {
  return makeFetchRequest("GET", '/cards');
}

export const patchProfileRequest = (title, subtitle) => {
  return makeFetchRequest("PATCH", '/users/me', {name: title, about: subtitle});
}

export const postCardRequest = (name, link) => {
  return makeFetchRequest("POST", '/cards', {name: name, link: link});
}

export const patchAvatarRequest = (avatar) => {
  return makeFetchRequest("PATCH", '/users/me/avatar', {avatar: avatar});
}

export const deleteCardRequest = (cardId) => {
  return makeFetchRequest("DELETE", `/cards/${cardId}`);
}

export const putCardLikeRequest = (cardId) => {
  return makeFetchRequest("PUT", `/cards/likes/${cardId}`);
}

export const deleteCardLikeRequest = (cardId) => {
  return makeFetchRequest("DELETE", `/cards/likes/${cardId}`);
}

