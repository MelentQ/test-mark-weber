import noUiSlider from '../vendor/NoUiSlider/nouislider.min.js';
import '../vendor/NoUiSlider/nouislider.min.css';

export default class RangeSlider {
  /**
   * Слайдер (ползунок).
   * Сделан по туториалу, оформлен в виде класса.
   * https://youtu.be/kWoAKq7N2Ew
   * Требует плагин noUiSlider - https://refreshless.com/nouislider/
   * @param {Object} selectors - объект с селекторами
   * @param {Object} settings - объект настроек
   */
  constructor({containerSelector, SliderContainerSelector}, {startValues, step, round = 0}) {
    this._container = document.querySelector(containerSelector);
    this._slider = this._container.querySelector(SliderContainerSelector);

    this._inputsContainer = this._container.querySelector('.filter__inputs-container');
    this._minInput = this._inputsContainer.querySelector('.text-input__form-element_type_from');
    this._maxInput = this._inputsContainer.querySelector('.text-input__form-element_type_to');
    this._inputs = [this._minInput, this._maxInput];

    this._minmax = this._getMinMax(this._minInput, this._maxInput);

    /**
     * Число знаков после запятой
     */
    this._round = round;

    this._init(startValues, this._minmax, step);
    this._setEventListeners();
  }

  /**
   * Инициализирует noUiSlider
   * @param {Array of Number} starts - Точки начальных значений
   * @param {Array of Number} minmax - Минимальные и максимальные значения
   * @param {Number} step - Шаг
   */
  _init([start1, Start2], [min, max], step) {
    noUiSlider.create(this._slider, {
      start: [start1, Start2],
      step: step,
      connect: true,
      range: {
        'min': min,
        'max': max
      }
    });

    // Задаём для Aria input'ов title
    // Для accessibility
    const minButton = this._slider.querySelector('.noUi-handle-lower');
    minButton.title = "Min";

    const maxButton = this._slider.querySelector('.noUi-handle-upper');
    maxButton.title = "Max";
  }

  /**
   * Добавляет различные обработчики на события
   */
  _setEventListeners() {
    this._slider.noUiSlider.on('update', (values, handle) => {
      this._inputs[handle].value = Number(values[handle]).toFixed(this._round);
    })

    this._inputs.forEach((input, i) => {
      input.addEventListener('change', (e) => {
        this._setRangeSliderValue(i, e.target.value);
      })

      input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
          e.preventDefault();
          this._setRangeSliderValue(i, e.target.value);
        }
      })
    })
  }

  /**
   * Назначает текущее значение слайдера
   * i = 0 - левый ползунок
   * i = 1 - правый ползунок
   * @param {Number} i - номер ползунка
   * @param {Number} value - новое значение ползунка
   */
  _setRangeSliderValue(i, value) {
    let values = [null, null];
    values[i] = value;

    this._slider.noUiSlider.set(values);
  }

  /**
   * Получает массив с минимальным и максимальным значением пары инпутов.
   * @param {Object} minInput - DOM-элемент инпута для минимального значения
   * @param {Object} maxInput - DOM-элемент инпута для максимального значения
   * @returns {Array of Number} - Массив значений
   */
  _getMinMax(minInput, maxInput) {
    let res = [0, 100];

    const min = minInput.min;
    if (min) { res[0] = +min };

    const max = maxInput.max;
    if (max) { res[1] = +max };

    return res;
  }
}
