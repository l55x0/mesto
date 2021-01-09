import './index.css'
import Section from '../components/Section.js';
import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';
import {
  initialCards,
  validationConfigPopup,
  profileEditButton,
  profileAddButton,
  popupFormAddContainer,
  popupFormEditContainer,
  popupImageContainer,
  placesListContainer,
  popupAddCardContainer,
  popupProfileContainer,
  profileTitleContainer,
  profileSubtitleContainer,
  popupNameField,
  popupStatusField
} from '../utils/constants.js';

// Экземпляр формы с картинкой и тектом
const popupImage = new PopupWithImage(popupImageContainer);

// Функция создающая экземпляр класса Card
function creatureCard(item) {
  const card = new Card({
    data: item,
    handleCardClick: (name, link) => {
      popupImage.open(name, link);
    }
  }, '.places-template');

  return card;
}

// Константа содержащая в себе все карточки
const cardsList = new Section({
  data: initialCards,
  renderer: (item) => {
    const cardElement = creatureCard(item).generateCard();
    cardsList.setItem(cardElement);
  },
},
  placesListContainer
);

// Константа содержащая в себе карточку с данными из формы
const formAddCard = new PopupWithForm({
  submitForm: (formData) => {
    formData['name'] = formData['popup-input-place-name'];
    formData['link'] = formData['popup-input-url'];
    const cardElement = creatureCard(formData).generateCard();
    cardsList.setItem(cardElement);
  },
  container: popupAddCardContainer
});

// Экземпляр класса с информацией юзера
const userInfo = new UserInfo({
  titleContainer: profileTitleContainer,
  subTitleContainer: profileSubtitleContainer
});

// Экземпляр класса с формой для информации о юзере
const formProfile = new PopupWithForm({
  submitForm: (formData) => {
    userInfo.setUserInfo(formData);
  },
  container: popupProfileContainer
});

// Отрисовка карточек
cardsList.renderItems();

// Создаем валидацию для формы редактирования профиля
const editPupupValidator = new FormValidator(validationConfigPopup, popupFormEditContainer);
editPupupValidator.enableValidation();

// Создаем валидацию для формы добавления новой картоки
const addPupupValidator = new FormValidator(validationConfigPopup, popupFormAddContainer);
addPupupValidator.enableValidation();

// Слушатели событий для форм, попапа картинки
popupImage.setEventListeners();
formProfile.setEventListeners();
formAddCard.setEventListeners();

// Отслеживаем событие клика кнопки "редактировать" 
profileEditButton.addEventListener('click', () => {
  const dataUserInfo = userInfo.getUserInfo();
  popupNameField.value = dataUserInfo.title;
  popupStatusField.value = dataUserInfo.subtitle;
  formProfile.open();
});

// Отслеживаем событие клика кнопки "добавить карточку" 
profileAddButton.addEventListener('click', () => {
  formAddCard.open();
});