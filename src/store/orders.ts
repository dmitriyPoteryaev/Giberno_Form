import { orderAPI } from "@api/orders";
import { makeAutoObservable } from "mobx";

const { getInfoAboutOrder } = orderAPI;

class OrdersStore {
  OrdersStoreState: any = {};

  tips: string = "0";
  isServiceChargeAmount: boolean = true;
  isMakeSeparateOrder: boolean = false;

  constructor() {
    makeAutoObservable(this);
  }

  getDataAboutOrders = () => {
    getInfoAboutOrder().then((infoOrders: any) => {
      return (this.OrdersStoreState = { ...infoOrders });
    });
  };

  get cbTips() {
    return this.tips;
  }
  get getIsMakeSeparateOrder() {
    return this.isMakeSeparateOrder;
  }
  ChangeIsMakeSeparateOrder = () => {
    this.isMakeSeparateOrder = !this.isMakeSeparateOrder;
  };
  get InfoAboutOrder() {
    return this.OrdersStoreState;
  }
  get getIsServiceChargeAmount() {
    return this.isServiceChargeAmount;
  }
  ChangeIsServiceChargeAmount = () => {
    this.isServiceChargeAmount = !this.isServiceChargeAmount;
  };
  ChangeSomePositionInOrdersStoreState = (newOrderS: any) => {
    this.OrdersStoreState = {
      ...this.OrdersStoreState,
      Orders: [...newOrderS],
    };
  };
  get ServiceChargeAmount() {
    const calculated =
      ((+this.tips + this.OrdersStoreState.general_order) * 35) / 100;
    const res = calculated >= 299 ? 299 : calculated;
    return Math.round(res);
  }

  ChangeAmountTips = (value: string) => {
    this.tips = value;
  };
}

export { OrdersStore };
