export default class UserInfo {
  constructor({ titleContainer, subTitleContainer, avatarConteiner }) {
    this._titleContainer = titleContainer;
    this._subTitleContainer = subTitleContainer;
    this._avatarConteiner = avatarConteiner;
  }

  // Метод вернет объект с информацией со страницы о пользователе
  getUserInfo() {
    this._profileValues = {};
    this._profileValues.name = this._titleContainer.textContent;
    this._profileValues.about = this._subTitleContainer.textContent;
    this._profileValues.avatar = this._avatarConteiner.src;
    return this._profileValues;
  }

  // Метод берет нужные данные из массива данных и выводит на страницу
  setUserInfo(data) {
    this._titleContainer.textContent = data.name;
    this._subTitleContainer.textContent = data.about;
    this._avatarConteiner.src = data.avatar
  }
}