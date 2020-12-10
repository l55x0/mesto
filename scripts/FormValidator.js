export default class FormValidator {
  constructor(config) {
    this._config = config;
  }

  enableValidation = () => {
    const forms = document.querySelectorAll(this._config.formSelector); // ищем в DOM все формы
    // Обходим все формы и вещаем слушатель события
    forms.forEach((form) => {
      this._setEventListeners(form, this._config);

      // Вешаем слушатель на сабытие отправки формы
      form.addEventListener('submit', (evt) => {
        evt.preventDefault(); // убираем дефолтное поведение кнопки отправить форму
        this._disabledButton(submitButton, this._config);
      });

      const submitButton = form.querySelector(this._config.submitButtonSelector); // выбираем в DOM кнопку формы
      this._setButtonState(submitButton, form.checkValidity(), this._config) // определяем стартовое состояние кропки
    });
  }

  // Функция вешает слушатели событий на поля ввода и кнокпи в указаной форме
  _setEventListeners = (form, config) => {
    const inputsList = form.querySelectorAll(config.inputSelector); // Ищем в DOM все поля ввода
    const submitButton = form.querySelector(config.submitButtonSelector); // Ищем в DOM кнопку выбраной формы

    // обходим все поля ввода и вешаем на них слушатели
    inputsList.forEach((input) => {
      input.addEventListener('input', () => {
        this._checkInputValidity(form, input, config); // проверям валидность формы
        this._setButtonState(submitButton, form.checkValidity(), config); // проверяем состояние кнопки
      });
    });
  }

  // Фунция проверки состояния кнопки форм
  _setButtonState = (button, isActive, config) => {
    // Если кнопка активна убираем класс и состояние, и наоборот
    if (isActive) {
      button.classList.remove(config.buttonInvalidClass);
      button.disabled = false;
    } else {
      this._disabledButton(button, config);
    }
  }

  // Функция дизейбла кнопки
  _disabledButton = (button, config) => {
    button.classList.add(config.buttonInvalidClass);
    button.disabled = true;
  }

  // Функция проверяющая валидность поля ввода
  _checkInputValidity = (form, input, config) => {
    // проверяем если не валидно запускаем показ ошибки, если валидно убираем
    if (!input.validity.valid) {
      this._showError(form, input, config);
    } else {
      this._hideError(form, input, config);
    }
  }

  // Функция убирающая показал ошибки
  _hideError = (form, input, config) => {
    const error = form.querySelector(`#${input.name}-error`); // Ищем в DOM поле ошибки по Name
    error.textContent = ''; // Убираем текст ошибки
    input.classList.remove(config.inputInvalidClass); // Удаляем класс невалидного инпута
  }

  // Функция показа ошибки
  _showError = (form, input, config) => {
    const error = form.querySelector(`#${input.name}-error`); // Ищем в DOM поле ошибки по Name
    error.textContent = input.validationMessage; // Текст ошибки равен дефолтному значению ошибок браузера
    input.classList.add(config.inputInvalidClass); // Добавляем класс невалидного инпута
  }

}

// конфиг селекторов Popup
const validationConfigPopup = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button-submit',
  inputInvalidClass: 'popup__input_state_invalid',
  buttonInvalidClass: 'popup__button-submit_invalid',
};

const formValidator = new FormValidator(validationConfigPopup); // Создаем экземпляр класса FormValidator
formValidator.enableValidation(); // запускаем публичную фунцию экземпляра





