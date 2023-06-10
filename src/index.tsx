import React from "react";

import ReactDOM from "react-dom/client";

import "./style/index.css";
import App from "./App/App";
// стили для виджета, на котором будет отображаться список всех банков - div
// стили для вреппера
// background: #fff;
//     border-radius: 20px 20px 0 0;
//     padding: 16px 16px 32px;
//     position: relative;
//     width: 100%;
//     z-index: 2;
// стили для тайтла, в кототом будет строчка - выберите банк для оплаты - div
// color: #010d35;
// font-size: 20px;
// font-weight: 600;
// margin-bottom: 16px;
// отдельный блок под список всех банков - ul
// align-items: center;
//     display: flex;
//     flex-wrap: wrap;
//     margin-bottom: 8px;
//     margin-left: -8px;
// стили для отдельного блока банка- li
// align-items: center;
//     border: 1px solid #e6e7eb;
//     border-radius: 11px;
//     cursor: pointer;
//     display: flex;
//     flex-direction: column;
//     height: 65px;
//     justify-content: center;
//     margin-bottom: 8px;
//     margin-left: 8px;
//     width: calc(33.333% - 8px);
// стили для картинки  банка -  i,mg

// height: 25px;
// margin-bottom: 2px;
// width: 25px;
// стили для название банка

// color: #343d5d;
//     font-size: 15px;
//     font-weight: 500;
//     line-height: 20px;
//     overflow: hidden;
//     padding: 0 10px;
//     text-align: center;
//     text-overflow: ellipsis;
//     white-space: nowrap;
//     width: 111px;

// class="paymentAllBanks-list__inner" - нет стилей
//  внутри этого блока

// align-items: center;
// cursor: pointer;
// display: flex;
// height: 40px;
// }

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
