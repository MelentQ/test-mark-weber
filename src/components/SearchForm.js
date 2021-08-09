export default class SearchForm {
  /**
   * Форма поиска
   * @param {Object} selectors - объект настроек c CSS селекторами
   * @param {Function} onSubmitCallback - колбэк сабмита
   }}
   */
  constructor({selector}, onSubmitCallback) {
    this._form = document.forms[selector];

    this._rooms = this._form.querySelectorAll('.input_type_rooms');
    this._square = this._form.querySelectorAll('.input_type_square');
    this._price = this._form.querySelectorAll('.input_type_price');
    this._place = this._form.querySelector('.select-input__value');
    this._onSubmit = onSubmitCallback.bind(this);

    this._setEventListeners();
  }

  /**
   * Возвращает значения полей ввода формы в виде объекта
   * @returns {Object}
   */
  getInputsValue() {
    const res = {
      rooms: {},
      square: {},
      price: {}
    };

    this._rooms.forEach(room => {
      res.rooms[room.name] = room.checked;
    })

    this._square.forEach(square => {
      res.square[square.name] = square.value;
    })

    this._price.forEach(price => {
      res.price[price.name] = price.value;
    })

    res.place = this._place.textContent;

    return res;
  }

  /**
   * Назначает события элементам управления
   */
  _setEventListeners() {
    // На сабмит формы
    this._form.addEventListener('submit', this._onSubmit);

    // Назначаем стили при фокусе элемента Checkbox (количество комнат)
    this._rooms.forEach(item => {
      // Определяем контейнер - лейбл.
      const container = item.closest('.checkbox-input');

      this._setFocusEffects(item, container, 'checkbox-input_focused');
      this._fixCheckboxElements(item, container);
    })

    // Назначаем стили при фокусе элемента text (площадь)
    this._square.forEach(item => {
      const container = item.closest('.text-input');

      this._setFocusEffects(item, container, 'text-input_focused');
    })

    // Назначаем стили при фокусе элемента text (цена)
    this._price.forEach(item => {
      const container = item.closest('.text-input');

      this._setFocusEffects(item, container, 'text-input_focused');
    })
  }

  /**
   * Отслеживаем событие фокуса.
   * Например, когда пользователь управляет через Tab.
   * Если в фокусе, то меняем внешний вид обертки
   *
   * @param {Object} element - DOM-элемент инпута
   * @param {Object} elementContainer - DOM-элемент лейбла (обёртки)
   * @param {String} classOnFocus - CSS класс, который применяется при фокусе элемента
   */
  _setFocusEffects(element, elementContainer, classOnFocus) {
    element.addEventListener('focus', () => {
      elementContainer.classList.add(classOnFocus)
    })

    element.addEventListener('blur', () => {
      elementContainer.classList.remove(classOnFocus)
    })
  }

  /**
   * Чтобы редактировать Checkbox, нужно скрыть сам элемент и
   * обернуть его Label, который уже можно кастомизировать.
   * Если Checkbox checked, то меняем внешний вид его обертки.
   *
   * @param {Object} element - DOM-элемент чекбокса
   * @param {Object} elementContainer - DOM-элемент лейбла (обёртки)
   */
  _fixCheckboxElements(element, elementContainer) {
    element.addEventListener('change', () => {
      elementContainer.classList.toggle('checkbox-input_checked');
    })
  }
}
