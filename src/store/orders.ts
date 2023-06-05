import { orderAPI } from "@api/orders";
import { makeAutoObservable } from "mobx";

const { getInfoAboutOrder } = orderAPI;

class OrdersStore {
  OrdersStoreState: any = {};

  tips: string = "0";

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
  get InfoAboutOrder() {
    return this.OrdersStoreState;
  }

  ChangeAmountTips = (value: string) => {
    this.tips = value;
  };
}

export { OrdersStore };
