export default class Popup {
  constructor(container) {
    this._container = container;
  }

  // Метод открытия попапа
  open() {
    this._container.classList.add('popup_opened');
  }

  // Метод закрытия попапа
  close() {
    this._container.classList.remove('popup_opened');
  }

  // Метод содержащий функционал нажатия на ESC 
  _handleEscClose = evt => {
    if (evt.key === 'Escape') {
      this.close(this._container);
    }
  }

  // Метод клика по зонам контейнера
  _handleClickContainer = (evt) => {
    if (evt.target.classList.contains('popup') || evt.target.classList.contains('popup__button-close')) {
      this.close(this._container);
    }
  }

  // Метод добавляющий слушатели событий
  setEventListeners() {
    document.addEventListener('keydown', this._handleEscClose);
    this._container.addEventListener('click', this.open(this._container));
    this._container.addEventListener('click', this._handleClickContainer);
  }
}