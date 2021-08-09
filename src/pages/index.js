import './index.scss';

import {
  BackgroundSliderSelectors,
  LinksWithPreviewSelectors,
  SearchFormSelectors
} from '../utils/constants';

import BackgroundSlider from '../components/BackgroundSlider';
import LinksWithPreview from '../components/LinksWithPreview';
import SearchForm from '../components/SearchForm';

import links from '../data/linksWithPreview.json';

new BackgroundSlider(BackgroundSliderSelectors);

// TODO: добавить возможность менять фото. Пока меня ограничивает сборка вебпака.
new LinksWithPreview(LinksWithPreviewSelectors, links);

// // Форма поиска
// new SearchForm(SearchFormSelectors, onSubmit);

// Сабмит формы выведет в консоль все значения полей
function onSubmit(e) {
  e.preventDefault();
  console.log(this.getInputsValue());
}
