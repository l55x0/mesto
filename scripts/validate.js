// Функция показа ошибки
function showError(form, input, config) {
  const error = form.querySelector(`#${input.name}-error`); // Ищем в DOM поле ошибки по Name
  error.textContent = input.validationMessage; // Текст ошибки равен дефолтному значению ошибок браузера
  input.classList.add(config.inputInvalidClass); // Добавляем класс невалидного инпута
}

// Функция убирающая показал ошибки
function hideError(form, input, config) {
  const error = form.querySelector(`#${input.name}-error`); // Ищем в DOM поле ошибки по Name
  error.textContent = ''; // Убираем текст ошибки
  input.classList.remove(config.inputInvalidClass); // Удаляем класс невалидного инпута
}

// Функция проверяющая валидность поля ввода
function checkInputValidity(form, input, config) {
  // проверяем если не валидно запускаем показ ошибки, если валидно убираем
  if (!input.validity.valid) {
    showError(form, input, config);
  } else {
    hideError(form, input, config);
  }
}

// Фунция проверки состояния кнопки форм
function setButtonState(button, isActive, config) {
  // Если кнопка активна убираем класс и состояние, и наоборот
  if (isActive) {
    button.classList.remove(config.buttonInvalidClass);
    button.disabled = false;
  } else {
    button.classList.add(config.buttonInvalidClass);
    button.disabled = true;
  }
}

// Функция вешает слушатели событий на поля ввода и кнокпи в указаной форме
function setEventListeners(form, config) {
  const inputsList = form.querySelectorAll(config.inputSelector); // Ищем в DOM все поля ввода
  const submitButton = form.querySelector(config.submitButtonSelector); // Ищем в DOM кнопку выбраной формы

  // обходим все поля ввода и вешаем на них слушатели
  inputsList.forEach((input) => {
    input.addEventListener('input', () => {
      checkInputValidity(form, input, config); // проверям валидность формы
      setButtonState(submitButton, form.checkValidity(), config); // проверяем состояние кнопки
    });
  });
}

// Функция включения проверки валидности формы
function enableValidation(config) {
  const forms = document.querySelectorAll(config.formSelector); // ищем в DOM все формы
  // Обходим все формы и вещаем слушатель события
  forms.forEach((form) => {
    setEventListeners(form, config);

    // Вешаем слушатель на сабытие отправки формы
    form.addEventListener('submit', (evt) => {
      evt.preventDefault(); // убираем дефолтное поведение кнопки отправить форму
    });

    const submitButton = form.querySelector(config.submitButtonSelector); // выбираем в DOM кнопку формы
    setButtonState(submitButton, form.checkValidity(), config) // определяем стартовое состояние кропки
  });
}

// конфиг селекторов Popup
const validationConfigPopup = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button-submit',
  inputInvalidClass: 'popup__input_state_invalid',
  buttonInvalidClass: 'popup__button-submit_invalid',
};

enableValidation(validationConfigPopup); // Запускаем валидацию для конфига Popup