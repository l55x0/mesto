import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
  constructor({ name, link }, containerSelector) {
    super(containerSelector);
    this._popupElemImg = document.querySelector('.popup__image');
    this._popupElemCaptain = document.querySelector('.popup__caption');
    this._name = name;
    this._link = link;
  }

  // Наследуем и доплняем метод из Popup
  open() {
    this._popupElemImg.src = this._link;
    this._popupElemCaptain.textContent = this._name;
    super.open();
  }
}
