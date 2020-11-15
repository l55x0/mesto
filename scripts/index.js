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

// Выбираем элементы Popup
const popup = document.querySelector('.popup');
const popupContent = popup.querySelector('.popup__container'); // Выбираем контейнер popup
const popupCloseButton = popupContent.querySelector('.popup__button-close'); // Выбираем элементы контейнера popup и кнопку закрытия
const popupTitle = popupContent.querySelector('.popup__title');
const popupForm = popupContent.querySelector('.popup__form'); // Выбираем форму и элементы формы
const popupNameField = popupForm.querySelector('.popup__input_type_author');
const popupStatusField = popupForm.querySelector('.popup__input_type_status');
const popupSubmitButton = popupForm.querySelector('.popup__button-submit'); // Выбираем кнопу отправить 

// Выбираем элементы блока Profile
const profileEditButton = document.querySelector('.profile__button-edit'); // Выбираем кнопку редактирования
const profileTitle = document.querySelector('.profile__author');
const profileSubtitle = document.querySelector('.profile__status');

// Выбираем блок Places
const placesList = document.querySelector('.places');

// Привязываем стартовое значение в Popap поля
popupNameField.value = profileTitle.textContent;
popupStatusField.value = profileSubtitle.textContent;

// Функуция открытия Popup
function showPopup() {
  popup.classList.add('popup_opened');
  popup.removeEventListener('click', showPopup);
}

// Функция закрытия Popup
function closePopup() {
  popup.classList.remove('popup_opened')
}

// Функция Обработчик «отправки» формы
function formSubmitHandler(event) {
  event.preventDefault();

  // Отправляем значения строк формы на страницу
  profileTitle.textContent = popupNameField.value;
  profileSubtitle.textContent = popupStatusField.value;

  closePopup();
}

function addPlace(place) {
  const placesElement = document.querySelector(".places-template").content.cloneNode(true);

  // Подставляем значения из массива в шаблон HTML
  placesElement.querySelector(".place__title").textContent = place.name;
  placesElement.querySelector(".place__image").src = place.link;
  placesElement.querySelector(".place__image").alt = 'Фотография местности ' + place.name;

  // Отслеживаем событие клика кнопки Лайк
  placesElement.querySelector(".place__button-like").addEventListener('click', function (evt) {
    evt.target.classList.toggle("place__button-like_active");
  });

  placesList.append(placesElement);
}

initialCards.forEach(addPlace);



profileEditButton.addEventListener('click', showPopup); // Отслеживаем событие клика кнопки "редактировать" 
popupCloseButton.addEventListener('click', closePopup); // Отслеживаем событие клика кнопки "закрыть" 
popupForm.addEventListener('submit', formSubmitHandler); // Отслеживаем событие клика кнопки "отправить"