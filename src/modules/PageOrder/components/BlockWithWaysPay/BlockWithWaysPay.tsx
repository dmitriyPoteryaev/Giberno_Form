import React, { useState } from "react";

import "./BlockWithWaysPay.css";
import "./SelectWaysPay.css";
import SelectBank from "@shared/components/Widget/SelectBank";

const svg_waysPay_arrow: string = require("@assets/waysPay/arrow.svg").default;

const OBJECT_WITH_SVG_WATS_PAY: any = {
  "Банковская карта": require("@assets/waysPay/card.svg").default,
  "Система быстрых платежей": require("@assets/waysPay/SFP.svg").default,
};

const BlockWithWaysPay = (props: any) => {
  const [isSelectWayPay, setIsSelectWayPay] = useState<boolean>(false);
  const [wayPay, setWayPay] = useState<string>("Банковская карта");
  const [ValueSelectBank, setValueSelectBank] = useState<boolean>(false);
  const {
    general_order,
    tips,
    isActiveGenetalButton,
    ServiceChargeAmount,
    getIsServiceChargeAmount,
  } = props;

  const generalAmout = () => {
    return (
      +general_order +
      +tips +
      +(getIsServiceChargeAmount ? ServiceChargeAmount : 0)
    ).toFixed(2);
  };

  const handler = () => {
    if (wayPay === "Система быстрых платежей") {
      setValueSelectBank(true);

      // );
    } else {
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
              {Object.values(OBJECT_WITH_SVG_WATS_PAY).map(
                (svgIcon: any, i: number) => (
                  <li className="BlockWithWaysPay__header" key={i}>
                    <img
                      src={svgIcon}
                      alt="way_to_pay"
                      className="BlockWithWaysPay__ico"
                    />
                    <div className="BlockWithWaysPay_title-block">
                      <div className="BlockWithWaysPay_subtitle">
                        {" "}
                        {Object.keys(OBJECT_WITH_SVG_WATS_PAY)[i]}{" "}
                      </div>
                    </div>
                    <label className="BlockWithWaysPay__check option">
                      <input
                        type="checkbox"
                        className="check__input"
                        onChange={() =>
                          setWayPay(Object.keys(OBJECT_WITH_SVG_WATS_PAY)[i])
                        }
                        checked={
                          Object.keys(OBJECT_WITH_SVG_WATS_PAY)[i] === wayPay
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
                disabled={!isActiveGenetalButton}
                style={
                  !isActiveGenetalButton ? { backgroundColor: "gray" } : {}
                }
                onClick={handler}
              >
                {" "}
                Oплатить {generalAmout() === "NaN" ? "" : generalAmout()}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="BlockWithWaysPay">
      <div
        className="BlockWithWaysPay__header"
        onClick={() => setIsSelectWayPay((isSelectWayPay) => !isSelectWayPay)}
      >
        <img
          src={OBJECT_WITH_SVG_WATS_PAY[wayPay]}
          alt="way_to_pay"
          className="BlockWithWaysPay__ico"
        />
        <div className="BlockWithWaysPay_title-block">
          <div className="BlockWithWaysPay_title"> Способ оплаты </div>
          <div className="BlockWithWaysPay_subtitle"> {wayPay} </div>
        </div>
        <img
          src={svg_waysPay_arrow}
          alt="way_to_pay"
          className="BlockWithWaysPay__arrow"
        />
      </div>
      <div className="BlockWithWaysPay_body">
        <button
          className="baseButton baseButton_blue"
          disabled={!isActiveGenetalButton}
          style={!isActiveGenetalButton ? { backgroundColor: "gray" } : {}}
          onClick={handler}
        >
          {" "}
          Oплатить {generalAmout() === "NaN" ? "" : generalAmout()}
        </button>
      </div>
    </div>
  );
};

export default BlockWithWaysPay;
