// Выбираем элементы Popup
const popup = document.querySelector('.popup');
const popupContent = popup.querySelector('.popup__container'); // Выбираем контейнер popup
const popupCloseButton = popup.querySelector('.popup__button-close'); // Выбираем элементы контейнера popup и кнопку закрытия
const popupTitle = popup.querySelector('.popup__title');
const popupForm = popup.querySelector('.popup__input-container'); // Выбираем форму и элементы формы
const popupNameField = popupForm.querySelector('.popup__input_type_author');
const popupStatusField = popupForm.querySelector('.popup__input_type_status');
const popupSubmitButton = popup.querySelector('.popup__button-submit'); // Выбираем кнопу отправить 

// Выбираем элементы блока Profile
const profileEditButton = document.querySelector('.profile__button-edit'); // Выбираем кнопку редактирования
const profileTitle = document.querySelector('.profile__author');
const profileSubtitle = document.querySelector('.profile__status');

// Функуция открытия Popup
function showPopup() {
  popup.classList.add('popup_opened');
  popup.removeEventListener('click', showPopup);

  // Привязываем стартовое значение в Popap поля
  popupNameField.value = profileTitle.textContent;
  popupStatusField.value = profileSubtitle.textContent;
}

// Функция закрытия Popup
function closePopup() {
  popup.classList.remove('popup_opened')
}

// Функция Обработчик «отправки» формы
function formSubmitHandler(event) {
  event.preventDefault();

  profileTitle.textContent = popupNameField.value;
  profileSubtitle.textContent = popupStatusField.value;

  closePopup();
}

profileEditButton.addEventListener('click', showPopup); // Отслеживаем событие клика кнопки "редактировать" 
popupCloseButton.addEventListener('click', closePopup); // Отслеживаем событие клика кнопки "закрыть" 
popupSubmitButton.addEventListener('submit', formSubmitHandler); // Отслеживаем событие клика кнопки "отправить" 
