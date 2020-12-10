import { showPopup } from './index.js';

export default class Card {
  constructor(data, cardSelector) {
    this._link = data.link;
    this._name = data.name;
    this._cardSelector = cardSelector;
  }

  // Фунция возвращает шаблон карточки
  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardSelector)
      .content
      .querySelector('.place')
      .cloneNode(true);

    return cardElement;
  }

  // функция удаляет карточку
  _deleteClickHandler = () => {
    this._element.remove();
  }

  // функция добавляет-удаляет класс на кнопке лайк
  _likeClickHandler = () => {
    const placeButtonLike = this._element.querySelector(".place__button-like");

    placeButtonLike.classList.toggle("place__button-like_active");
  }

  // функция вешает слушатели событий
  _setEventListeners = () => {
    const placeButtonRemove = this._element.querySelector(".place__button-remove");
    const placeButtonLike = this._element.querySelector(".place__button-like");
    const placeImage = this._element.querySelector(".place__image");

    placeButtonRemove.addEventListener('click', this._deleteClickHandler);
    placeButtonLike.addEventListener('click', this._likeClickHandler);
    placeImage.addEventListener('click', evt => {
      const popupElemImg = document.querySelector('.popup__image');
      const popupElemCaptain = document.querySelector('.popup__caption');

      const popupImage = document.querySelector('#popup-image');

      popupElemImg.src = evt.target.src;
      popupElemCaptain.textContent = this._name;

      showPopup(popupImage); // импортированная фунция из index.js
    });
  }

  // функция генерирует карточку
  generateCard = () => {
    this._element = this._getTemplate();
    this._setEventListeners();

    const elementTitle = this._element.querySelector(".place__title");
    const elementImage = this._element.querySelector(".place__image");

    elementTitle.textContent = this._name;
    elementImage.src = this._link;
    elementImage.alt = 'Фотография местности ' + this._name;

    return this._element;
  }

  // функция добавляет карточку на страницу
  addCard = (container, cardElement) => {
    container.prepend(cardElement);
  }
}
