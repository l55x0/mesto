export default class UserInfo {
  constructor({ titleContainer, subTitleContainer }) {
    this._titleContainer = titleContainer;
    this._subTitleContainer = subTitleContainer;
  }

  getUserInfo() {
    this._profileValues = {};
    this._profileValues.title = this._titleContainer.textContent;
    this._profileValues.subtitle = this._subTitleContainer.textContent;
    return this._profileValues;
  }

  setUserInfo(formData) {
    this._titleContainer.textContent = formData['popup-input-name'];
    this._subTitleContainer.textContent = formData['popup-input-status'];
  }
}