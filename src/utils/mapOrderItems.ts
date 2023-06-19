import {
  SpecificItemInOrder,
  SpecificItemInOrderWiithSeparatePosition,
} from "../types/orderTypes";

export const mapOrderItems = (
  arrayOrderItems: SpecificItemInOrder[]
): SpecificItemInOrderWiithSeparatePosition[] => {
  return arrayOrderItems.reduce(
    (
      acc: SpecificItemInOrderWiithSeparatePosition[],
      item: SpecificItemInOrder
    ) => {
      return [...acc, { ...item, separatePosition: false }];
    },
    []
  );
};
