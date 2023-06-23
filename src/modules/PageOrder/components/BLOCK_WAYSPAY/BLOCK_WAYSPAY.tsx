import React, { useState, useEffect, useRef } from "react";

import "./BlockWithWaysPay.css";
import CustomCheckBox from "@shared/components/CustomCheckBox";
import SelectBank from "@shared/components/Widget/SelectBank";
import { orderStore, heightBlockStore, qrLinktsStore } from "@store/index";
import { generalAmount } from "@utils/generalAmount";
import { mapOrderItemsSecond } from "@utils/mapOrderItemsSecond";
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
    getIsEmail,
    getIsEmailRequire,
    getCurrentclient_id,
    getCurrentkey_form,
    getOrdersStoreState,
  } = orderStore;

  const { ChangeCurHeight } = heightBlockStore;

  const { postQr_Link } = qrLinktsStore;

  const [isSelectWayPay, setIsSelectWayPay] = useState<any>(false);
  const [isGiveCheck, setIsGiveCheck] = useState<boolean>(getIsEmailRequire);
  const [wayPay, setWayPay] = useState<string>(
    Object.keys(getObjectWithWaysPay)[0] || " "
  );
  const [ValueSelectBank, setValueSelectBank] = useState<boolean>(false);

  const blockRef = useRef<any>(null);

  const handlerSelectBank = () => {
    if (wayPay === "SBP") {
      setValueSelectBank(true);

      postQr_Link(
        getCurrentclient_id,
        getCurrentkey_form,
        mapOrderItemsSecond(getOrdersStoreState?.items),
        +getTips
      );
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

  useEffect(() => {
    const handleResize = () => {
      if (blockRef.current) {
        const height = blockRef.current.offsetHeight;
        ChangeCurHeight(height);
      }
    };

    // Добавляем слушатель события resize при монтировании компонента
    window.addEventListener("resize", handleResize);

    // Выполняем обработчик события resize сразу после монтирования компонента
    handleResize();

    // Удаляем слушатель события resize при размонтировании компонента
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [ChangeCurHeight, isGiveCheck, setIsGiveCheck]);

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
    <div ref={blockRef} className="Block-WaysPay">
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
          <span className="Block-WaysPay__title"> Способ оплаты </span>
          <span className="Block-WaysPay__subtitle">
            {" "}
            {getObjectWithWaysPay?.[wayPay]?.[1]
              ? getObjectWithWaysPay[wayPay][1]
              : ""}{" "}
          </span>
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

      {getIsEmail && (
        <div style={{ marginTop: "10px" }}>
          <CustomCheckBox
            onChange={() => setIsGiveCheck((isGiveCheck) => !isGiveCheck)}
            checked={isGiveCheck}
            classNameCheckBox={"Block-LabelGiveCheck__checkBox"}
            classNameFakeCheckBox={"Block-LabelGiveCheck__fakeCheckBox"}
            classNameLable={"Block-LabelGiveCheck"}
          >
            <span className="Block-LabelGiveCheck__GiveCheck">
              Хочу получить чек
            </span>
          </CustomCheckBox>
        </div>
      )}
      {isGiveCheck && (
        <input placeholder="Укажите свой e-mail" className="Block-InputEmail" />
      )}
    </div>
  );
});

export default BLOCK_WAYSPAY;
