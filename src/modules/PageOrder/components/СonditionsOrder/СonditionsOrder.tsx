import React, { useState } from "react";
import "./СonditionsOrder.css";

const СonditionsOrder = (props: any) => {
  const { StateAgreeConditionPyments, ChangeStateAgreeConditionPyments } =
    props;

  const [value, setValue] = useState(false);

  return (
    <div className="СonditionsOrder">
      <label className="check option">
        <input
          type="checkbox"
          className="check__input"
          onChange={() => setValue((value) => !value)}
        />
        <span className="check_box"></span>
        <span>Я хочу взять на себя сервисный сбор Tapper (41.6₽)</span>
      </label>
      <label className="check option">
        <input
          type="checkbox"
          className="check__input"
          onChange={() =>
            ChangeStateAgreeConditionPyments(!StateAgreeConditionPyments)
          }
          checked={StateAgreeConditionPyments}
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
