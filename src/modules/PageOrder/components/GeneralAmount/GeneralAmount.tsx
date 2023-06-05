import React, { memo } from "react";

import "./GeneralAmount.css";
import classNames from "classnames";

const GeneralAmount = memo((props: any) => {
  const { general_order, wrapperClassName, tips } = props;

  const GeneralAmountClasses = classNames({
    [`${wrapperClassName}`]: !!wrapperClassName,
    GeneralAmount: true,
  });

  return (
    <div className={GeneralAmountClasses}>
      <div className="GeneralAmount__title">Общий счёт</div>
      <div className="GeneralAmount__eat">Cчёт за еду - {general_order}</div>
      <div className="GeneralAmount__tips">Чаевые - {tips}</div>
      <div className="">Общее кол-во {+general_order + +tips}</div>
    </div>
  );
});

export default GeneralAmount;
