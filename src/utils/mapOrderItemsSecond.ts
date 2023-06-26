import { orderStore } from "@store/index";

import { SpecificItemInOrderWiithSeparatePosition } from "../types/orderTypes";

export const mapOrderItemsSecond = (
  arrayOrderItems: SpecificItemInOrderWiithSeparatePosition[]
): any => {
  const { getIsSplitBillCheckBox } = orderStore;
  return arrayOrderItems.reduce((acc: any, item: any, index: any) => {
    if (item.separatePosition || !getIsSplitBillCheckBox) {
      return [
        ...acc,
        {
          positionID: item.positionID,
          amount: item.amount,
          description: item.description,
          name: item.name,
        },
      ];
    } else {
      return acc;
    }
  }, []);
};
