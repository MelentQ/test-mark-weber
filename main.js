(()=>{"use strict";(()=>{function e(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var t=function(){function t(e){var i=e.sliderContainerSelector,n=e.sliderTrackSelector,r=e.sliderItemSelector;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this._position=0,this._container=document.querySelector(i),this._track=this._container.querySelector(n),this._items=this._track.querySelectorAll(r),this._itemsCount=this._items.length,this._btnContainer=document.querySelector(".intro__toggle-btns"),this._btnPrev=this._btnContainer.querySelector(".intro__toggle-btn_type_prev"),this._btnNext=this._btnContainer.querySelector(".intro__toggle-btn_type_next"),this._itemWidth=this._container.clientWidth,this._setEventListeners(),this._checkBtns()}var i,n;return i=t,(n=[{key:"_setEventListeners",value:function(){var e=this;this._btnPrev.addEventListener("click",(function(){e._position+=e._itemWidth,e._setPosition()})),this._btnNext.addEventListener("click",(function(){e._position-=e._itemWidth,e._setPosition()}))}},{key:"_setPosition",value:function(){this._track.style.transform="translateX(".concat(this._position,"px)"),this._checkBtns()}},{key:"_checkBtns",value:function(){0===this._position?this._btnPrev.setAttribute("disabled","disabled"):this._btnPrev.removeAttribute("disabled");var e=(this._itemsCount-1)*this._itemWidth;this._position===-e?this._btnNext.setAttribute("disabled","disabled"):this._btnNext.removeAttribute("disabled")}}])&&e(i.prototype,n),t}();function i(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var n=function(){function e(t,i){var n=t.containerSelector;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._container=document.querySelector(n),this._linksContainer=this._container.querySelector(".links-with-preview__list"),this._preview=this._container.querySelector(".links-with-preview__preview"),this._title=this._preview.querySelector(".links-with-preview__image-title"),this._description=this._preview.querySelector(".links-with-preview__image-description"),this._data=i,this._renderLinks()}var t,n;return t=e,(n=[{key:"_renderLinks",value:function(){var e=this;this._data.links.forEach((function(t){var i=e._getTemplateBySelector(".links-with-preview__link-template",e._linksContainer),n=i.querySelector(".link");n.textContent=t.linkName,n.href=t.href,e._setHoverEffect(n,t.previewTitle,t.previewDescription),e._linksContainer.append(i)}))}},{key:"_setHoverEffect",value:function(e,t,i){var n=this;e.addEventListener("mouseover",(function(){n._title.textContent=t,n._description.textContent=i,n._preview.classList.add("links-with-preview__preview_opened")})),e.addEventListener("mouseout",(function(){n._title.textContent="",n._description.textContent="",n._preview.classList.remove("links-with-preview__preview_opened")}))}},{key:"_getTemplateBySelector",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document;return t.querySelector(e).content.children[0].cloneNode(!0)}}])&&i(t.prototype,n),e}();const r=JSON.parse('{"links":[{"linkName":"Северный парк","href":"#","previewTitle":"Северный парк","previewDescription":"Жилой комплекс небывалого масштаба с развитой инфраструктурой"},{"linkName":"Ренесанс","href":"#","previewTitle":"Ренесанс","previewDescription":"Жилой комплекс небывалого масштаба с развитой инфраструктурой 2"},{"linkName":"Станция столичная","href":"#","previewTitle":"Станция столичная","previewDescription":"Жилой комплекс небывалого масштаба с развитой инфраструктурой 3"},{"linkName":"Компасс сити","href":"#","previewTitle":"Компасс сити","previewDescription":"Жилой комплекс небывалого масштаба с развитой инфраструктурой 4"},{"linkName":"Лето","href":"#","previewTitle":"Лето","previewDescription":"Жилой комплекс небывалого масштаба с развитой инфраструктурой 5"},{"linkName":"Бруклин","href":"#","previewTitle":"Бруклин","previewDescription":"Жилой комплекс небывалого масштаба с развитой инфраструктурой 6"},{"linkName":"Сказочный сад","href":"#","previewTitle":"Сказочный сад","previewDescription":"Жилой комплекс небывалого масштаба с развитой инфраструктурой 7"},{"linkName":"Монблан","href":"#","previewTitle":"Монблан","previewDescription":"Жилой комплекс небывалого масштаба с развитой инфраструктурой 8"},{"linkName":"Краски","href":"#","previewTitle":"Краски","previewDescription":"Жилой комплекс небывалого масштаба с развитой инфраструктурой 9"}]}');new t({sliderContainerSelector:".background-slider",sliderTrackSelector:".background-slider__track",sliderItemSelector:".background-slider__slide"}),new n({containerSelector:".links-with-preview"},r)})()})();