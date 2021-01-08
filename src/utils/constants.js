// массив 6 стандартных карточек 
export const initialCards = [
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

// конфиг селекторов Popup
export const validationConfigPopup = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button-submit',
  inputInvalidClass: 'popup__input_state_invalid',
  buttonInvalidClass: 'popup__button-submit_invalid',
};

// Выбираем элементы Popup's
export const popupProfileContainer = document.querySelector('#popup-profile');
export const popupAddCardContainer = document.querySelector('#popup-add-card');
export const popupImageContainer = document.querySelector('#popup-image');
// Выбираем формы по id 
export const popupFormAddContainer = document.querySelector('#popup-form-add');
export const popupFormEditContainer = document.querySelector('#popup-form-edit');
// Выбираем елементы форм
export const popupNameField = document.querySelector('.popup__input_type_author');
export const popupStatusField = document.querySelector('.popup__input_type_status');
// Выбираем элементы блока Profile
export const profileTitleContainer = document.querySelector('.profile__author');
export const profileSubtitleContainer = document.querySelector('.profile__status');
export const profileEditButton = document.querySelector('.profile__button-edit');
export const profileAddButton = document.querySelector('.profile__button-add');
// Выбираем контейнер для карточек
export const placesListContainer = document.querySelector('.places');