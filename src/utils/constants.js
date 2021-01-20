// конфиг селекторов Popup
export const validationConfigPopup = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button-submit',
  inputInvalidClass: 'popup__input_state_invalid',
  buttonInvalidClass: 'popup__button-submit_invalid'
};

// Выбираем элементы Popup's
export const popupProfileId = '#popup-profile';
export const popupAddCardId = '#popup-add-card';
export const popupImageId = '#popup-image';
export const popupRemoveCardId = '#popup-remove-card';
export const popupEditAvatarId = '#popup-add-avatar';

// Выбираем формы по id 
export const popupFormAddContainer = document.querySelector('#popup-form-add');
export const popupFormEditContainer = document.querySelector('#popup-form-edit');
export const popupFormAddAvatarContainer = document.querySelector('#popup-form-add-avatar');

// Выбираем елементы форм
export const popupNameField = document.querySelector('.popup__input_type_author');
export const popupStatusField = document.querySelector('.popup__input_type_status');
// Выбираем элементы блока Profile
export const profileAvatarContainer = document.querySelector('.profile__avatar')
export const profileTitleContainer = document.querySelector('.profile__author');
export const profileSubtitleContainer = document.querySelector('.profile__status');
export const profileEditButton = document.querySelector('.profile__button-edit');
export const profileAddButton = document.querySelector('.profile__button-add');
// Выбираем контейнер для карточек
export const placesListSelector = '.places';