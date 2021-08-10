import {
  backgroundSliderSelectors,
  linksWithPreviewSelectors,
  dropdownSelectors,
  searchFormSelectors,
  squareRangeSliderSelectors,
  squareRangeSliderSettings,
  priceRangeSliderSelectors,
  priceRangeSliderSettings
} from '../utils/constants';

import BackgroundSlider from '../components/BackgroundSlider';
import LinksWithPreview from '../components/LinksWithPreview';
import Dropdown from '../components/Dropdown';
import SearchForm from '../components/SearchForm';
import RangeSlider from '../components/RangeSlider';

import data from '../data/data.json';

import './index.scss';

const links = data.links;
const slides = data.slides;

new BackgroundSlider(backgroundSliderSelectors, slides);

new LinksWithPreview(linksWithPreviewSelectors, links);

const places =  new Dropdown(dropdownSelectors, links);
// Можно добавить новые опции
places.addOption("Не выбрано");
// И назначить опцию по умолчанию
places.setAsSelectedOption("Не выбрано");

// Форма поиска
new SearchForm(searchFormSelectors, onSubmit);

// Сабмит формы выведет в консоль все значения полей
function onSubmit(e) {
  e.preventDefault();
  console.log(this.getInputsValue());
}

// Настройки для каждого слайдера перенес в ../utils/constants
new RangeSlider(squareRangeSliderSelectors, squareRangeSliderSettings);
new RangeSlider(priceRangeSliderSelectors, priceRangeSliderSettings);
