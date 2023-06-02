import { orderAPI } from "@api/orders";
import { makeAutoObservable, action } from "mobx";

const { getInfoAboutOrder } = orderAPI;

class OrdersStore {
  OrdersStoreState: any = {};

  constructor() {
    makeAutoObservable(this, {
      ChangeAmountPriceWithTips: action,
    });
  }

  getDataAboutOrders = () => {
    getInfoAboutOrder().then((infoOrders: any) => {
      return (this.OrdersStoreState = { ...infoOrders });
    });
  };

  get InfoAboutOrder() {
    return this.OrdersStoreState;
  }

  ChangeAmountPriceWithTips = (value: number) => {
    this.OrdersStoreState = {
      ...this.OrdersStoreState,
      general_order: this.OrdersStoreState.general_order + value,
    };
  };
}

export { OrdersStore };
