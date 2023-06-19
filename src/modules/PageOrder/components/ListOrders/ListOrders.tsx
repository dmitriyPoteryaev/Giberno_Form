import React, { useRef, useEffect } from "react";

import "./ListOrders.css";
import { orderStore } from "@store/index";
import classNames from "classnames";
import { observer } from "mobx-react-lite";

const ListOrders = observer((props: any) => {
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
    Order: true,
  });

  // const changeStatus = () => {
  //   // const newArr = [
  //   //   ...[
  //   //     ...[...ordersrRef.current.childNodes].map(
  //   //       (elem: any) => elem.childNodes
  //   //     ),
  //   //   ]
  //   //     .map((elem: any) => elem[0])
  //   //     .map((elem: any) => elem.childNodes)
  //   //     .map((elem: any) => elem[0].checked),
  //   // ];
  //   // .map((elem: any) => elem[0].checked)
  //   console.log(ordersrRef.current.checked);
  //   // ChangeIsPayPositionsSepatatedOrderCheckBox(
  //   //   newArr.some((elem: any) => elem === true)
  //   // );
  // };

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
    <ul ref={ordersrRef} className="ListOrders">
      {getOrdersStoreState?.items.map((order: any, i: any) => (
        <li
          key={i}
          className={OrderClasses}
          onClick={(event) => {
            event.preventDefault();
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
        >
          {getIsSplitBillCheckBox && (
            <label className="ListOrders__check ListOrders__option">
              <input
                type="checkbox"
                className="check__input"
                checked={order.separatePosition}
                onChange={(event) => {
                  event.preventDefault();
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

export default ListOrders;
