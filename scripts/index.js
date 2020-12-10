import Card from './Card.js';
import FormValidator from './FormValidator.js';


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

// Функция нажатия на ESC
function pressingEscape(evt) {
  const popupIsOpen = document.querySelector('.popup_opened')
  if (evt.key === 'Escape') {
    closePopup(popupIsOpen);
  }
}

// Функуция открытия Popup
export function showPopup(popup) {
  document.addEventListener('keydown', pressingEscape);

  popup.classList.add('popup_opened');
  popup.removeEventListener('click', showPopup);
};

// Функция закрытия Popup
export function closePopup(popup) {
  popup.classList.remove('popup_opened');

  document.removeEventListener('keydown', pressingEscape);
};

// Перебор массива с данными и отправка в функцию AddCard в публичной функции Card
initialCards.forEach(item => {
  const card = new Card(item, '.places-template'); // создаем экземпляр Card
  const cardElement = card.generateCard(); // запускаем публичную функцию в экземпляре

  card.addCard(placesList, cardElement);
});


// Перебор всех попапов 
popups.forEach(popup => {
  popup.addEventListener('mousedown', (evt) => {
    //Проверяем наличие класс при отжатии мышки для дальнейшего закрытия по фону попапов
    if (evt.target.classList.contains('popup') || evt.target.classList.contains('popup__button-close')) {
      closePopup(popup);
    }
  });
});

// Отслеживаем событие отправки формы "Новой карточки"
popupFormAdd.addEventListener("submit", evt => {
  evt.preventDefault() // сброс дефолтной отправки формы
  const newCard = []; // создаем массив для класса Card
  newCard.name = popupFormAdd.querySelector('.popup__input_type_place-name').value; // Значения полей формы 
  newCard.link = popupFormAdd.querySelector('.popup__input_type_photo').value;

  const card = new Card(newCard, '.places-template'); // создаем экземпляр Card
  const cardElement = card.generateCard(); // запускаем публичную функцию в экземпляре

  card.addCard(placesList, cardElement); // Добавляем новую карточку через публичную функцию Card

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

  showPopup(popupProfile);
});

// Отслеживаем событие клика кнопки "добавить карточку" 
profileAddButton.addEventListener('click', () => {
  showPopup(popupAddCard);
});
