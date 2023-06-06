import React, { useState } from "react";
import "./СonditionsOrder.css";

const СonditionsOrder = () => {
  const [isChecked, setIsChcked] = useState(false);

  return (
    <div className="СonditionsOrder">
      <label className="check option">
        <input
          type="checkbox"
          className="check__input"
          onChange={() => setIsChcked((isChecked) => !isChecked)}
        />
        <span className="check_box"></span>
        <span>Я хочу взять на себя сервисный сбор Tapper (41.6₽)</span>
      </label>
      <label className="check option">
        <input
          type="checkbox"
          className="check__input"
          onChange={() => setIsChcked((isChecked) => !isChecked)}
        />
        <span className="check_box"></span>
        <span>
          Согласен c условиями использования Политикой конфиденциальности и
          обработки персональных данных Tapper
        </span>
      </label>
    </div>
  );
};

export default СonditionsOrder;
