import './index.css'
import Api from '../components/Api.js';
import Section from '../components/Section.js';
import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';
import {
  validationConfigPopup,
  profileEditButton,
  profileAddButton,
  popupFormAddContainer,
  popupFormEditContainer,
  popupImageId,
  placesListSelector,
  popupAddCardId,
  popupProfileId,
  profileTitleContainer,
  profileSubtitleContainer,
  popupNameField,
  popupStatusField,
  profileAvatarContainer
} from '../utils/constants.js';


// Экземпляр класса API 
const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1',
  token: '429ceaf1-0a34-48aa-a4c9-c70c2c79ac6e',
  groupId: 'cohort-19'
});

api.getInitialCards()
  .then(result => {
    console.log(result)
    cardsList.renderItems(result)
  })
  .catch(err => console.log(`Error: ${err}`));

api.getInfoUser()
  .then(result => {
    console.log(result);
    profileAvatarContainer.src = result.avatar
    profileTitleContainer.textContent = result.name
    profileSubtitleContainer.textContent = result.about
  })
  .catch(err => console.log(`Error: ${err}`));


// Экземпляр формы с картинкой и тектом
const popupImage = new PopupWithImage(popupImageId);

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
  renderer: (item) => {
    const cardElement = creatureCard(item).generateCard();
    cardsList.setItem(cardElement);
  },
},
  placesListSelector
);

// Константа содержащая в себе карточку с данными из формы
const formAddCard = new PopupWithForm({
  submitForm: (formData) => {
    formData['name'] = formData['popup-input-place-name'];
    formData['link'] = formData['popup-input-url'];
    // api.addCard(formData); // отправка карточки на сервер
    const cardElement = creatureCard(formData).generateCard();
    cardsList.setItemUp(cardElement);
  },
},
  popupAddCardId
);

// Экземпляр класса с информацией юзера
const userInfo = new UserInfo({
  titleContainer: profileTitleContainer,
  subTitleContainer: profileSubtitleContainer
});

// Экземпляр класса с формой для информации о юзере
const formProfile = new PopupWithForm({
  submitForm: (formData) => {
    userInfo.setUserInfo(formData);
    api.editInfoUser(formData)
  },
},
  popupProfileId
);

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
