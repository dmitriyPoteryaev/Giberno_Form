import React, { useRef, useEffect, FC } from "react";

import "./ListOrders.css";
import { orderStore } from "@store/index";
import classNames from "classnames";
import { observer } from "mobx-react-lite";

export interface BLOCK_LISTORDERSprops {
  wrapperClassName: string;
}

const BLOCK_LISTORDERS: FC<BLOCK_LISTORDERSprops> = observer((props) => {
  const { wrapperClassName } = props;

  const ordersrRef = useRef<any>();

  const {
    getOrdersStoreState,
    ChangeIsPayPositionsSepatatedOrderCheckBox,
    ChangeSomePositionInOrdersStoreState,
    getIsSplitBillCheckBox,
  } = orderStore;

  const OrderClasses = classNames({
    [`${wrapperClassName}`]: !!wrapperClassName,
    "Block-SpecificPosition": true,
  });

  useEffect(() => {
    const newArr = [
      ...[
        ...[...ordersrRef.current.childNodes].map(
          (elem: any) => elem.childNodes
        ),
      ]
        .map((elem: any) => elem[0])
        .map((elem: any) => elem.childNodes)
        .map((elem: any) => elem[0].checked),
    ];

    if (!newArr.every((elem) => typeof elem === "undefined")) {
      ChangeIsPayPositionsSepatatedOrderCheckBox(
        newArr.some((elem: any) => elem === true)
      );
    }
  }, [getOrdersStoreState, ChangeIsPayPositionsSepatatedOrderCheckBox]);

  return (
    <ul ref={ordersrRef} className="Block-ListSpecificPosition">
      {getOrdersStoreState.items.map((order: any, i: any) => (
        <li
          key={i}
          className={OrderClasses}
          onClick={(event) => {
            if (getIsSplitBillCheckBox) {
              event.preventDefault();
              ChangeSomePositionInOrdersStoreState(
                getOrdersStoreState?.items.map((elem: any, k: any) => {
                  if (k === i) {
                    return {
                      ...elem,
                      separatePosition: !elem?.separatePosition,
                    };
                  } else {
                    return elem;
                  }
                })
              );
            } else {
              return;
            }
          }}
        >
          {getIsSplitBillCheckBox && (
            <label className="ListOrders__check ListOrders__option">
              <input
                type="checkbox"
                className="check__input"
                checked={order.separatePosition}
                onChange={(event) => {
                  if (getIsSplitBillCheckBox) {
                    ChangeSomePositionInOrdersStoreState(
                      getOrdersStoreState?.items.map((elem: any, k: any) => {
                        if (k === i) {
                          return {
                            ...elem,
                            separatePosition: !elem?.separatePosition,
                          };
                        } else {
                          return elem;
                        }
                      })
                    );
                  } else {
                    return;
                  }
                }}
              />
              <span className="ListOrders__check_box"></span>
            </label>
          )}
          <div className="Order__content">
            <div className="Order__title"> {order.name}</div>
            {order.description && (
              <div className="Order__order">
                {[order.description].map((description: any, i: any) => (
                  <div key={i} className="Order__positionOrder">
                    {description}
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="Order__price">{`${order.amount} ₽`}</div>
        </li>
      ))}
    </ul>
  );
});

export default BLOCK_LISTORDERS;
