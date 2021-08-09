export default class Dropdown {
  /**
   * Дропдаун, выпадающий список.
   *
   * TODO: окно с опциями появляется снизу или сверху в зависимости от свободного пространства.
   * @param {Object} selectors - объект с CSS селекторами
   * @param {Object} data - данные для генерации опций. См. документацию, которой нет.
   */
  constructor({containerSelector}, data) {
    this._container = document.querySelector(containerSelector);
    this._selectBtn = this._container;
    this._btnIcon = this._selectBtn.querySelector('.select-input__icon');
    this._selectedOptionElement = this._selectBtn.querySelector('.select-input__value');
    this._optionsContainerWrapper = this._container.querySelector('.select-input__options-wrapper');
    this._optionsContainer = this._optionsContainerWrapper.querySelector('.select-input__options');
    this._isOpened = false;

    // Array of names (string)
    this._links = this._getLinksList(data);

    this._generateOptions(this._links);
    this.setAsSelectedOption(this._links[0]);
    this._setEventListeners();
  }

  /**
   * Назначает обработчики различным элементам дропдауна
   */
  _setEventListeners() {
    this._selectBtn.addEventListener('click', () => {
      this._isOpened ?
        this._closeOptions() :
        this._openOptions();
    })

    // При открытом окне опций клик в любое место закрывает это окно.
    // Условия нужны, чтобы при клике по кнопке не происходило одновременное открытие и закрытие окна опций.
    document.addEventListener('click', (e) => {
      if(!e.target.classList.contains('select-input') &&
      !e.target.classList.contains('select-input__value') &&
      !e.target.classList.contains('select-input__icon')) {
        this._closeOptions();
      }
    })

    // Закрывает окно при нажатии на Esc
    document.addEventListener('keydown', (e) => {
      if (e.key === "Escape" && this._isOpened) {
        this._closeOptions();
      }
    })
  }

  /**
   * Открывает окно с опциями
   */
  _openOptions() {
    this._optionsContainerWrapper.classList.add('select-input__options-wrapper_opened');
    this._isOpened = true;

    this._btnIcon.classList.add('select-input__icon_opened');
  }

  /**
   * Закрывает окно с опциями
   */
  _closeOptions() {
    this._optionsContainerWrapper.classList.remove('select-input__options-wrapper_opened');
    this._isOpened = false;

    this._btnIcon.classList.remove('select-input__icon_opened');
  }

  /**
   * Рендерит весь список опций на страницу.
   * @param {Array of String} data - массив названий опций
   */
  _generateOptions(data) {
    data.forEach(linkName => {
      this.addOption(linkName);
    });
  }

  /**
   * Добавляет в конец новую вариант выбора.
   * @param {String} optionName - имя опции
   */
  addOption(optionName) {
    const linkElement = this._getTemplateBySelector('.select-input__option-template', this._optionsContainer);
      linkElement.textContent = optionName;

      linkElement.addEventListener('click', () => {
        this.setAsSelectedOption(optionName);
        // Здесь неявно:
        // Также при клике закрывается окно с опциями (_closeOptions),
        // так как происходит клик по всему блоку дропдауна - элементу _selectBtn,
        // Потому что внутри элемента _selectBtn структурно находится элемент со списком опций.
      });

      this._optionsContainer.append(linkElement);
  }

  /**
   * Получает список опций из массива ссылок для предпросмотра.
   * @param {Array} data
   * @returns {Array} - массив ссылок для предпросмотра
   */
  _getLinksList(data) {
    return data.map(link => link.linkName)
  }

  /**
   * Назначает опцию по умолчанию.
   * Опция отобразится, как выбранная.
   * @param {String} option - Строка, описание опции
   */
  setAsSelectedOption(option) {
    this._selectedOptionElement.textContent = option;
  }

  /**
   * Возвращает темплейт-элемент по его селектору
   * @param {String} templateSelector - селектор шаблона
   * @param {Object} container - контейнер, в котором нужно искать шаблон, по умолчанию - document
   * @returns {Object}
   */
   _getTemplateBySelector(templateSelector, container = document) {
    return container
    .querySelector(templateSelector)
    .content
    .children[0]
    .cloneNode(true);
  }
}
