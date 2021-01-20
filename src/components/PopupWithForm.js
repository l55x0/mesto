import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
  constructor({ submitForm }, containerSelector) {
    super(containerSelector);
    this._submitForm = submitForm;
    this._formContainer = this._container.querySelector('.popup__form');
    this._formButton = this._container.querySelector('.popup__button-submit');
  }

  // Метод собирает информацию с полей формы и возвращает объектом
  _getInputValues() {
    this._inputList = this._formContainer.querySelectorAll('.popup__input');
    this._formValues = {};
    this._inputList.forEach(input => {
      this._formValues[input.name] = input.value;
    });

    return this._formValues;
  }

  close() {
    super.close();
    this._formContainer.reset();
  };

  setEventListeners() {
    super.setEventListeners();
    this._formContainer.addEventListener('submit', this._handleSubmitForm);
  }

  // метод описывает функционал события отправки формы
  _handleSubmitForm = (evt) => {
    evt.preventDefault();
    this._submitForm(this._getInputValues());
    this.close(this._container);
  }

  renderLoading(isLoading) {
    if (isLoading) {
      this._formButton.textContent = 'Сохранение...';
    } else {
      this._formButton.textContent = 'Сохранить';
    }
  }
}