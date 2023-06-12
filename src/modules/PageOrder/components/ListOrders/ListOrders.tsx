import React, { memo, useRef } from "react";

import "./ListOrders.css";
import classNames from "classnames";

const ListOrders = memo((props: any) => {
  const {
    wrapperClassName,
    orders,
    getIsMakeSeparateOrder,
    ChangeSomePositionInOrdersStoreState,
    ChangeisPayPositionsSepatatedOrder,
  } = props;

  const OrderClasses = classNames({
    [`${wrapperClassName}`]: !!wrapperClassName,
    Order: true,
  });

  const ordersrRef = useRef<any>();

  const changeStatus = () => {
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
    ChangeisPayPositionsSepatatedOrder(
      newArr.some((elem: any) => elem === true)
    );
  };

  return (
    <ul ref={ordersrRef} className="ListOrders">
      {orders?.map((order: any, i: any) => (
        <li key={i} className={OrderClasses}>
          {getIsMakeSeparateOrder && (
            <label className="ListOrders__check ListOrders__option">
              <input
                type="checkbox"
                className="check__input"
                checked={order.separatePosition}
                onChange={(event) => {
                  changeStatus();
                  ChangeSomePositionInOrdersStoreState(
                    orders.map((elem: any, k: any) => {
                      if (k === i) {
                        return {
                          ...elem,
                          separatePosition: !elem.separatePosition,
                        };
                      } else {
                        return elem;
                      }
                    })
                  );
                }}
              />
              <span className="ListOrders__check_box"></span>
            </label>
          )}
          <div className="Order__content">
            <div className="Order__title"> {order.title}</div>
            <div className="Order__order">
              {order.order.map((positionOrder: any, i: any) => (
                <div key={i} className="Order__positionOrder">
                  {positionOrder}
                </div>
              ))}
            </div>
          </div>
          <div className="Order__price">{`${order.price} ₽`}</div>
        </li>
      ))}
    </ul>
  );
});

export default ListOrders;
