import { handleImageClick } from './index.js';

export default class Card {
  constructor(data, cardSelector) {
    this._link = data.link;
    this._name = data.name;
    this._cardSelector = cardSelector;
  };

  // Фунция возвращает шаблон карточки из DOM
  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardSelector)
      .content
      .querySelector('.place')
      .cloneNode(true);

    return cardElement;
  };

  // функция удаляет карточку из DOM
  _deleteClickHandler = () => {
    this._element.remove();
  };

  // функция добавляет-удаляет класс на кнопке лайк
  _likeClickHandler = () => {
    this._placeButtonLike.classList.toggle("place__button-like_active");
  };

  // функция вешает слушатели событий
  _setEventListeners = () => {
    const placeButtonRemove = this._element.querySelector(".place__button-remove");
    const placeButtonLike = this._element.querySelector(".place__button-like");

    placeButtonRemove.addEventListener('click', this._deleteClickHandler);
    placeButtonLike.addEventListener('click', this._likeClickHandler);
    this._elementImage.addEventListener('click', () => {
      handleImageClick(this._name, this._link)
    });
  };

  // функция генерирует и возвращает карточку 
  generateCard = () => {
    this._element = this._getTemplate();
    this._elementImage = this._element.querySelector(".place__image");
    this._elementTitle = this._element.querySelector(".place__title");
    this._placeButtonLike = this._element.querySelector(".place__button-like");
    this._setEventListeners();


    this._elementTitle.textContent = this._name;
    this._elementImage.src = this._link;
    this._elementImage.alt = 'Фотография местности ' + this._name;

    return this._element;
  };
};
