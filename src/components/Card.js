export default class Card {
  constructor({ data, handleCardClick }, cardSelector) {
    this._link = data.link;
    this._name = data.name;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;

    // this._like = false;
    // this._scoreLike = data.likes.length;
  };

  // Метод возвращает шаблон карточки из DOM
  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardSelector)
      .content
      .querySelector('.place')
      .cloneNode(true);

    return cardElement;
  };

  // Метод удаляет карточку из DOM
  _deleteClickHandler = () => {
    this._element.remove();
    this._element = null;
  };

  // Метод добавляет-удаляет класс на кнопке лайк
  _likeClickHandler = () => {
    this._placeButtonLike.classList.toggle("place__button-like_active");
    // this._like = !this._like
  };

  // Метод вешает слушатели событий
  _setEventListeners = () => {
    this._placeButtonRemove.addEventListener('click', this._deleteClickHandler);
    this._placeButtonLike.addEventListener('click', this._likeClickHandler);
    this._elementImage.addEventListener('click', () => {
      this._handleCardClick(this._name, this._link)
    });
  };

  // Метод генерирует и возвращает карточку 
  generateCard = () => {
    this._element = this._getTemplate();
    this._elementImage = this._element.querySelector(".place__image");
    this._elementTitle = this._element.querySelector(".place__title");
    this._placeButtonLike = this._element.querySelector(".place__button-like");
    this._placeButtonRemove = this._element.querySelector(".place__button-remove");
    // this._placeScoreLike = this._element.querySelector(".place__score-like");
    this._setEventListeners();


    this._elementTitle.textContent = this._name;
    this._elementImage.src = this._link;
    this._elementImage.alt = 'Фотография местности ' + this._name;
    // this._placeScoreLike.textContent = this._scoreLike;

    return this._element;
  };
};
