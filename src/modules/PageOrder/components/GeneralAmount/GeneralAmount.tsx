import React, { memo } from "react";

import "./GeneralAmount.css";
import { orderStore } from "@store/index";
import classNames from "classnames";
import { observer } from "mobx-react-lite";

const GeneralAmount = memo(
  observer((props: any) => {
    const { wrapperClassName } = props;

    const GeneralAmountClasses = classNames({
      [`${wrapperClassName}`]: !!wrapperClassName,
      GeneralAmount: true,
    });

    const {
      getCalcutedOrded,
      getTips,
      getIsServiceChargeAmount,
      getServiceChargeAmount,
      getDeposit,
      getIsTips,
    } = orderStore;

    const generalAmout = () => {
      const generalAmout = (
        getCalcutedOrded +
        +getTips +
        (getIsServiceChargeAmount ? getServiceChargeAmount : 0) -
        (typeof getDeposit === "number" ? getDeposit : 0)
      ).toFixed(2);

      return +generalAmout >= 0 ? generalAmout : 0;
    };

    return (
      <div className={GeneralAmountClasses}>
        <div className="GeneralAmount__sepateOrders">
          <div className="GeneralAmount__sepateOrders_container general_Order">
            <div>Общий счёт: </div>
            <div>{getCalcutedOrded} ₽</div>
          </div>
          {getIsTips && (
            <div className="GeneralAmount__sepateOrders_container">
              <div>Чаевые: </div>
              <div>{`${getTips} ₽`}</div>
            </div>
          )}
          {typeof getDeposit === "number" && getDeposit !== 0 && (
            <div className="GeneralAmount__sepateOrders_container">
              <div>Депозит: </div>
              <div>{`${getDeposit} ₽`}</div>
            </div>
          )}
        </div>
        <div className="GeneralAmount__divider"></div>
        <div className="GeneralAmount__sepateOrders_container itog">
          <div>Итог к оплате: </div>
          <div>{generalAmout()} ₽</div>
        </div>
      </div>
    );
  })
);

export default GeneralAmount;
