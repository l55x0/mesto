import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
  constructor(containerSelector) {
    super(containerSelector);
    this._popupElemImg = this._container.querySelector('.popup__image');
    this._popupElemCaptain = this._container.querySelector('.popup__caption');
  }

  // Наследуем и доплняем метод из Popup
  open(name, link) {
    this._popupElemImg.src = link;
    this._popupElemCaptain.textContent = name;
    super.open();
  }
}
