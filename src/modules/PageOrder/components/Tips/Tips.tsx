import React, { useState, useCallback, useRef } from "react";

import "./Tips.css";
import { orderStore } from "@store/index";
import classNames from "classnames";

import ButtonChangeTips from "./ButtonChangeTips";
import TipsMaskInput from "./TipsMaskInput";

const ALL_PER_TIPS: any = {
  "0": false,
  "10": false,
  "15": false,
  "20": false,
  "25": false,
};

const Tips = (props: any) => {
  const { wrapperClassName, name_waiter, general_order, tips } = props;

  const { ChangeAmountTips } = orderStore;

  const [AllPercentagesTips, setAllPercentagesTips] = useState<string>(" ");

  const general_orderREf = useRef<number>();

  general_orderREf.current = general_order;

  const tipsREf = useRef<string>();

  tipsREf.current = tips;

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
    if (currentValueBtn.target.className === "cross") {
      ChangeAmountTips("0");
      setAllPercentagesTips("0 %");
      return;
    }

    if (currentValueBtn.type === "click" && general_orderREf.current) {
      const calculated =
        (general_orderREf.current *
          +currentValueBtn.target.innerHTML.slice(0, -2)) /
        100;
      const res = Math.round(calculated);
      ChangeAmountTips(res.toString());
      setAllPercentagesTips(currentValueBtn.target.innerHTML);
      return;
    }
    if (currentValueBtn.target.value === "") {
      ChangeAmountTips("0");
      return;
    }

    if (currentValueBtn.type === "change" && tipsREf.current) {
      ChangeAmountTips(currentValueBtn.target.value);
      setAllPercentagesTips("");
      return;
    }
    if (+currentValueBtn.target.value === 0) {
      ChangeAmountTips("0");
      return;
    }

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
        <TipsMaskInput
          className="Tips__inputTip"
          value={tips}
          placeholder="0"
          type="text"
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
