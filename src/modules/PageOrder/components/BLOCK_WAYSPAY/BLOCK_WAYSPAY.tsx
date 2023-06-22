import React, { useState } from "react";

import "./BlockWithWaysPay.css";
import SelectBank from "@shared/components/Widget/SelectBank";
import { orderStore } from "@store/index";
import { generalAmount } from "@utils/generalAmount";
import { observer } from "mobx-react-lite";

import BLOCK_WAYSPAY__BUTTON from "./BLOCK_WAYSPAY__BUTTON";
import BLOCK_WAYSPAY__MODAL from "./BLOCK_WAYSPAY__MODAL/BLOCK_WAYSPAY__MODAL";

const svg_waysPay_arrow: string =
  require("@assets/waysPay/right_arrow.svg").default;

const BLOCK_WAYSPAY = observer(() => {
  const {
    getCalcutedOrded,
    getTips,
    getIsServiceChargeAmount,
    getServiceChargeAmount,
    getisActiveGenetalButton,
    getObjectWithWaysPay,
    getDeposit,
  } = orderStore;

  const [isSelectWayPay, setIsSelectWayPay] = useState<any>(false);
  const [wayPay, setWayPay] = useState<string>(
    Object.keys(getObjectWithWaysPay)[0] || " "
  );
  const [ValueSelectBank, setValueSelectBank] = useState<boolean>(false);

  const handlerSelectBank = () => {
    if (wayPay === "SBP") {
      setValueSelectBank(true);
    } else {
      return;
    }
  };

  const handlerShowWaysPay = () => {
    if (Object.keys(getObjectWithWaysPay).length <= 1) {
      return;
    } else {
      setIsSelectWayPay((isSelectWayPay: any) => !isSelectWayPay);
      return;
    }
  };

  if (ValueSelectBank) {
    return <SelectBank setValueSelectBank={setValueSelectBank} />;
  }
  if (isSelectWayPay) {
    return (
      <BLOCK_WAYSPAY__MODAL
        getObjectWithWaysPay={getObjectWithWaysPay}
        handlerShowWaysPay={handlerShowWaysPay}
        curWayPay={wayPay}
        setWayPay={setWayPay}
      ></BLOCK_WAYSPAY__MODAL>
    );
  }
  return (
    <div className="Block-WaysPay">
      <div className="Block-WaysPay__header" onClick={handlerShowWaysPay}>
        <img
          src={
            getObjectWithWaysPay?.[wayPay]?.[0]
              ? getObjectWithWaysPay[wayPay][0]
              : ""
          }
          alt="way_to_pay"
          className="Block-WaysPay__icoWayPay"
        />
        <div className="Block-WaysPay__bodyTitle">
          <div className="Block-WaysPay__title"> Способ оплаты </div>
          <div className="Block-WaysPay__subtitle">
            {" "}
            {getObjectWithWaysPay?.[wayPay]?.[1]
              ? getObjectWithWaysPay[wayPay][1]
              : ""}{" "}
          </div>
        </div>
        {Object.keys(getObjectWithWaysPay).length > 1 && (
          <img
            src={svg_waysPay_arrow}
            alt="way_to_pay"
            className="Block-WaysPay__icoArrow"
          />
        )}
      </div>
      <BLOCK_WAYSPAY__BUTTON
        disabled={getisActiveGenetalButton}
        onClick={handlerSelectBank}
      >
        Oплатить
        {generalAmount(
          +getTips,
          getServiceChargeAmount,
          getDeposit,
          getCalcutedOrded,
          getIsServiceChargeAmount
        )}
      </BLOCK_WAYSPAY__BUTTON>
    </div>
  );
});

export default BLOCK_WAYSPAY;
