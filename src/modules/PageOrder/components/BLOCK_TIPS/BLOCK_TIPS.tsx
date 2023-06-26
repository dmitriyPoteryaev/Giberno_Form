import React, { useCallback, useRef, useEffect, FC } from "react";

import "./Tips.css";
import { orderStore } from "@store/index";
import { calculedPercentByCurrentGeneralAmount } from "@utils/calculedPercentByCurrentGeneralAmount";
import classNames from "classnames";
import { observer } from "mobx-react-lite";

import BLOCK_TIPS__BUTTON from "./BLOCK_TIPS__BUTTON";
import BLOCK_TIPS__INPUT from "./BLOCK_TIPS__INPUT";
import { BLOCKFORM_withWrapper } from "../../../../types/orderTypes";

const ALL_PER_TIPS: object = {
  "0": false,
  "10": false,
  "15": false,
  "20": false,
  "25": false,
};
const svg_waiter: string = require("@assets/Waiter.svg").default;

const BLOCK_TIPS: FC<BLOCKFORM_withWrapper> = observer((props) => {
  const { wrapperClassName } = props;

  const {
    ChangeTips,
    getCalcutedOrded,
    getTips,
    getIsSplitBillCheckBox,
    getEmployee,
    getDedaultProcentTips,
    ChangeDedaultProcentTips,
    getTipsText,
  } = orderStore;

  const getCalcutedOrdedREf = useRef<number>();

  getCalcutedOrdedREf.current = getCalcutedOrded;

  const getTipsREf = useRef<string>();

  getTipsREf.current = getTips;

  const BlockTipsClasses = classNames({
    [wrapperClassName]: !!wrapperClassName,
    "Block-Tips": true,
  });

  const BlockInputTipsClasses = classNames({
    [`${wrapperClassName}`]: !!wrapperClassName,
    "Block-InputTips": true,
  });
  const handlerChangeValueTips = useCallback((someEvent: any) => {
    if (someEvent.type === "click" && getCalcutedOrdedREf.current) {
      const res = calculedPercentByCurrentGeneralAmount(
        +someEvent.target.name.slice(0, -2),
        getCalcutedOrdedREf.current
      );
      ChangeTips(res.toString());
      ChangeDedaultProcentTips(someEvent.target.name);
      return;
    }
    if (someEvent.target.value === "") {
      ChangeTips("0");
      return;
    }

    if (someEvent.type === "change" && getTipsREf.current) {
      ChangeTips(someEvent.target.value);
      ChangeDedaultProcentTips("");
      return;
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const res = calculedPercentByCurrentGeneralAmount(
      getDedaultProcentTips.slice(0, -2),
      getCalcutedOrded
    );

    ChangeTips(res.toString());
  }, [
    getIsSplitBillCheckBox,
    getCalcutedOrded,
    ChangeTips,
    getDedaultProcentTips,
    ChangeDedaultProcentTips,
  ]);
  return (
    <>
      <div className={BlockTipsClasses}>
        <div className="Block-Tips__title">{getTipsText}</div>
        <div className="Block-Tips__infoEmployee">
          <img
            src={svg_waiter}
            className="Block-Tips__photoEmployee"
            alt="photo_waiter"
          />
          <div className="Block-Tips__bodyNameEmployee">
            <div className="Block-Tips__nameEmployee">{getEmployee}</div>
          </div>
        </div>
        <label className={BlockInputTipsClasses}>
          <div className="WrapperInputTip">
            <BLOCK_TIPS__INPUT
              className="Block-InputTips__inputTip"
              value={getTips}
              placeholder="0"
              type="text"
              onChange={handlerChangeValueTips}
            />
            <span className="Block-InputTips__typeCurrency">₽</span>
          </div>
          <div className="Block-InputTips__bodyButtonCross">
            <button
              className="Block-InputTips__cross"
              onClick={handlerChangeValueTips}
              name="0 %"
            ></button>
          </div>
        </label>
        <div className="Block-InputTips__allPercentagesForTips">
          {Object.keys(ALL_PER_TIPS).map((percentages) => (
            <BLOCK_TIPS__BUTTON
              key={percentages}
              onClick={handlerChangeValueTips}
              disabled={getDedaultProcentTips}
            >
              {`${percentages} %`}
            </BLOCK_TIPS__BUTTON>
          ))}
        </div>
      </div>
    </>
  );
});

export default BLOCK_TIPS;
