import React, { useState, useCallback, useRef, useEffect } from "react";

import "./Tips.css";
import { orderStore } from "@store/index";
import classNames from "classnames";
import { observer } from "mobx-react-lite";

import ButtonChangeTips from "./ButtonChangeTips";
import TipsMaskInput from "./TipsMaskInput";

const ALL_PER_TIPS: any = {
  "0": false,
  "10": false,
  "15": false,
  "20": false,
  "25": false,
};
const svg_waiter: string = require("@assets/Waiter.svg").default;

const Tips = observer((props: any) => {
  const { wrapperClassName } = props;

  const {
    ChangeTips,
    getCalcutedOrded,
    getTips,
    getIsSplitBillCheckBox,
    getEmployee,
    getInfoAboutTips,
  } = orderStore;

  const [AllPercentagesTips, setAllPercentagesTips] = useState<string>(
    `${getInfoAboutTips.tipsDefault} %`
  );

  const getCalcutedOrdedREf = useRef<number>();

  getCalcutedOrdedREf.current = getCalcutedOrded;

  const getTipsREf = useRef<string>();

  getTipsREf.current = getTips;

  const TipsClasses = classNames({
    [`${wrapperClassName}`]: !!wrapperClassName,
    Tips: true,
  });

  const BlockInputClasses = classNames({
    [`${wrapperClassName}`]: !!wrapperClassName,
    Tips__BlockInput: true,
  });
  const handlerChangeValueTips = useCallback((currentValueBtn: any) => {
    if (currentValueBtn.target.className === "cross") {
      ChangeTips("0");
      setAllPercentagesTips("0 %");
      return;
    }

    if (currentValueBtn.type === "click" && getCalcutedOrdedREf.current) {
      const calculated =
        (getCalcutedOrdedREf.current *
          +currentValueBtn.target.innerHTML.slice(0, -2)) /
        100;
      const res = Math.round(calculated);
      ChangeTips(res.toString());
      setAllPercentagesTips(currentValueBtn.target.innerHTML);
      return;
    }
    if (currentValueBtn.target.value === "") {
      ChangeTips("0");
      return;
    }

    if (currentValueBtn.type === "change" && getTipsREf.current) {
      ChangeTips(currentValueBtn.target.value);
      setAllPercentagesTips("");
      return;
    }
    if (+currentValueBtn.target.value === 0) {
      ChangeTips("0");
      return;
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (getCalcutedOrdedREf?.current !== undefined) {
      const res = Math.round(
        (getCalcutedOrdedREf?.current * getInfoAboutTips.tipsDefault) / 100
      );

      if (getCalcutedOrdedREf?.current === 0) {
        setAllPercentagesTips("");
      } else {
        setAllPercentagesTips(`${getInfoAboutTips.tipsDefault} %`);
      }
      ChangeTips(res.toString());
    }
  }, [getIsSplitBillCheckBox, getCalcutedOrded, ChangeTips, getInfoAboutTips]);
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
          <div className="Tips__name">{getEmployee}</div>
        </div>
      </div>
      <label className={BlockInputClasses}>
        <div className="Tips__WrapperInputTip">
          <TipsMaskInput
            className="Tips__inputTip"
            value={getTips}
            placeholder="0"
            type="text"
            onChange={handlerChangeValueTips}
          />
          <span className="Tips__typeCurrency">₽</span>
        </div>
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
});

export default Tips;
