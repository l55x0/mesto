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


// Константа содержащая в себе все карточки
const cardsList = new Section({
  data: initialCards,
  renderer: (item) => {
    const card = new Card({
      data: item,
      handleCardClick: (name, link) => {
        const popupImage = new PopupWithImage({
          name: name,
          link: link
        }, popupImageContainer);
        popupImage.open();
        popupImage.setEventListeners();
      }
    }, '.places-template');
    const cardElement = card.generateCard();
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
    delete formData['popup-input-place-name'];
    delete formData['popup-input-url'];
    const card = new Card({
      data: formData,
      handleCardClick: (name, link) => {
        const popupImage = new PopupWithImage({
          name: name,
          link: link
        }, popupImageContainer);
        popupImage.open();
        popupImage.setEventListeners();
      }
    }, '.places-template');
    const cardElement = card.generateCard();
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

// Отслеживаем событие клика кнопки "редактировать" 
profileEditButton.addEventListener('click', () => {
  popupNameField.value = userInfo.getUserInfo().title;
  popupStatusField.value = userInfo.getUserInfo().subtitle;
  formProfile.open();
  formProfile.setEventListeners();
});

// Отслеживаем событие клика кнопки "добавить карточку" 
profileAddButton.addEventListener('click', () => {
  formAddCard.open();
  formAddCard.setEventListeners();
});