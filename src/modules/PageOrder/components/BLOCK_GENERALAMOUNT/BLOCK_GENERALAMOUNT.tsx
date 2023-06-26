import React, { memo, FC } from "react";

import "./GeneralAmount.css";
import { orderStore } from "@store/index";
import { generalAmount } from "@utils/generalAmount";
import classNames from "classnames";
import { observer } from "mobx-react-lite";

import { BLOCKFORM_withWrapper } from "../../../../types/orderTypes";

const BLOCK_GENERALAMOUNT: FC<BLOCKFORM_withWrapper> = memo(
  observer((props) => {
    const { wrapperClassName } = props;

    const BlockGeneralAmountClasses = classNames({
      [wrapperClassName]: !!wrapperClassName,
      "Block-GeneralAmount": true,
    });

    const {
      getCalcutedOrded,
      getTips,
      getIsServiceChargeAmount,
      getServiceChargeAmount,
      getDeposit,
      getIsTips,
      getTipsText,
    } = orderStore;

    // const { getCurHeight } = heightBlockStore;

    return (
      <div
        className={BlockGeneralAmountClasses}
        // style={{ marginBottom: `-${getCurHeight -90}px` }}
      >
        <div className="Block-AllInfoAboutPay">
          <div className="Block-AllInfoAboutPay__separate_container Block-AllInfoAboutPay__calcuatedAmount">
            <div>Общий счёт: </div>
            <div>{getCalcutedOrded} ₽</div>
          </div>
          {getIsTips && (
            <div className="Block-AllInfoAboutPay__separate_container">
              <div>{getTipsText}: </div>
              <div>{`${getTips} ₽`}</div>
            </div>
          )}
          {typeof getDeposit === "number" && getDeposit !== 0 && (
            <div className="Block-AllInfoAboutPay__separate_container">
              <div>Депозит: </div>
              <div>{`${getDeposit} ₽`}</div>
            </div>
          )}
        </div>
        <div className="Block-GeneralAmount__LineDivider"></div>
        <div className="Block-GeneralAmount__separate_container Block-GeneralAmount__result">
          <div>Итог к оплате: </div>
          <div>
            {generalAmount(
              +getTips,
              getServiceChargeAmount,
              getDeposit,
              getCalcutedOrded,
              getIsServiceChargeAmount
            )}{" "}
            ₽
          </div>
        </div>
      </div>
    );
  })
);

export default BLOCK_GENERALAMOUNT;
