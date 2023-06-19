import React, { useState } from "react";

import "./BlockWithWaysPay.css";
import "./SelectWaysPay.css";
import SelectBank from "@shared/components/Widget/SelectBank";
import { orderStore } from "@store/index";
import { observer } from "mobx-react-lite";

const svg_waysPay_arrow: string =
  require("@assets/waysPay/right_arrow.svg").default;

const BlockWithWaysPay = observer((props: any) => {
  const {
    getCalcutedOrded,
    getTips,
    getIsServiceChargeAmount,
    getServiceChargeAmount,
    getisActiveGenetalButton,
    getObjectWithWaysPay,
    getDeposit,
  } = orderStore;

  const [isSelectWayPay, setIsSelectWayPay] = useState<boolean>(false);
  const [wayPay, setWayPay] = useState<string>(
    Object.keys(getObjectWithWaysPay)[0]
  );
  const [ValueSelectBank, setValueSelectBank] = useState<boolean>(false);

  const generalAmout = () => {
    const generalAmout = (
      getCalcutedOrded +
      +getTips +
      (getIsServiceChargeAmount ? getServiceChargeAmount : 0) -
      (typeof getDeposit === "number" ? getDeposit : 0)
    ).toFixed(2);

    return +generalAmout >= 0 ? generalAmout : 0;
  };

  const handler = () => {
    if (wayPay === "SBP") {
      setValueSelectBank(true);
    } else {
      return;
    }
  };

  const ShowWayPays = () => {
    if (Object.keys(getObjectWithWaysPay).length <= 1) {
      return;
    } else {
      setIsSelectWayPay((isSelectWayPay) => !isSelectWayPay);
      return;
    }
  };

  if (ValueSelectBank) {
    return <SelectBank setValueSelectBank={setValueSelectBank} />;
  }
  if (isSelectWayPay) {
    return (
      <div
        className="Modal_order"
        onClick={() => setIsSelectWayPay((isSelectWayPay) => !isSelectWayPay)}
      >
        <div onClick={(event) => event.stopPropagation()}>
          <div className="BlockWithWaysPay">
            <header>Способ Оплаты</header>
            <ul className="BlockWithWaysPay__list">
              {Object.values(getObjectWithWaysPay).map(
                ([svgIcon, name]: any, i: number) => (
                  <li className="BlockWithWaysPay__header" key={i}>
                    <img
                      src={svgIcon}
                      alt="way_to_pay"
                      className="BlockWithWaysPay__ico"
                    />
                    <div className="BlockWithWaysPay_title-block">
                      <div className="BlockWithWaysPay_subtitle"> {name}</div>
                    </div>
                    <label className="BlockWithWaysPay__check option">
                      <input
                        type="checkbox"
                        className="check__input"
                        onChange={() =>
                          setWayPay(Object.keys(getObjectWithWaysPay)[i])
                        }
                        checked={
                          Object.keys(getObjectWithWaysPay)[i] === wayPay
                        }
                      />
                      <span className="BlockWithWaysPay__check_box"></span>
                    </label>
                  </li>
                )
              )}
            </ul>
            <div className="BlockWithWaysPay_body">
              <button
                className="baseButton baseButton_blue"
                onClick={() => setIsSelectWayPay(false)}
              >
                {" "}
                Выбрать
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
  // setIsSelectWayPay((isSelectWayPay) => !isSelectWayPay)}
  return (
    <div className="BlockWithWaysPay">
      <div className="BlockWithWaysPay__header" onClick={ShowWayPays}>
        <img
          src={getObjectWithWaysPay[wayPay][0]}
          alt="way_to_pay"
          className="BlockWithWaysPay__ico"
        />
        <div className="BlockWithWaysPay_title-block">
          <div className="BlockWithWaysPay_title"> Способ оплаты </div>
          <div className="BlockWithWaysPay_subtitle">
            {" "}
            {getObjectWithWaysPay[wayPay][1]}{" "}
          </div>
        </div>
        {Object.keys(getObjectWithWaysPay).length > 1 && (
          <img
            src={svg_waysPay_arrow}
            alt="way_to_pay"
            className="BlockWithWaysPay__arrow"
          />
        )}
      </div>
      <div className="BlockWithWaysPay_body">
        <button
          className="baseButton baseButton_blue"
          disabled={getisActiveGenetalButton}
          style={getisActiveGenetalButton ? { backgroundColor: "gray" } : {}}
          onClick={handler}
        >
          {" "}
          Oплатить {generalAmout() === "NaN" ? "" : generalAmout()}
        </button>
      </div>
    </div>
  );
});

export default BlockWithWaysPay;
