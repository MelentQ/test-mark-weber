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
    this._image = this._preview.querySelector('.links-with-preview__image');

    this._overlay = document.querySelector('.page__overlay');

    this._data = data;

    this._renderLinks();
  }

  /**
   * Отрисовывет ссылки на странице,
   * добавляет им события
   */
  _renderLinks() {
    this._data.forEach(linkData => {
      const linkContainer = this._getTemplateBySelector('.links-with-preview__link-template', this._linksContainer);
      const link = linkContainer.querySelector('.link');

      // Рисуем саму ссылку на странице
      link.textContent = linkData.linkName;
      link.href = linkData.href;

      // При наведении должен отображаться соответствующий ей контент:
      // Превью с изображением, заголовком и описанием.
      this._setHoverEffect(link, linkData.image, linkData.previewTitle, linkData.previewDescription);

      this._linksContainer.append(linkContainer);
    });
  }

  /**
   * Назначает событие наведения на ссылку, при котором появляется ее превью
   * @param {Object} link - DOM-элемент ссылки, на неё будет добавляться событие
   * @param {String} previewTitle - заголовок превью для этой ссылки
   * @param {String} previewDescription - описание превью для этой ссылки
   */
  _setHoverEffect(link, previewImage, previewTitle, previewDescription) {
    link.addEventListener('mouseover', () => {
      const image = require(`../images/complexes/${previewImage}`);

      this._image.src = image;
      this._image.alt = previewTitle;
      this._title.textContent = previewTitle;
      this._description.textContent = previewDescription;

      this._preview.classList.add("links-with-preview__preview_opened");

      this._overlay.classList.add("page__overlay_focused");
    })

    link.addEventListener('mouseout', () => {
      this._title.textContent = "";
      this._description.textContent = "";
      this._preview.classList.remove("links-with-preview__preview_opened");

      this._overlay.classList.remove("page__overlay_focused");
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
