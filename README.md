# Тестовое задание на front-end разработчика в студии "Марк Вебер"

## Ссылки

* [Задание](https://www.notion.so/front-end-0d9693fffaef4869a77635f26dd0e923)

* [GH Pages](https://melentq.github.io/test-mark-weber)

* [Макет в Figma](https://www.figma.com/file/c5UJ6beeIf35Lk1d8Zw4vJ/%D0%A2%D0%B5%D1%81%D1%82%D0%BE%D0%B2%D0%BE%D0%B5-%D0%B7%D0%B0%D0%B4%D0%B0%D0%BD%D0%B8%D0%B5-%D0%BD%D0%B0-front-end-%D1%80%D0%B0%D0%B7%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D1%87%D0%B8%D0%BA%D0%B0?node-id=0%3A1)

## Запуск

`npm install`

### dev mode

`npm run dev`

### production mode

`npm run build`

## Tech Stack

* HTML
* CSS (SCSS)
* JS (ES6)
* Webpack

## Libs & Plugins

* [NoUiSlider](https://refreshless.com/nouislider/)

## Функционал

* Слайдер (карусель) на фоне сделан на чистом JS, переключается только кнопками. Есть возможность добавить любое количество видео или фотографий. Основной заголовок страницы и сами изображения/видео задаются через JSON файл, далее JS динамически генерирует из данных HTML-разметку.
* Ссылки с предпросмотром фотографий ЖК тоже подгружаются из файла JSON.
* Форма: сабмит формы поиска выводит данные полей ввода в консоль в виде объекта.
* Форма: элемент с выбором количества комнат свёрстан через чекбоксы.
* Форма: элемент выпадающего списка (dropdown) свёрстан с нуля.
* Анимации по ТЗ.

## Еще

* Все написано на чистом стеке HTML, CSS, JS без использования библиотек ~~и плагинов.~~
* Изображения и видео оптимизированы.
* SVG оптимизированы.
* Шрифты оптимизированы, переведены во все форматы.
* Для всех интерактивных элементов прописаны :hover и :focus.
* Семантическая вёрстка.
* [Pixel Perfect](https://chrome.google.com/webstore/detail/perfectpixel-by-welldonec/dkaagdgjmgdmbnecmcefdhjekcoceebi?hl=ru) вёрстка.
* ES6 JS классы с простенькой документацией JSDoc.
* По [БЭМ](https://ru.bem.info/).
* Респонсивный дизайн.
* Нет ошибок в [валидаторе](https://validator.w3.org/nu/).
* Использование по максимуму семантических тегов (header, main, section, ul/li и т.д.).
* Отличные показатели по [PageSpeed](https://developers.google.com/speed/pagespeed/insights/?hl=ru) и Lighthouse:
    * Performance: 92%
    * Accessibility: 100%
    * Best Practices: 100%
    * SEO: 100%

## TODO

* Переделать основную сетку, сейчас страшная сетка из div'ов и flex'ов.
* Доработать дропдаун, сейчас он не появляется снизу, если есть свободное место.
* Доработать классы: вынести все селекторы в переменные.
