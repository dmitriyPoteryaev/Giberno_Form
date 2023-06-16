import React, { useState } from "react";

import "./BlockWithWaysPay.css";
import "./SelectWaysPay.css";
import SelectBank from "@shared/components/Widget/SelectBank";
import { orderStore } from "@store/index";
import { observer } from "mobx-react-lite";

const svg_waysPay_arrow: string =
  require("@assets/waysPay/right_arrow.svg").default;

const OBJECT_WITH_SVG_WATS_PAY: any = {
  BANK_CARD: [require("@assets/waysPay/card.svg").default, "Банковская карта"],
  SBP: [require("@assets/waysPay/SFP.svg").default, "Система быстрых платежей"],
  YANDEX_PAY: [
    require("@assets/waysPay/yandex-pay.svg").default,
    "Яндекс оплата",
  ],
};

const BlockWithWaysPay = observer((props: any) => {
  const {
    getCalcutedOrded,
    getTips,
    getIsServiceChargeAmount,
    getServiceChargeAmount,
    getisActiveGenetalButton,
    getArrayWithWaysPay,
    getDeposit,
  } = orderStore;

  const [isSelectWayPay, setIsSelectWayPay] = useState<boolean>(false);
  const [wayPay, setWayPay] = useState<string>("SBP");
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
              {Object.values(OBJECT_WITH_SVG_WATS_PAY)
                .filter((elem, i) =>
                  getArrayWithWaysPay.includes(
                    Object.keys(OBJECT_WITH_SVG_WATS_PAY)[i]
                  )
                )
                .map(([svgIcon, name]: any, i: number) => (
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
                          setWayPay(Object.keys(OBJECT_WITH_SVG_WATS_PAY)[i])
                        }
                        checked={
                          Object.keys(OBJECT_WITH_SVG_WATS_PAY)[i] === wayPay
                        }
                      />
                      <span className="BlockWithWaysPay__check_box"></span>
                    </label>
                  </li>
                ))}
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

  return (
    <div className="BlockWithWaysPay">
      <div
        className="BlockWithWaysPay__header"
        onClick={() => setIsSelectWayPay((isSelectWayPay) => !isSelectWayPay)}
      >
        <img
          src={OBJECT_WITH_SVG_WATS_PAY[wayPay][0]}
          alt="way_to_pay"
          className="BlockWithWaysPay__ico"
        />
        <div className="BlockWithWaysPay_title-block">
          <div className="BlockWithWaysPay_title"> Способ оплаты </div>
          <div className="BlockWithWaysPay_subtitle">
            {" "}
            {OBJECT_WITH_SVG_WATS_PAY[wayPay][1]}{" "}
          </div>
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
