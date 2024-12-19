export default class FormValidator {
  constructor(config, form) {
    this._config = config;
    this._form = form;
  }

  // Публичная функция запуска валидации
  enableValidation = () => {
    this._inputsList = this._form.querySelectorAll(this._config.inputSelector); // Ищем в DOM все поля ввода
    this._submitButton = this._form.querySelector(
      this._config.submitButtonSelector
    ); // выбираем в DOM кнопку формы
    this._setEventListeners(this._form, this._config, this._submitButton);

    // Вешаем слушатель на сабытие отправки формы
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault(); // убираем дефолтное поведение кнопки отправить форму
      this._disabledButton(this._submitButton, this._config);
    });

    this._setButtonState(
      this._submitButton,
      this._form.checkValidity(),
      this._config
    ); // определяем стартовое состояние кропки
  };

  // Функция вешает слушатели событий на поля ввода и кнокпи в указаной форме
  _setEventListeners = (form, config, button) => {
    // обходим все поля ввода и вешаем на них слушатели
    this._inputsList.forEach((input) => {
      input.addEventListener('input', () => {
        this._checkInputValidity(form, input, config); // проверям валидность формы
        this._setButtonState(button, form.checkValidity(), config); // проверяем состояние кнопки
      });
    });
  };

  // Фунция проверки состояния кнопки форм
  _setButtonState = (button, isActive, config) => {
    // Если кнопка активна убираем класс и состояние, и наоборот
    if (isActive) {
      button.classList.remove(config.buttonInvalidClass);
      button.disabled = false;
    } else {
      this._disabledButton(button, config);
    }
  };

  // Функция дизейбла кнопки
  _disabledButton = (button, config) => {
    button.classList.add(config.buttonInvalidClass);
    button.disabled = true;
  };

  // Функция проверяющая валидность поля ввода
  _checkInputValidity = (form, input, config) => {
    // проверяем если не валидно запускаем показ ошибки, если валидно убираем
    if (!input.validity.valid) {
      this._showError(form, input, config);
    } else {
      this._hideError(form, input, config);
    }
  };

  // Функция убирающая показал ошибки
  _hideError = (form, input, config) => {
    const error = form.querySelector(`#${input.name}-error`); // Ищем в DOM поле ошибки по Name
    error.textContent = ''; // Убираем текст ошибки
    input.classList.remove(config.inputInvalidClass); // Удаляем класс невалидного инпута
  };

  // Функция показа ошибки
  _showError = (form, input, config) => {
    const error = form.querySelector(`#${input.name}-error`); // Ищем в DOM поле ошибки по Name
    error.textContent = input.validationMessage; // Текст ошибки равен дефолтному значению ошибок браузера
    input.classList.add(config.inputInvalidClass); // Добавляем класс невалидного инпута
  };
}
