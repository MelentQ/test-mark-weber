export default class BackgroundSlider {
  /**
   * Слайдер на заднем фоне интро.
   * Переключается только кнопками.
   * Также меняет содержимое заголовка интро.
   * Туториал: https://www.youtube.com/watch?v=2Bo619QsSE4
   * @param {Object} selectors - объект с селекторами
   */
  constructor({sliderContainerSelector, sliderTrackSelector, sliderItemSelector}) {
    this._position = 0;

    this._container = document.querySelector(sliderContainerSelector);
    this._track = this._container.querySelector(sliderTrackSelector);
    this._items = this._track.querySelectorAll(sliderItemSelector);
    this._itemsCount = this._items.length;

    this._btnContainer = document.querySelector('.intro__toggle-btns');
    this._btnPrev = this._btnContainer.querySelector('.intro__toggle-btn_type_prev');
    this._btnNext = this._btnContainer.querySelector('.intro__toggle-btn_type_next');

    this._itemWidth = this._container.clientWidth;

    this._setEventListeners();
    this._checkBtns();
  }

  _setEventListeners() {
    this._btnPrev.addEventListener('click', () => {
      this._position += this._itemWidth;

      this._setPosition();
    })

    this._btnNext.addEventListener('click', () => {
      this._position -= this._itemWidth;

      this._setPosition();
    })
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
}
