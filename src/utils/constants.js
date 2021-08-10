export const backgroundSliderSelectors = {
  sliderContainerSelector: '.background-slider',
  sliderTrackSelector: '.background-slider__track',
  sliderItemSelector: '.background-slider__slide'
};

export const linksWithPreviewSelectors = {
  containerSelector: '.links-with-preview'
};

export const dropdownSelectors = {
  containerSelector: '.select-input'
}

export const searchFormSelectors = {
  selector: 'filter'
};

export const squareRangeSliderSelectors = {
  containerSelector: '.filter__container_type_square',
  SliderContainerSelector: '.range-slider_type_square'
}

export const squareRangeSliderSettings = {
  startValues: [32, 186],
  step: 2
}

export const priceRangeSliderSelectors = {
  containerSelector: '.filter__container_type_price',
  SliderContainerSelector: '.range-slider_type_price'
}

export const priceRangeSliderSettings = {
  startValues: [1.5, 17.5],
  step: 0.5,
  round: 1
}
