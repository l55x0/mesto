export default class Api {
  constructor({ baseUrl, token, groupId }) {
    this._address = baseUrl;
    this._token = token;
    this._groupId = groupId;
  }

  getInitialCards() {
    return fetch(`${this._address}/${this._groupId}/cards`, {
      headers: {
        authorization: this._token,
      },
    }).then((res) =>
      res.ok ? res.json() : Promise.reject(`Ошибка ${res.status}`),
    );
  }

  getInfoUser() {
    return fetch(`${this._address}/${this._groupId}/users/me`, {
      headers: {
        authorization: this._token,
      },
    }).then((res) =>
      res.ok ? res.json() : Promise.reject(`Ошибка ${res.status}`),
    );
  }

  editInfoUser(data) {
    return fetch(`${this._address}/${this._groupId}/users/me`, {
      method: "PATCH",
      headers: {
        authorization: this._token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: data["popup-input-name"],
        about: data["popup-input-status"],
      }),
    }).then((res) =>
      res.ok ? res.json() : Promise.reject(`Ошибка ${res.status}`),
    );
  }

  addCard(data) {
    return fetch(`${this._address}/${this._groupId}/cards`, {
      method: "POST",
      headers: {
        authorization: this._token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: data["popup-input-place-name"],
        link: data["popup-input-url"],
      }),
    }).then((res) =>
      res.ok ? res.json() : Promise.reject(`Ошибка ${res.status}`),
    );
  }

  removeCard(id) {
    return fetch(`${this._address}/${this._groupId}/cards/${id}`, {
      method: "DELETE",
      headers: {
        authorization: this._token,
      },
    }).then((res) =>
      res.ok ? res.json() : Promise.reject(`Ошибка ${res.status}`),
    );
  }

  addLike(id) {
    return fetch(`${this._address}/${this._groupId}/cards/likes/${id}`, {
      method: "PUT",
      headers: {
        authorization: this._token,
      },
    }).then((res) =>
      res.ok ? res.json() : Promise.reject(`Ошибка ${res.status}`),
    );
  }

  removeLike(id) {
    return fetch(`${this._address}/${this._groupId}/cards/likes/${id}`, {
      method: "DELETE",
      headers: {
        authorization: this._token,
      },
    }).then((res) =>
      res.ok ? res.json() : Promise.reject(`Ошибка ${res.status}`),
    );
  }

  editUserAvatar(data) {
    return fetch(`${this._address}/${this._groupId}/users/me/avatar`, {
      method: "PATCH",
      headers: {
        authorization: this._token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        avatar: data["popup-input-url-avatar"],
      }),
    }).then((res) =>
      res.ok ? res.json() : Promise.reject(`Ошибка ${res.status}`),
    );
  }
}
