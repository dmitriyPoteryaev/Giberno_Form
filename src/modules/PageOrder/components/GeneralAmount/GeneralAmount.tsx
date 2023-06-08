import React, { memo } from "react";

import "./GeneralAmount.css";
import classNames from "classnames";

const GeneralAmount = memo((props: any) => {
  const {
    general_order,
    wrapperClassName,
    tips,
    getIsServiceChargeAmount,
    ServiceChargeAmount,
  } = props;

  const GeneralAmountClasses = classNames({
    [`${wrapperClassName}`]: !!wrapperClassName,
    GeneralAmount: true,
  });

  const generalAmout = () => {
    return (
      +general_order +
      +tips +
      (getIsServiceChargeAmount ? ServiceChargeAmount : 0)
    ).toFixed(2);
  };

  return (
    <div className={GeneralAmountClasses}>
      <div className="GeneralAmount__sepateOrders">
        <div className="GeneralAmount__sepateOrders_container general_Order">
          <div>Общий счёт: </div>
          <div>{general_order} ₽</div>
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
