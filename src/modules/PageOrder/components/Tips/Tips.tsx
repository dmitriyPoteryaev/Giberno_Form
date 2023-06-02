import React, { useState } from "react";

import "./Tips.css";
import { orderStore } from "@store/index";
import classNames from "classnames";

import ButtonChangeTips from "./ButtonChangeTips";

const ALL_PERCENTAGES_TIPS = {
  "0 %": 0,
  "10 %": 0.1,
  "15 %": 0.15,
  "20 %": 0.2,
  "25 %": 0.25,
};

const Tips = (props: any) => {
  const { wrapperClassName, name_waiter } = props;

  const { ChangeAmountPriceWithTips, InfoAboutOrder } = orderStore;

  const [valueTips, setvalueTips] = useState<number>(0);

  const svg_waiter: string = require("@assets/Waiter.svg").default;

  const TipsClasses = classNames({
    [`${wrapperClassName}`]: !!wrapperClassName,
    Tips: true,
  });

  const WrraperInputClasses = classNames({
    [`${wrapperClassName}`]: !!wrapperClassName,
    Tips__wrapperInput: true,
  });

  const handlerChangeValueTips = (currentValue: number): void => {
    if (currentValue > 999999 || currentValue < 0) {
      return;
    }

    const difvalue: number = valueTips - currentValue;

    if (difvalue) {
      ChangeAmountPriceWithTips(-difvalue);
    } else {
      ChangeAmountPriceWithTips(difvalue);
    }

    setvalueTips(currentValue);
  };

  return (
    <div className={TipsClasses}>
      <div className="Tips__title"> Чаевые </div>
      <div className="Tips__infoWaiter">
        <img
          src={svg_waiter}
          className="Tips__photoWaiter"
          alt="photo_waiter"
        />
        <div className="Tips__NameWaiter">
          <div className="Tips__Position"> Официант </div>
          <div className="Tips__name">{name_waiter}</div>
        </div>
      </div>
      <label className={WrraperInputClasses}>
        <input
          type="number"
          onChange={(event) => handlerChangeValueTips(+event.target.value)}
          value={valueTips}
          className="Tips__inputTip"
        />
        <span className="Tips__typeCurrency">₽</span>
        <div className="wrap_buttonCross">
          <button
            className="cross"
            onClick={() => handlerChangeValueTips(0)}
          ></button>
        </div>
      </label>
      <div className="Tips__allPercentagesForTips">
        {Object.keys(ALL_PERCENTAGES_TIPS).map((percentages, i) => (
          <ButtonChangeTips
            key={percentages}
            onClick={() =>
              handlerChangeValueTips(
                +(
                  InfoAboutOrder.general_order *
                  Object.values(ALL_PERCENTAGES_TIPS)[i]
                ).toFixed(2)
              )
            }
          >
            {percentages}
          </ButtonChangeTips>
        ))}
      </div>
    </div>
  );
};

export default Tips;
