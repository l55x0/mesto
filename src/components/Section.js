export default class Section {
  constructor({ renderer }, containerSelector) {
    this._renderer = renderer;
    this._container = document.querySelector(`${containerSelector}`);
  }

  // Метод перебирает элементы и применяет к ним функцию колл бэк
  renderItems(items) {
    items.forEach((item) => {
      this._renderer(item);
    });
  }
  // Метод добавляет элементы в контейнер на страницу
  setItem(element) {
    this._container.append(element);
  }

  setItemUp(element) {
    this._container.prepend(element);
  }
}
