import './index.scss';

import {
  backgroundSliderSelectors,
  linksWithPreviewSelectors,
  dropdownSelectors,
  searchFormSelectors
} from '../utils/constants';

import BackgroundSlider from '../components/BackgroundSlider';
import LinksWithPreview from '../components/LinksWithPreview';
import Dropdown from '../components/Dropdown';
import SearchForm from '../components/SearchForm';

import data from '../data/data.json';

const links = data.links;
const slides = data.slides;

new BackgroundSlider(backgroundSliderSelectors, slides);

// TODO: добавить возможность менять фото. Пока меня ограничивает сборка вебпака.
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
