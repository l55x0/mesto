(()=>{"use strict";function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(t,e){for(var r=0;r<e.length;r++){var o=e[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,n(o.key),o)}}function n(e){var n=function(e){if("object"!=t(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!=t(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==t(n)?n:n+""}var r=function(){return t=function t(e){var n=e.baseUrl,r=e.token,o=e.groupId;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._address=n,this._token=r,this._groupId=o},(n=[{key:"getInitialCards",value:function(){return fetch("".concat(this._address,"/").concat(this._groupId,"/cards"),{headers:{authorization:this._token}}).then((function(t){return t.ok?t.json():Promise.reject("Ошибка ".concat(t.status))}))}},{key:"getInfoUser",value:function(){return fetch("".concat(this._address,"/").concat(this._groupId,"/users/me"),{headers:{authorization:this._token}}).then((function(t){return t.ok?t.json():Promise.reject("Ошибка ".concat(t.status))}))}},{key:"editInfoUser",value:function(t){return fetch("".concat(this._address,"/").concat(this._groupId,"/users/me"),{method:"PATCH",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({name:t["popup-input-name"],about:t["popup-input-status"]})}).then((function(t){return t.ok?t.json():Promise.reject("Ошибка ".concat(t.status))}))}},{key:"addCard",value:function(t){return fetch("".concat(this._address,"/").concat(this._groupId,"/cards"),{method:"POST",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({name:t["popup-input-place-name"],link:t["popup-input-url"]})}).then((function(t){return t.ok?t.json():Promise.reject("Ошибка ".concat(t.status))}))}},{key:"removeCard",value:function(t){return fetch("".concat(this._address,"/").concat(this._groupId,"/cards/").concat(t),{method:"DELETE",headers:{authorization:this._token}}).then((function(t){return t.ok?t.json():Promise.reject("Ошибка ".concat(t.status))}))}},{key:"addLike",value:function(t){return fetch("".concat(this._address,"/").concat(this._groupId,"/cards/likes/").concat(t),{method:"PUT",headers:{authorization:this._token}}).then((function(t){return t.ok?t.json():Promise.reject("Ошибка ".concat(t.status))}))}},{key:"removeLike",value:function(t){return fetch("".concat(this._address,"/").concat(this._groupId,"/cards/likes/").concat(t),{method:"DELETE",headers:{authorization:this._token}}).then((function(t){return t.ok?t.json():Promise.reject("Ошибка ".concat(t.status))}))}},{key:"editUserAvatar",value:function(t){return fetch("".concat(this._address,"/").concat(this._groupId,"/users/me/avatar"),{method:"PATCH",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({avatar:t["popup-input-url-avatar"]})}).then((function(t){return t.ok?t.json():Promise.reject("Ошибка ".concat(t.status))}))}}])&&e(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),t;var t,n}();function o(t){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o(t)}function i(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,u(r.key),r)}}function u(t){var e=function(t){if("object"!=o(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var n=e.call(t,"string");if("object"!=o(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==o(e)?e:e+""}var c=function(){return t=function t(e,n){var r=e.renderer;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._renderer=r,this._container=document.querySelector("".concat(n))},(e=[{key:"renderItems",value:function(t){var e=this;t.forEach((function(t){e._renderer(t)}))}},{key:"setItem",value:function(t){this._container.append(t)}},{key:"setItemUp",value:function(t){this._container.prepend(t)}}])&&i(t.prototype,e),Object.defineProperty(t,"prototype",{writable:!1}),t;var t,e}();function a(t){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},a(t)}function l(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,f(r.key),r)}}function s(t,e,n){return(e=f(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function f(t){var e=function(t){if("object"!=a(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var n=e.call(t,"string");if("object"!=a(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==a(e)?e:e+""}var p=function(){return t=function t(e,n){var r=this,o=e.data,i=e.handleCardClick,u=e.removeClickHandler,c=e.likeClickHandler,a=e.currentUserId;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),s(this,"generateCard",(function(){return r._element=r._getTemplate(),r._elementImage=r._element.querySelector(".place__image"),r._elementTitle=r._element.querySelector(".place__title"),r._placeButtonLike=r._element.querySelector(".place__button-like"),r._placeButtonRemove=r._element.querySelector(".place__button-remove"),r._placeScoreLike=r._element.querySelector(".place__score-like"),r._data.likes.forEach((function(t){t._id===r._userId&&r._placeButtonLike.classList.add("place__button-like_active")})),r._idOwner!=r._userId&&r._placeButtonRemove.remove(),r._setEventListeners(),r._elementTitle.textContent=r._name,r._elementImage.src=r._link,r._elementImage.alt="Фотография местности "+r._name,r._placeScoreLike.textContent=r._scoreLike,r._element})),s(this,"_setEventListeners",(function(){r._placeButtonRemove.addEventListener("click",r._removeClickHandler),r._placeButtonLike.addEventListener("click",r._likeClickHandler),r._elementImage.addEventListener("click",(function(){r._handleCardClick(r._name,r._link)}))})),this._data=o,this._link=o.link,this._name=o.name,this._idOwner=o.owner._id,this._id=o._id,this._cardSelector=n,this._handleCardClick=i,this._removeClickHandler=u,this._scoreLike=o.likes.length,this._likeClickHandler=c,this._userId=a},(e=[{key:"deleteCard",value:function(){this._element.remove(),this._element=null}},{key:"getId",value:function(){return this._id}},{key:"like",value:function(t){this._placeButtonLike.classList.toggle("place__button-like_active"),this._placeScoreLike.textContent=t}},{key:"_getTemplate",value:function(){return document.querySelector(this._cardSelector).content.querySelector(".place").cloneNode(!0)}}])&&l(t.prototype,e),Object.defineProperty(t,"prototype",{writable:!1}),t;var t,e}();function y(t){return y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},y(t)}function d(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,v(r.key),r)}}function m(t,e,n){return e&&d(t.prototype,e),n&&d(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function b(t,e,n){return(e=v(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function v(t){var e=function(t){if("object"!=y(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var n=e.call(t,"string");if("object"!=y(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==y(e)?e:e+""}var _=m((function t(e,n){var r=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),b(this,"enableValidation",(function(){r._inputsList=r._form.querySelectorAll(r._config.inputSelector),r._submitButton=r._form.querySelector(r._config.submitButtonSelector),r._setEventListeners(r._form,r._config,r._submitButton),r._form.addEventListener("submit",(function(t){t.preventDefault(),r._disabledButton(r._submitButton,r._config)})),r._setButtonState(r._submitButton,r._form.checkValidity(),r._config)})),b(this,"_setEventListeners",(function(t,e,n){r._inputsList.forEach((function(o){o.addEventListener("input",(function(){r._checkInputValidity(t,o,e),r._setButtonState(n,t.checkValidity(),e)}))}))})),b(this,"_setButtonState",(function(t,e,n){e?(t.classList.remove(n.buttonInvalidClass),t.disabled=!1):r._disabledButton(t,n)})),b(this,"_disabledButton",(function(t,e){t.classList.add(e.buttonInvalidClass),t.disabled=!0})),b(this,"_checkInputValidity",(function(t,e,n){e.validity.valid?r._hideError(t,e,n):r._showError(t,e,n)})),b(this,"_hideError",(function(t,e,n){t.querySelector("#".concat(e.name,"-error")).textContent="",e.classList.remove(n.inputInvalidClass)})),b(this,"_showError",(function(t,e,n){t.querySelector("#".concat(e.name,"-error")).textContent=e.validationMessage,e.classList.add(n.inputInvalidClass)})),this._config=e,this._form=n}));function h(t){return h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},h(t)}function g(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,S(r.key),r)}}function k(t,e,n){return(e=S(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function S(t){var e=function(t){if("object"!=h(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var n=e.call(t,"string");if("object"!=h(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==h(e)?e:e+""}var w=function(){return t=function t(e){var n=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),k(this,"_handleEscClose",(function(t){"Escape"===t.key&&n.close(n._container)})),k(this,"_handleClickContainer",(function(t){(t.target.classList.contains("popup")||t.target.classList.contains("popup__button-close"))&&n.close(n._container)})),this._container=document.querySelector("".concat(e))},(e=[{key:"open",value:function(){this._container.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._container.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"setEventListeners",value:function(){this._container.addEventListener("click",this._handleClickContainer)}}])&&g(t.prototype,e),Object.defineProperty(t,"prototype",{writable:!1}),t;var t,e}();function C(t){return C="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},C(t)}function j(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,E(r.key),r)}}function E(t){var e=function(t){if("object"!=C(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var n=e.call(t,"string");if("object"!=C(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==C(e)?e:e+""}function O(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(O=function(){return!!t})()}function P(t,e,n,r){var o=L(I(1&r?t.prototype:t),e,n);return 2&r&&"function"==typeof o?function(t){return o.apply(n,t)}:o}function L(){return L="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!{}.hasOwnProperty.call(t,e)&&null!==(t=I(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},L.apply(null,arguments)}function I(t){return I=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},I(t)}function T(t,e){return T=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},T(t,e)}var q=function(t){function e(t,n){var r,o=t.handleRemoveClick;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),(r=function(t,e,n){return e=I(e),function(t,e){if(e&&("object"==C(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(t,O()?Reflect.construct(e,n||[],I(t).constructor):e.apply(t,n))}(this,e,[n]))._popupButton=r._container.querySelector(".popup__button-remove"),r._handleRemoveClick=o,r._cardInfo={},r}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&T(t,e)}(e,t),n=e,(r=[{key:"open",value:function(t){return P(e,"open",this,3)([]),this._cardInfo=t}},{key:"setEventListeners",value:function(){var t=this;P(e,"setEventListeners",this,3)([]),this._popupButton.addEventListener("click",(function(){t._handleRemoveClick(t._cardInfo)}))}}])&&j(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),n;var n,r}(w);function B(t){return B="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},B(t)}function R(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,U(r.key),r)}}function U(t){var e=function(t){if("object"!=B(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var n=e.call(t,"string");if("object"!=B(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==B(e)?e:e+""}function V(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(V=function(){return!!t})()}function x(){return x="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!{}.hasOwnProperty.call(t,e)&&null!==(t=D(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},x.apply(null,arguments)}function D(t){return D=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},D(t)}function H(t,e){return H=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},H(t,e)}var z=function(t){function e(t){var n;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),(n=function(t,e,n){return e=D(e),function(t,e){if(e&&("object"==B(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(t,V()?Reflect.construct(e,n||[],D(t).constructor):e.apply(t,n))}(this,e,[t]))._popupElemImg=n._container.querySelector(".popup__image"),n._popupElemCaptain=n._container.querySelector(".popup__caption"),n}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&H(t,e)}(e,t),n=e,r=[{key:"open",value:function(t,n){var r,o,i;this._popupElemImg.src=n,this._popupElemCaptain.textContent=t,(r=e,o=this,"function"==typeof(i=x(D(1&3?r.prototype:r),"open",o))?function(t){return i.apply(o,t)}:i)([])}}],r&&R(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),n;var n,r}(w);function F(t){return F="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},F(t)}function A(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,Q(r.key),r)}}function N(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(N=function(){return!!t})()}function J(t,e,n,r){var o=M(G(1&r?t.prototype:t),e,n);return 2&r&&"function"==typeof o?function(t){return o.apply(n,t)}:o}function M(){return M="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!{}.hasOwnProperty.call(t,e)&&null!==(t=G(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},M.apply(null,arguments)}function G(t){return G=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},G(t)}function K(t,e){return K=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},K(t,e)}function Q(t){var e=function(t){if("object"!=F(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var n=e.call(t,"string");if("object"!=F(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==F(e)?e:e+""}var W=function(t){function e(t,n){var r,o,i,u,c=t.submitForm;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),r=function(t,e,n){return e=G(e),function(t,e){if(e&&("object"==F(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(t,N()?Reflect.construct(e,n||[],G(t).constructor):e.apply(t,n))}(this,e,[n]),o=r,u=function(t){t.preventDefault(),r._submitForm(r._getInputValues()),r.close(r._container)},(i=Q(i="_handleSubmitForm"))in o?Object.defineProperty(o,i,{value:u,enumerable:!0,configurable:!0,writable:!0}):o[i]=u,r._submitForm=c,r._formContainer=r._container.querySelector(".popup__form"),r._formButton=r._container.querySelector(".popup__button-submit"),r}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&K(t,e)}(e,t),n=e,(r=[{key:"_getInputValues",value:function(){var t=this;return this._inputList=this._formContainer.querySelectorAll(".popup__input"),this._formValues={},this._inputList.forEach((function(e){t._formValues[e.name]=e.value})),this._formValues}},{key:"close",value:function(){J(e,"close",this,3)([]),this._formContainer.reset()}},{key:"setEventListeners",value:function(){J(e,"setEventListeners",this,3)([]),this._formContainer.addEventListener("submit",this._handleSubmitForm)}},{key:"renderLoading",value:function(t){this._formButton.textContent=t?"Сохранение...":"Сохранить"}}])&&A(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),n;var n,r}(w);function X(t){return X="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},X(t)}function Y(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,Z(r.key),r)}}function Z(t){var e=function(t){if("object"!=X(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var n=e.call(t,"string");if("object"!=X(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==X(e)?e:e+""}var $=function(){return t=function t(e){var n=e.titleContainer,r=e.subTitleContainer,o=e.avatarConteiner;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._titleContainer=n,this._subTitleContainer=r,this._avatarConteiner=o},(e=[{key:"getUserInfo",value:function(){return this._profileValues={},this._profileValues.name=this._titleContainer.textContent,this._profileValues.about=this._subTitleContainer.textContent,this._profileValues.avatar=this._avatarConteiner.src,this._profileValues}},{key:"setUserInfo",value:function(t){this._titleContainer.textContent=t.name,this._subTitleContainer.textContent=t.about,this._avatarConteiner.src=t.avatar}}])&&Y(t.prototype,e),Object.defineProperty(t,"prototype",{writable:!1}),t;var t,e}(),tt={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button-submit",inputInvalidClass:"popup__input_state_invalid",buttonInvalidClass:"popup__button-submit_invalid"},et=document.querySelector("#popup-form-add"),nt=document.querySelector("#popup-form-edit"),rt=document.querySelector("#popup-form-add-avatar"),ot=document.querySelector(".popup__input_type_author"),it=document.querySelector(".popup__input_type_status"),ut=document.querySelector(".profile__avatar"),ct=document.querySelector(".profile__author"),at=document.querySelector(".profile__status"),lt=document.querySelector(".profile__button-edit"),st=document.querySelector(".profile__button-add"),ft={},pt=new r({baseUrl:"https://mesto.nomoreparties.co/v1",token:"429ceaf1-0a34-48aa-a4c9-c70c2c79ac6e",groupId:"cohort-19"}),yt=new z("#popup-image"),dt=new q({handleRemoveClick:function(t){!function(t){pt.removeCard(t._id).then((function(e){t.deleteCard()})).catch((function(t){return console.log("Error: ".concat(t))})).finally(dt.close())}(t)}},"#popup-remove-card"),mt=new c({renderer:function(t){var e=gt(t).generateCard();mt.setItem(e)}},".places"),bt=new W({submitForm:function(t){bt.renderLoading(!0),pt.addCard(t).then((function(t){var e=gt(t).generateCard();mt.setItemUp(e)})).catch((function(t){return console.log("Error: ".concat(t))})).finally(bt.renderLoading(!1))}},"#popup-add-card"),vt=new $({titleContainer:ct,subTitleContainer:at,avatarConteiner:ut}),_t=new W({submitForm:function(t){_t.renderLoading(!0),pt.editInfoUser(t).then((function(t){vt.setUserInfo(t)})).catch((function(t){return console.log("Error: ".concat(t))})).finally(_t.renderLoading(!1))}},"#popup-profile"),ht=new W({submitForm:function(t){_t.renderLoading(!0),pt.editUserAvatar(t).then((function(t){vt.setUserInfo(t)})).catch((function(t){return console.log("Error: ".concat(t))})).finally(_t.renderLoading(!1))}},"#popup-add-avatar");function gt(t){var e=new p({data:t,handleCardClick:function(t,e){yt.open(t,e)},removeClickHandler:function(){dt.open(e)},likeClickHandler:function(t){t.target.classList.contains("place__button-like_active")?function(t){pt.removeLike(t.getId()).then((function(e){t.like(e.likes.length)})).catch((function(t){return console.log("Error: ".concat(t))}))}(e):function(t){pt.addLike(t.getId()).then((function(e){t.like(e.likes.length)})).catch((function(t){return console.log("Error: ".concat(t))}))}(e)},currentUserId:ft.id},".places-template");return e}pt.getInitialCards().then((function(t){mt.renderItems(t)})).catch((function(t){return console.log("Error: ".concat(t))})),pt.getInfoUser().then((function(t){ft.id=t._id,vt.setUserInfo(t)})).catch((function(t){return console.log("Error: ".concat(t))}));var kt=new _(tt,nt),St=new _(tt,et),wt=new _(tt,rt);kt.enableValidation(),St.enableValidation(),wt.enableValidation(),yt.setEventListeners(),_t.setEventListeners(),bt.setEventListeners(),ht.setEventListeners(),dt.setEventListeners(),lt.addEventListener("click",(function(){var t=vt.getUserInfo();ot.value=t.name,it.value=t.about,_t.open()})),st.addEventListener("click",(function(){bt.open()})),ut.addEventListener("click",(function(){ht.open()}))})();
//# sourceMappingURL=index.js.map