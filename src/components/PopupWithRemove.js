import Popup from './Popup.js';

export default class PopupWithRemove extends Popup {
  constructor({ handleRemoveClick }, containerSelector) {
    super(containerSelector);
    this._popupButton = this._container.querySelector('.popup__button-remove');
    this._handleRemoveClick = handleRemoveClick
  }

  setEventListeners() {
    super.setEventListeners();
    this._popupButton.addEventListener('click', this._handleRemoveClick);
  }
}
