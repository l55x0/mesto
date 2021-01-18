export default class Api {

  constructor({ baseUrl, token, groupId }) {
    this._address = baseUrl;
    this._token = token;
    this._groupId = groupId;
  }

  getInitialCards() {
    return fetch(`${this._address}/${this._groupId}/cards`, {
      headers: {
        authorization: this._token
      }
    })
      .then(res => res.ok ? res.json() : Promise.reject(`Ошибка ${res.status}`))
  }

  getInfoUser() {
    return fetch(`${this._address}/${this._groupId}/users/me`, {
      headers: {
        authorization: this._token
      }
    })
      .then(res => res.ok ? res.json() : Promise.reject(`Ошибка ${res.status}`))
  }

  editInfoUser(data) {
    return fetch(`${this._address}/${this._groupId}/users/me`, {
      method: 'PATCH',
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: data['popup-input-name'],
        about: data['popup-input-status'],
      })
    })
      .then(res => res.ok ? res.json() : Promise.reject(`Ошибка ${res.status}`))
  }

  addCard(data) {
    return fetch(`${this._address}/${this._groupId}/cards`, {
      method: 'POST',
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: data.name,
        link: data.link
      })
    })
      .then(res => res.ok ? res.json() : Promise.reject(`Ошибка ${res.status}`))
  }

}
