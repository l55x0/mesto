import './index.css';
import Api from '../components/Api.js';
import Section from '../components/Section.js';
import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import PopupWithRemove from '../components/PopupWithRemove.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';
import {
  validationConfigPopup,
  profileEditButton,
  profileAddButton,
  popupFormAddContainer,
  popupFormEditContainer,
  popupFormAddAvatarContainer,
  popupImageId,
  placesListSelector,
  popupAddCardId,
  popupProfileId,
  popupRemoveCardId,
  popupEditAvatarId,
  profileTitleContainer,
  profileSubtitleContainer,
  popupNameField,
  popupStatusField,
  profileAvatarContainer,
} from '../utils/constants.js';

// Глобальная переменная содержащая в себе Id юзера
const userId = {};

// Экземпляр класса API
const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1',
  token: '429ceaf1-0a34-48aa-a4c9-c70c2c79ac6e',
  groupId: 'cohort-19',
});

// Экземпляр формы с картинкой и тектом
const popupImage = new PopupWithImage(popupImageId);

// Экземпляр формы для удаления карточки
const popupRemoveCard = new PopupWithRemove(
  {
    handleRemoveClick: (card) => {
      removeCard(card);
    },
  },
  popupRemoveCardId
);

// Константа содержащая в себе все карточки
const cardsList = new Section(
  {
    renderer: (item) => {
      const cardElement = creatureCard(item).generateCard();
      cardsList.setItem(cardElement);
    },
  },
  placesListSelector
);

// Константа содержащая в себе карточку с данными из формы
const formAddCard = new PopupWithForm(
  {
    submitForm: (formData) => {
      formAddCard.renderLoading(true);
      api
        .addCard(formData)
        .then((res) => {
          const cardElement = creatureCard(res).generateCard();
          cardsList.setItemUp(cardElement);
        })
        .catch((err) => console.log(`Error: ${err}`))
        .finally(formAddCard.renderLoading(false));
    },
  },
  popupAddCardId
);

// Экземпляр класса с информацией юзера
const userInfo = new UserInfo({
  titleContainer: profileTitleContainer,
  subTitleContainer: profileSubtitleContainer,
  avatarConteiner: profileAvatarContainer,
});

// Экземпляр класса с формой для информации о юзере
const formProfile = new PopupWithForm(
  {
    submitForm: (formData) => {
      formProfile.renderLoading(true);
      api
        .editInfoUser(formData)
        .then((res) => {
          userInfo.setUserInfo(res);
        })
        .catch((err) => console.log(`Error: ${err}`))
        .finally(formProfile.renderLoading(false));
    },
  },
  popupProfileId
);

// Экземпляр попапа для смены Аватара
const formProfileAvatar = new PopupWithForm(
  {
    submitForm: (formData) => {
      formProfile.renderLoading(true);
      api
        .editUserAvatar(formData)
        .then((res) => {
          userInfo.setUserInfo(res);
        })
        .catch((err) => console.log(`Error: ${err}`))
        .finally(formProfile.renderLoading(false));
    },
  },
  popupEditAvatarId
);

// Прием объекта по Апи с свервера и перебор элементов
api
  .getInitialCards()
  .then((res) => {
    cardsList.renderItems(res);
  })
  .catch((err) => console.log(`Error: ${err}`));

// Прием информации о пользователе и публикация на странице
api
  .getInfoUser()
  .then((res) => {
    userId.id = res._id;
    userInfo.setUserInfo(res);
  })
  .catch((err) => console.log(`Error: ${err}`));

// Функция удаляет карточку с сервера и страницы, закрывает попап
function removeCard(card) {
  api
    .removeCard(card._id)
    .then((res) => {
      card.deleteCard();
    })
    .catch((err) => console.log(`Error: ${err}`))
    .finally(popupRemoveCard.close());
}

// Функция отправляет инфу о поставленном лайке и активирует его на странице
function addLike(card) {
  api
    .addLike(card.getId())
    .then((res) => {
      card.like(res.likes.length);
    })
    .catch((err) => console.log(`Error: ${err}`));
}

// Функция отправляет инфу о убранном лайке и деактивирует его на странице
function removeLike(card) {
  api
    .removeLike(card.getId())
    .then((res) => {
      card.like(res.likes.length);
    })
    .catch((err) => console.log(`Error: ${err}`));
}

// Функция создающая экземпляр класса Card
function creatureCard(item) {
  const card = new Card(
    {
      data: item,
      handleCardClick: (name, link) => {
        popupImage.open(name, link);
      },
      removeClickHandler: () => {
        popupRemoveCard.open(card);
      },
      likeClickHandler: (evt) => {
        if (!evt.target.classList.contains('place__button-like_active')) {
          addLike(card);
        } else {
          removeLike(card);
        }
      },
      currentUserId: userId.id,
    },
    '.places-template'
  );

  return card;
}

// Создаем экземпляры Валидации для форм
const editPopupValidator = new FormValidator(
  validationConfigPopup,
  popupFormEditContainer
);
const addPopupValidator = new FormValidator(
  validationConfigPopup,
  popupFormAddContainer
);
const addAvatarPopupValidator = new FormValidator(
  validationConfigPopup,
  popupFormAddAvatarContainer
);

// Запускаем валидацию форм
editPopupValidator.enableValidation();
addPopupValidator.enableValidation();
addAvatarPopupValidator.enableValidation();

// Слушатели событий для форм, попапа картинки
popupImage.setEventListeners();
formProfile.setEventListeners();
formAddCard.setEventListeners();
formProfileAvatar.setEventListeners();
popupRemoveCard.setEventListeners();

// Отслеживаем событие клика кнопки "редактировать"
profileEditButton.addEventListener('click', () => {
  const dataUserInfo = userInfo.getUserInfo();
  popupNameField.value = dataUserInfo.name;
  popupStatusField.value = dataUserInfo.about;
  formProfile.open();
});

// Отслеживаем событие клика кнопки "добавить карточку"
profileAddButton.addEventListener('click', () => {
  formAddCard.open();
});

// Отслеживаем событие клика на аватарку
profileAvatarContainer.addEventListener('click', () => {
  formProfileAvatar.open();
});
