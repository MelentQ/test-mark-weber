export default class BackgroundSlider {
  /**
   * Слайдер на заднем фоне интро.
   * Переключается только кнопками.
   * Также меняет содержимое заголовка интро.
   * Туториал: https://www.youtube.com/watch?v=2Bo619QsSE4
   * @param {Object} selectors - объект с селекторами
   */
  constructor({sliderContainerSelector, sliderTrackSelector, sliderItemSelector}, data) {
    this._currentSlide = 0;
    this._position = 0;

    this._container = document.querySelector(sliderContainerSelector);
    this._track = this._container.querySelector(sliderTrackSelector);

    this._data = data;
    this._generateSlides(this._data);

    this._items = this._track.querySelectorAll(sliderItemSelector);
    this._itemsCount = this._items.length;

    this._btnContainer = document.querySelector('.intro__toggle-btns');
    this._btnPrev = this._btnContainer.querySelector('.intro__toggle-btn_type_prev');
    this._btnNext = this._btnContainer.querySelector('.intro__toggle-btn_type_next');

    this._itemWidth = this._container.clientWidth;

    this._setEventListeners();
    this._checkBtns();

    this._titleElement = document.querySelector('.intro__title');
  }

  _generateSlides(data) {
    data.forEach(slide => {
      if (slide.type === "video") {
        const slideContainer = this._getTemplateBySelector('.background-slider__slide-template_type_video');

        const videoElement = slideContainer.querySelector('.background-slider__media');

        const videoPath = slide.fileName;
        const video = require(`../images/intro/${videoPath}`);

        videoElement.src = video;

        this._track.append(slideContainer);
      }

      if (slide.type === "image") {
        const slideContainer = this._getTemplateBySelector('.background-slider__slide-template_type_image');

        const imageElement = slideContainer.querySelector('.background-slider__media');

        const imagePath = slide.fileName;
        const image = require(`../images/intro/${imagePath}`);

        imageElement.src = image;
        imageElement.alt = slide.title;

        this._track.append(slideContainer);
      }
    })
  }

  _setEventListeners() {
    this._btnPrev.addEventListener('click', () => {
      this._checkItemWidth();
      this._position += this._itemWidth;
      this._currentSlide--;
      this._updateTitle();

      this._setPosition();
    })

    this._btnNext.addEventListener('click', () => {
      this._checkItemWidth();
      this._position -= this._itemWidth;
      this._currentSlide++;
      this._updateTitle();

      this._setPosition();
    })
  }

  _checkItemWidth() {
    this._itemWidth = this._container.clientWidth;
  }

  _setPosition() {
    this._track.style.transform = `translateX(${this._position}px)`;

    this._checkBtns();
  }

  _checkBtns() {
    this._position === 0 ?
      this._btnPrev.setAttribute('disabled', 'disabled') :
      this._btnPrev.removeAttribute('disabled');

    const maxPos = (this._itemsCount - 1) * this._itemWidth;
    this._position === -maxPos ?
      this._btnNext.setAttribute('disabled', 'disabled') :
      this._btnNext.removeAttribute('disabled');
  }

  /**
   * Обновляет заголовок на странице в соответствии со слайдом
   */
  _updateTitle() {
    // Первое, что пришло в голову. Просто хранить порядковый номер слайда и
    // брать для него данные из элемента массива, индекс которого равен номеру слайда.
    // Короче на прямую заголовок и слайд никак не связаны.
    this._titleElement.textContent = this._data[this._currentSlide].title || "Ошибка, заголовок не задан!";
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
