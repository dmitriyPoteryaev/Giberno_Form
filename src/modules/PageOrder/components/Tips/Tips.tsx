import React, { useState, useCallback, useRef } from "react";

import "./Tips.css";
import { orderStore } from "@store/index";
import classNames from "classnames";

import ButtonChangeTips from "./ButtonChangeTips";

const ALL_PER_TIPS: any = {
  "0": false,
  "10": false,
  "15": false,
  "20": false,
  "25": false,
};

const Tips = (props: any) => {
  const { wrapperClassName, name_waiter, general_order } = props;

  const { ChangeAmountTips, cbTips } = orderStore;

  const [AllPercentagesTips, setAllPercentagesTips] = useState<string>(" ");

  const general_orderREf = useRef<number>();

  general_orderREf.current = general_order;

  const tipsREf = useRef<string>();

  tipsREf.current = cbTips;

  const svg_waiter: string = require("@assets/Waiter.svg").default;

  const TipsClasses = classNames({
    [`${wrapperClassName}`]: !!wrapperClassName,
    Tips: true,
  });

  const WrraperInputClasses = classNames({
    [`${wrapperClassName}`]: !!wrapperClassName,
    Tips__wrapperInput: true,
  });

  const handlerChangeValueTips = useCallback((currentValueBtn: any) => {
    if (
      +currentValueBtn.target.value > 999999 ||
      +currentValueBtn.target.value < 0 ||
      +currentValueBtn.target.value.toString().match(/\.(\d+)/)?.[1].length > 2
    ) {
      return;
    }

    if (currentValueBtn.target.className === "cross") {
      ChangeAmountTips("0");
    }

    if (
      currentValueBtn.type === "click" &&
      general_orderREf.current &&
      tipsREf.current !== undefined
    ) {
      const calculated =
        (general_orderREf.current *
          +currentValueBtn.target.innerHTML.slice(0, -2)) /
        100;
      ChangeAmountTips(calculated.toString());
    }
    if (currentValueBtn.type === "change" && tipsREf.current !== undefined) {
      ChangeAmountTips(currentValueBtn.target.value);
    }

    setAllPercentagesTips(currentValueBtn.target.innerHTML);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
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
          value={cbTips}
          className="Tips__inputTip"
          onChange={handlerChangeValueTips}
        />
        <span className="Tips__typeCurrency">₽</span>
        <div className="wrap_buttonCross">
          <button className="cross" onClick={handlerChangeValueTips}></button>
        </div>
      </label>
      <div className="Tips__allPercentagesForTips">
        {Object.keys(ALL_PER_TIPS).map((percentages, i) => (
          <ButtonChangeTips
            key={percentages}
            onClick={handlerChangeValueTips}
            disabled={AllPercentagesTips}
          >
            {`${percentages} %`}
          </ButtonChangeTips>
        ))}
      </div>
    </div>
  );
};

export default Tips;
