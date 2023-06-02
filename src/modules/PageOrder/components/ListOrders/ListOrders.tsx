import React from "react";

import "./ListOrders.css";
import classNames from "classnames";

const ListOrders = (props: any) => {
  const { wrapperClassName, orders } = props;

  const OrderClasses = classNames({
    [`${wrapperClassName}`]: !!wrapperClassName,
    Order: true,
  });

  return (
    <ul className="ListOrders">
      {orders?.map((order: any, i: any) => (
        <li key={i} className={OrderClasses}>
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
};

export default ListOrders;
