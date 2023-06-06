import React, { useState } from "react";
import "./BlockWithWaysPay.css";
import "./SelectWaysPay.css";

const svg_waysPay_arrow: string = require("@assets/waysPay/arrow.svg").default;
const svg_waysPay_card: string = require("@assets/waysPay/card.svg").default;
const svg_waysPay_SFP: string = require("@assets/waysPay/SFP.svg").default;

const OBJECT_WITH_SVG_WATS_PAY: any = {
  "Банковская карта": require("@assets/waysPay/card.svg").default,
  "Система быстрых платежей": require("@assets/waysPay/SFP.svg").default,
};

const BlockWithWaysPay = (props: any) => {
  const [isSelectWayPay, setIsSelectWayPay] = useState<boolean>(false);
  const { general_order, tips } = props;

  if (isSelectWayPay) {
    return (
      <div
        className="Modal_order"
        onClick={() => setIsSelectWayPay((isSelectWayPay) => !isSelectWayPay)}
      >
        <div onClick={(event) => event.stopPropagation()}>
          <div className="BlockWithWaysPay">
            <header>Способ Оплаты</header>
            <ul>
              {Object.values(OBJECT_WITH_SVG_WATS_PAY).map(
                (svgIcon: any, i: number) => (
                  <li className="BlockWithWaysPay__header">
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
                  </li>
                )
              )}
            </ul>
            <div className="BlockWithWaysPay_body">
              <button className="baseButton baseButton_blue">
                {" "}
                Oплатить {+general_order + +tips}
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
          src={svg_waysPay_card}
          alt="way_to_pay"
          className="BlockWithWaysPay__ico"
        />
        <div className="BlockWithWaysPay_title-block">
          <div className="BlockWithWaysPay_title"> Способ оплаты </div>
          <div className="BlockWithWaysPay_subtitle"> Банковская карта </div>
        </div>
        <img
          src={svg_waysPay_arrow}
          alt="way_to_pay"
          className="BlockWithWaysPay__arrow"
        />
      </div>
      <div className="BlockWithWaysPay_body">
        <button className="baseButton baseButton_blue">
          {" "}
          Oплатить {+general_order + +tips}
        </button>
      </div>
    </div>
  );
};

export default BlockWithWaysPay;
