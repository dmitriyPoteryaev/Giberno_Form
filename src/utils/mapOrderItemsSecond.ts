import { SpecificItemInOrderWiithSeparatePosition } from "../types/orderTypes";

export const mapOrderItemsSecond = (
  arrayOrderItems: SpecificItemInOrderWiithSeparatePosition[]
): any => {
  return arrayOrderItems.reduce((acc: any, item: any, index: any) => {
    return [
      ...acc,
      {
        positionID: index,
        amount: item.amount,
        description: item.description,
        name: item.name,
      },
    ];
  }, []);
};
