import React, { useRef, useEffect, FC } from "react";

import "./ListOrders.css";
import { orderStore } from "@store/index";
import classNames from "classnames";
import { observer } from "mobx-react-lite";

import {
  SpecificItemInOrderWiithSeparatePosition,
  BLOCKFORM_withWrapper,
} from "../../../../types/orderTypes";

const BLOCK_LISTORDERS: FC<BLOCKFORM_withWrapper> = observer((props) => {
  const { wrapperClassName } = props;

  const ordersrRef = useRef<any>();

  const {
    getOrdersStoreState,
    ChangeIsPayPositionsSepatatedOrderCheckBox,
    ChangeSomePositionInOrdersStoreState,
    getIsSplitBillCheckBox,
  } = orderStore;

  const SpecificPositionClasses = classNames({
    [`${wrapperClassName}`]: !(
      getIsSplitBillCheckBox &&
      !getOrdersStoreState.items
        ?.map(
          (SpecificPosition: SpecificItemInOrderWiithSeparatePosition) =>
            SpecificPosition?.separatePosition
        )
        .some((elem: boolean) => elem === true)
    ),
    "Block-SpecificPosition": true,
    wrapperBlock_red:
      getIsSplitBillCheckBox &&
      !getOrdersStoreState.items
        ?.map(
          (SpecificPosition: SpecificItemInOrderWiithSeparatePosition) =>
            SpecificPosition?.separatePosition
        )
        .some((elem: boolean) => elem === true),
  });

  const handlerChangeCheckBoxInSpecificPosition = (i: number) => {
    if (getIsSplitBillCheckBox) {
      ChangeSomePositionInOrdersStoreState(
        getOrdersStoreState?.items?.map(
          (elem: SpecificItemInOrderWiithSeparatePosition, k: number) => {
            if (k === i) {
              return {
                ...elem,
                separatePosition: !elem?.separatePosition,
              };
            } else {
              return elem;
            }
          }
        )
      );
    } else {
      return;
    }
  };

  useEffect(() => {
    const someCheckBoxSpecificPositionTrue = getOrdersStoreState.items
      ?.map(
        (SpecificPosition: SpecificItemInOrderWiithSeparatePosition) =>
          SpecificPosition?.separatePosition
      )
      .some((elem: boolean) => elem === true);

    ChangeIsPayPositionsSepatatedOrderCheckBox(
      someCheckBoxSpecificPositionTrue
    );
  }, [getOrdersStoreState, ChangeIsPayPositionsSepatatedOrderCheckBox]);

  return (
    <ul ref={ordersrRef} className="Block-ListSpecificPositions">
      {getOrdersStoreState.items?.map(
        (order: SpecificItemInOrderWiithSeparatePosition, i: number) => (
          <li
            key={i}
            className={SpecificPositionClasses}
            onClick={(event) => {
              event.preventDefault();
              handlerChangeCheckBoxInSpecificPosition(i);
            }}
          >
            {getIsSplitBillCheckBox && (
              <label className="Block-SpecificPosition__label Block-SpecificPosition__option">
                <input
                  type="checkbox"
                  className="Block-SpecificPosition__checkInput"
                  checked={order.separatePosition}
                  onChange={() => {
                    handlerChangeCheckBoxInSpecificPosition(i);
                  }}
                />
                <span className="Block-SpecificPosition___FakeCheckbox"></span>
              </label>
            )}
            <div className="Block-SpecificPosition__content">
              <div className="Block-SpecificPosition__name"> {order.name}</div>
              {order.description && (
                <div className="Block-SpecificPosition__description">
                  {[order.description]?.map(
                    (description: string, i: number) => (
                      <div
                        key={i}
                        className="Block-SpecificPosition__positionOrder"
                      >
                        {description}
                      </div>
                    )
                  )}
                </div>
              )}
            </div>
            <div className="Block-SpecificPosition__amount">{`${order.amount} ₽`}</div>
          </li>
        )
      )}
    </ul>
  );
});

export default BLOCK_LISTORDERS;
