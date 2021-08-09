export default class LinksWithPreview {
  /**
   * Ссылки с предпросмотром
   * @param {Object} selectors - объект с CSS селекторами
   * @param {Object} data - данные в формате массива объектов (см. документацию, которой нет)
   */
  constructor({containerSelector}, data) {
    this._container = document.querySelector(containerSelector);

    this._linksContainer = this._container.querySelector('.links-with-preview__list');

    this._preview = this._container.querySelector('.links-with-preview__preview');
    this._title = this._preview.querySelector('.links-with-preview__image-title');
    this._description = this._preview.querySelector('.links-with-preview__image-description');

    this._data = data;

    this._renderLinks();
  }

  /**
   * Отрисовывет ссылки на странице,
   * добавляет им события
   */
  _renderLinks() {
    this._data.links.forEach(linkData => {
      const linkContainer = this._getTemplateBySelector('.links-with-preview__link-template', this._linksContainer);
      const link = linkContainer.querySelector('.link');

      link.textContent = linkData.linkName;
      link.href = linkData.href;
      this._setHoverEffect(link, linkData.previewTitle, linkData.previewDescription);

      this._linksContainer.append(linkContainer);
    });
  }

  /**
   * Назначает событие наведения на ссылку, при котором появляется ее превью
   * @param {Object} link - DOM-элемент ссылки, на неё будет добавляться событие
   * @param {String} previewTitle - заголовок превью для этой ссылки
   * @param {String} previewDescription - описание превью для этой ссылки
   */
  _setHoverEffect(link, previewTitle, previewDescription) {
    link.addEventListener('mouseover', () => {
      this._title.textContent = previewTitle;
      this._description.textContent = previewDescription;
      this._preview.classList.add("links-with-preview__preview_opened");
    })

    link.addEventListener('mouseout', () => {
      this._title.textContent = "";
      this._description.textContent = "";
      this._preview.classList.remove("links-with-preview__preview_opened");
    })
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
