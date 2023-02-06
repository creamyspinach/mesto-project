export default class Api {
  constructor({url, headers}) {
    this._url = url;
    this._headers = headers;
  }
  // export let profileData;

  // export const setProfileData = (data) => {
  //   profileData = data;
  // }
  
  _checkResponse(res) {
    {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    }
  }

  _makeFetchRequest(method, path, body = false){
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
  
  getProfileRequest(){
    return _makeFetchRequest("GET", '/users/me');
  }
  
  getCardsRequest(){
    return _makeFetchRequest("GET", '/cards');
  }
  
  patchProfileRequest(title, subtitle){
    return _makeFetchRequest("PATCH", '/users/me', {name: title, about: subtitle});
  }
  
  postCardRequest(name, link){
    return _makeFetchRequest("POST", '/cards', {name: name, link: link});
  }
  
  patchAvatarRequest(avatar){
    return _makeFetchRequest("PATCH", '/users/me/avatar', {avatar: avatar});
  }
  
  deleteCardRequest(cardId){
    return _makeFetchRequest("DELETE", `/cards/${cardId}`);
  }
  
  putCardLikeRequest(cardId){
    return _makeFetchRequest("PUT", `/cards/likes/${cardId}`);
  }
  
  deleteCardLikeRequest(cardId){
    return _makeFetchRequest("DELETE", `/cards/likes/${cardId}`);
  }
}