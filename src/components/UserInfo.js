export default class UserInfo {
  constructor({ titleContainer, subTitleContainer }) {
    this._titleContainer = titleContainer;
    this._subTitleContainer = subTitleContainer;
  }

  // Метод вернет объект с информацией со страницы о пользователе
  getUserInfo() {
    this._profileValues = {};
    this._profileValues.title = this._titleContainer.textContent;
    this._profileValues.subtitle = this._subTitleContainer.textContent;
    return this._profileValues;
  }

  // Метод берет нужные данные из массива данных и выводит на страницу
  setUserInfo(formData) {
    this._titleContainer.textContent = formData['popup-input-name'];
    this._subTitleContainer.textContent = formData['popup-input-status'];
  }
}