import React from "react";

import ReactDOM from "react-dom/client";

import "./style/index.css";
import App from "./App/App";

// стили для главного блока, который будет в самом низу
// ackground: #fff;
//     border-radius: 20px 20px 0 0;
//     bottom: 89px;
//     box-shadow: 1px 0 11px rgba(0,0,0,.09);
//     left: 0;
//     padding: 9px 16px 16px;
//     position: fixed;
//     right: 0;
//     z-index: 1;

// https://tapper.cloud/_nuxt/img/card_icon.f4b2b9d.svg - svg для карточки

// верхний блок в этой карточке
// align-items: center;
// cursor: pointer;
// display: flex;
// margin-bottom: 13px;
// width: 100%;
// }

// блок для кнопки
// если кнопка неактивна
// cursor: no-drop;
// opacity: .5;
// стили для кнгопки
// background: #6764ff;
// color: #fff;

// основные стили

// border: none;
// border-radius: 41px;
// color: #343d5d;
// cursor: pointer;
// font-family: Commissioner,sans-serif;
// font-size: 17px;
// font-weight: 600;
// letter-spacing: .03em;
// line-height: 22px;
// outline: none;
// padding-bottom: 16px;
// padding-top: 16px;
// text-align: center;
// width: 100%;

// кнопка неавтина если есть второй чекбокс
// и если минимальная сумма чаевых указана - она не должна быть меньше 49 рублей


const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
