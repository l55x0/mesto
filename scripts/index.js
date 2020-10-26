// Выбираем элементы Popup
const popup = document.querySelector('.popup');
const popupContent = popup.querySelector('.popup__container'); // Выбираем контейнер popup
const popupCloseButton = popup.querySelector('.popup__close'); // Выбираем элементы контейнера popup
const popupTitle = popup.querySelector('.popup__title');
const popupForm = popup.querySelector('.popup__input-container'); // Выбираем форму
const popupNameField = popupForm.querySelector('.popup__input_type_author');
const nameField = popupForm.querySelector('.popup__input_type_status');

// Подключаем элементы блока Profile
const profileEditButton = document.querySelector('.button_type_edit'); // Выбираем кнопку редактирования
const profileTitle = document.querySelector('.profile__author');
const profileSubtitle = document.querySelector('.profile__status');

// Функуция открытия Popup
function showPopup() {
  popup.classList.add('popup_opened');
  popup.removeEventListener('click', showPopup);
}

// функция закрытия Popup
function closePopup() {
  popup.classList.remove('popup_opened')
}

profileEditButton.addEventListener('click', showPopup);
popupCloseButton.addEventListener('click', closePopup);