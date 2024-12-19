export default class Card {
  constructor(
    {
      data,
      handleCardClick,
      removeClickHandler,
      likeClickHandler,
      currentUserId,
    },
    cardSelector
  ) {
    this._data = data;
    this._link = data.link;
    this._name = data.name;
    this._idOwner = data.owner._id;
    this._id = data._id;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
    this._removeClickHandler = removeClickHandler;
    this._scoreLike = data.likes.length;
    this._likeClickHandler = likeClickHandler;
    this._userId = currentUserId;
  }

  // Метод удаляет карточку из DOM
  deleteCard() {
    this._element.remove();
    this._element = null;
  }

  // Метод вернет id карточки
  getId() {
    return this._id;
  }

  // Метод добавляет-удаляет класс на кнопке лайк
  like(quantity) {
    this._placeButtonLike.classList.toggle('place__button-like_active');
    this._placeScoreLike.textContent = quantity;
  }

  // Метод генерирует и возвращает карточку
  generateCard = () => {
    this._element = this._getTemplate();
    this._elementImage = this._element.querySelector('.place__image');
    this._elementTitle = this._element.querySelector('.place__title');
    this._placeButtonLike = this._element.querySelector('.place__button-like');
    this._placeButtonRemove = this._element.querySelector(
      '.place__button-remove'
    );
    this._placeScoreLike = this._element.querySelector('.place__score-like');

    this._data.likes.forEach((elem) => {
      if (elem._id === this._userId) {
        this._placeButtonLike.classList.add('place__button-like_active');
      }
    });

    if (this._idOwner != this._userId) {
      this._placeButtonRemove.remove();
    }

    this._setEventListeners();

    this._elementTitle.textContent = this._name;
    this._elementImage.src = this._link;
    this._elementImage.alt = 'Фотография местности ' + this._name;
    this._placeScoreLike.textContent = this._scoreLike;

    return this._element;
  };

  // Метод возвращает шаблон карточки из DOM
  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardSelector)
      .content.querySelector('.place')
      .cloneNode(true);

    return cardElement;
  }

  // Метод вешает слушатели событий
  _setEventListeners = () => {
    this._placeButtonRemove.addEventListener('click', this._removeClickHandler);
    this._placeButtonLike.addEventListener('click', this._likeClickHandler);
    this._elementImage.addEventListener('click', () => {
      this._handleCardClick(this._name, this._link);
    });
  };
}
