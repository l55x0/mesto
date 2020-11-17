// массив 6 стандартных карточек 
const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

// Выбираем элементы Popup's
const popups = document.querySelectorAll('.popup');
const popupProfile = document.querySelector('#popup-profile');
const popupAddCard = document.querySelector('#popup-add-card');
const popupImage = document.querySelector('#popup-image');

// Выбираем формы по id 
const popupFormAdd = document.querySelector('#popup-form-add');
const popupFormEdit = document.querySelector('#popup-form-edit');
// Выбираем елементы форм
const popupNameField = document.querySelector('.popup__input_type_author');
const popupStatusField = document.querySelector('.popup__input_type_status');
const popupNamePlaceField = document.querySelector('.popup__input_type_place-name');
const popupPlacePhoto = document.querySelector('.popup__input_type_photo');

// Выбираем элементы блока Profile
const profileTitle = document.querySelector('.profile__author');
const profileSubtitle = document.querySelector('.profile__status');
const profileEditButton = document.querySelector('.profile__button-edit');
const profileAddButton = document.querySelector('.profile__button-add');

// Выбираем блок Places
const placesList = document.querySelector('.places');

// Функуция открытия Popup
function showPopup(popup) {
  popup.classList.add('popup_opened');

  if (popup === popupProfile) {
    popupNameField.value = profileTitle.textContent;
    popupStatusField.value = profileSubtitle.textContent;
  };

  popup.removeEventListener('click', showPopup);
};

// Функция закрытия Popup
function closePopup(popup) {
  popup.classList.remove('popup_opened');
};

function addPlace(place) {
  const placesElement = document.querySelector(".places-template").content.cloneNode(true);

  // Подставляем значения из массива в шаблон HTML
  placesElement.querySelector(".place__title").textContent = place.name;
  placesElement.querySelector(".place__image").src = place.link;
  placesElement.querySelector(".place__image").alt = 'Фотография местности ' + place.name;

  // Отслеживаем событие клика кнопки Удаление
  placesElement.querySelector(".place__button-remove").addEventListener("click", evt => {
    const place = evt.target.closest(".place");

    if (place) {
      place.remove();
    }
  });

  // Отслеживаем событие клика кнопки Лайк
  placesElement.querySelector(".place__button-like").addEventListener('click', evt => {
    evt.target.classList.toggle("place__button-like_active");
  });

  // Отслеживаем событие клика на картинку
  placesElement.querySelector(".place__image").addEventListener('click', evt => {

    document.querySelector('.popup__image').src = evt.target.src;
    document.querySelector('.popup__caption').textContent = place.name;

    showPopup(popupImage);
  });

  placesList.prepend(placesElement);
}

initialCards.forEach(addPlace); //Выводим данные из массива на страницу

popups.forEach(elem => {
  elem.querySelector('.popup__button-close').addEventListener('click', () => {
    closePopup(elem);
  });
  //Обходим массив попапов и находим нужный
  //и отслеживаем нажатие на кнопку закрытия
});

popupFormAdd.addEventListener("submit", evt => {
  evt.preventDefault()

  const newPlace = []; // Массив для отправки в функцию AddPlace

  newPlace.name = popupFormAdd.querySelector('.popup__input_type_place-name').value; // Значения полей формы 
  newPlace.link = popupFormAdd.querySelector('.popup__input_type_photo').value;

  addPlace(newPlace);

  closePopup(popupAddCard);
  popupFormAdd.reset();
  // Отслеживаем событие отправки формы Новой карточки
  // и отправляем полученые значения в функцию добавления карточки
});

popupFormEdit.addEventListener("submit", evt => {
  evt.preventDefault()

  profileTitle.textContent = popupNameField.value;
  profileSubtitle.textContent = popupStatusField.value;

  closePopup(popupProfile);
  // Отслеживаем событие отправки формы Редактирования Profile
  // и отправляем полученые значения 
});

profileEditButton.addEventListener('click', () => {
  showPopup(popupProfile);
}); // Отслеживаем событие клика кнопки "редактировать" 

profileAddButton.addEventListener('click', () => {
  showPopup(popupAddCard);
}); // Отслеживаем событие клика кнопки "добавить карточку" 



