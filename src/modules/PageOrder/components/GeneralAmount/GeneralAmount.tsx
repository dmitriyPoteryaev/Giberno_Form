import React, { memo } from "react";

import "./GeneralAmount.css";
import classNames from "classnames";

const GeneralAmount = memo((props: any) => {
  const {
    wrapperClassName,
    tips,
    getIsServiceChargeAmount,
    ServiceChargeAmount,
    getCalcutedOrded,
  } = props;

  const GeneralAmountClasses = classNames({
    [`${wrapperClassName}`]: !!wrapperClassName,
    GeneralAmount: true,
  });

  const generalAmout = () => {
    return (
      getCalcutedOrded +
      +tips +
      (getIsServiceChargeAmount ? ServiceChargeAmount : 0)
    ).toFixed(2);
  };

  return (
    <div className={GeneralAmountClasses}>
      <div className="GeneralAmount__sepateOrders">
        <div className="GeneralAmount__sepateOrders_container general_Order">
          <div>Общий счёт: </div>
          <div>{getCalcutedOrded} ₽</div>
        </div>
        <div className="GeneralAmount__sepateOrders_container">
          <div>Чаевые: </div>
          <div>{`${tips} ₽`}</div>
        </div>
      </div>
      <div className="GeneralAmount__divider"></div>
      <div className="GeneralAmount__sepateOrders_container itog">
        <div>Итог к оплате: </div>
        <div>{generalAmout()} ₽</div>
      </div>
    </div>
  );
});

export default GeneralAmount;
