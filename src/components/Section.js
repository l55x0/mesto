export default class Section {
  constructor({ data, renderer }, container) {
    this._renderedItems = data;
    this._renderer = renderer;
    this._container = container;
  }

  // Метод перебирает элементы и применяет к ним функцию колл бэк
  renderItems() {
    this._renderedItems.forEach(item => this._renderer(item))
  }

  // Метод добавляет элементы в контейнер на страницу
  setItem(element) {
    this._container.prepend(element);
  }
}
