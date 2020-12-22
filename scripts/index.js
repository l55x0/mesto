import Section from './Section.js';
import Card from './Card.js';
import FormValidator from './FormValidator.js';
import Popup from './Popup.js';
import PopupWithImage from './PopupWithImage.js';



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
const popupElemImg = document.querySelector('.popup__image');
const popupElemCaptain = document.querySelector('.popup__caption');
const popupImage = document.querySelector('#popup-image');
// Выбираем формы по id 
const popupFormAdd = document.querySelector('#popup-form-add');
const popupFormEdit = document.querySelector('#popup-form-edit');
// Выбираем елементы форм
const popupNameField = document.querySelector('.popup__input_type_author');
const popupStatusField = document.querySelector('.popup__input_type_status');
// Выбираем элементы блока Profile
const profileTitle = document.querySelector('.profile__author');
const profileSubtitle = document.querySelector('.profile__status');
const profileEditButton = document.querySelector('.profile__button-edit');
const profileAddButton = document.querySelector('.profile__button-add');
// Выбираем контейнер для карточек
const placesList = document.querySelector('.places');

// конфиг селекторов Popup
const validationConfigPopup = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button-submit',
  inputInvalidClass: 'popup__input_state_invalid',
  buttonInvalidClass: 'popup__button-submit_invalid',
};

const popupIsOpen = new Popup('#popup-profile');

// Отрисовка Карточек
const cardsList = new Section({
  data: initialCards,
  renderer: (item) => {
    const card = new Card({
      data: item,
      handleCardClick: (name, link) => {
        const popupImage = new PopupWithImage({
          name: name,
          link: link
        }, '#popup-image');
        popupImage.open();
        popupImage.setEventListeners();
      }
    }, '.places-template');
    const cardElement = card.generateCard();
    cardsList.setItem(cardElement);
  },
},
  '.places'
);

// Запуск перебора всех карточек
cardsList.renderItems();

// Отслеживаем событие отправки формы "Новой карточки"
popupFormAdd.addEventListener("submit", evt => {
  evt.preventDefault() // сброс дефолтной отправки формы
  const newCard = {}; // создаем объект для отправи в класс Card
  newCard.name = popupFormAdd['popup-input-place-name'].value; // Значения полей формы 
  newCard.link = popupFormAdd['popup-input-url'].value;

  addCard(placesList, createCard(newCard)); // Добавляем новую карточку заполненую в форме юзером

  closePopup(popupAddCard); // закрываем форму
  popupFormAdd.reset(); // сбрасываем значения формы
});

// Отслеживаем событие отправки формы "Редактирования Profile" и отправляем полученые значения 
popupFormEdit.addEventListener("submit", evt => {
  evt.preventDefault();

  profileTitle.textContent = popupNameField.value; // Значения полей формы 
  profileSubtitle.textContent = popupStatusField.value;

  closePopup(popupProfile);
  popupFormEdit.reset();
});

// Отслеживаем событие клика кнопки "редактировать" 
profileEditButton.addEventListener('click', () => {

  popupNameField.value = profileTitle.textContent; // Значения полей формы 
  popupStatusField.value = profileSubtitle.textContent;

  popupIsOpen.open();
  popupIsOpen.setEventListeners();
  // showPopup(popupProfile);
});

// Отслеживаем событие клика кнопки "добавить карточку" 
profileAddButton.addEventListener('click', () => {
  showPopup(popupAddCard);
});

// Создаем валидацию для формы редактирования профиля
const editPupupValidator = new FormValidator(validationConfigPopup, popupFormEdit);
editPupupValidator.enableValidation();

// Создаем валидацию для формы добавления новой картоки
const addPupupValidator = new FormValidator(validationConfigPopup, popupFormAdd);
addPupupValidator.enableValidation();


// // Функция нажатия на ESC
// function pressingEscape(evt) {
//   if (evt.key === 'Escape') {
//     const openedPopup = document.querySelector('.popup_opened')
//     closePopup(openedPopup);
//   }
// };


// // Функуция открытия Popup
// function showPopup(popup) {
//   document.addEventListener('keydown', pressingEscape);

//   popup.classList.add('popup_opened');
// };

// // Функция закрытия Popup
// function closePopup(popup) {
//   popup.classList.remove('popup_opened');

//   document.removeEventListener('keydown', pressingEscape);
// };

// // Функция создает и возвращает карточку
// function createCard(data) {
//   const card = new Card(data, '.places-template'); // создаем экземпляр Card
//   const cardElement = card.generateCard(); // запускаем публичную функцию в экземпляре

//   return cardElement
// };


// // функция добавляет карточку на страницу
// function addCard(container, cardElement) {
//   container.prepend(cardElement);
// };

// // Перебор массива с данными и отправка в функцию AddCard в публичной функции Card
// initialCards.forEach(item => {
//   addCard(placesList, createCard(item));
// });

// // Перебор всех попапов 
// popups.forEach(popup => {
//   popup.addEventListener('mousedown', (evt) => {
//     //Проверяем наличие класс при отжатии мышки для дальнейшего закрытия по фону попапов
//     if (evt.target.classList.contains('popup') || evt.target.classList.contains('popup__button-close')) {
//       closePopup(popup);
//     }
//   });
// });

// // Функция клика на фото (открытие попапа)
// export function handleImageClick(name, link) {
//   popupElemImg.src = link;
//   popupElemCaptain.textContent = name;

//   showPopup(popupImage);
// };