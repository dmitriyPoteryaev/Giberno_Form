import { orderAPI } from "@api/orders";
// import { CONST_WAYS_OBJECT_PAY } from "@constants/waysPay";
import { makeAutoObservable } from "mobx";

const { getInfoAboutOrder } = orderAPI;

const CONST_WAYS_OBJECT_PAY = {
  BANK_CARD: [require("@assets/waysPay/card.svg").default, "Банковская карта"],
  SBP: [require("@assets/waysPay/SFP.svg").default, "Система быстрых платежей"],
  YANDEX_PAY: [
    require("@assets/waysPay/yandex-pay.svg").default,
    "Яндекс оплата",
  ],
};

// ВСЁ ЧТО НАЧИНАЕТСЯ НА GET - ЭТО ПРОСТО ВЗЯТЬ ЗНАЧЕНИЕ
// ВСЁ ЧТО НАЧИНАЕТСЯ НА CHANGE - ЭТО ИЗМЕНИТЬ ЭТО ЗНАЧЕНИЕ
class OrdersStore {
  OrdersStoreState: any = {};

  tips: string = "0";

  isServiceChargeAmount: any;

  Employee: any;

  DefaultProcentTips: any;
  ArrayWithWaysPay: any;

  // ВСЕ ПАРАМЕТРЫ, ОТВЕЧАЮЩИЕ ЗА ГЛАВНУЮ КНОПКУ - "ОПЛАТИТЬ"

  isAgreeConditionPymentsCheckBox: boolean = true;

  isSplitBillCheckBox: boolean = false;

  // булевое значение для чекбоксов перед всеми позициями
  IsPayPositionsSepatatedOrderCheckBox: boolean = false;

  // ВСЕ ПАРАМЕТРЫ, СВЯЗАННЫЕ C ОТОБРАЖЕНИЕМ КОНКРЕТНЫХ ЭЛЕМЕНТОВ

  isSplitBill: boolean = this.OrdersStoreState?.splitBill;

  serviceFee: boolean = this.OrdersStoreState?.serviceFee;

  Deposit: any;

  IsTips: any;

  // независимые переменные
  isLoading: boolean = true;

  constructor() {
    makeAutoObservable(this);
  }

  // ВСЯ ЛОГИКА, КОТОРАЯ СВЯЗАНА С ЗАКАЗОМ И ПОДСЧЁТОМ ДЕНЕГ
  ChangeDataAboutOrders = () => {
    getInfoAboutOrder().then((infoOrders: any) => {
      this.isLoading = false;
      this.isServiceChargeAmount = infoOrders?.serviceInfo?.serviceFeeDefault;
      this.Employee = infoOrders?.employee;
      this.Deposit = infoOrders?.deposit;
      this.IsTips = infoOrders?.tips;
      this.DefaultProcentTips = infoOrders?.tipsInfo?.tipsDefault.toString();
      this.ArrayWithWaysPay = infoOrders?.PaymentTypes;
      return (this.OrdersStoreState = {
        ...infoOrders,
        items: infoOrders.items.reduce((acc: any, item: any) => {
          return [...acc, { ...item, separatePosition: false }];
        }, []),
      });
    });
  };

  get getOrdersStoreState() {
    return this.OrdersStoreState;
  }

  get getCalcutedOrded() {
    return this.OrdersStoreState?.items?.reduce(
      (accumulator: any, positionOrder: any) => {
        if (positionOrder.separatePosition || !this.isSplitBillCheckBox) {
          return accumulator + positionOrder.amount;
        } else {
          return accumulator + 0;
        }
      },
      0
    );
  }

  get getTips() {
    return this.tips;
  }

  ChangeTips = (value: string) => {
    this.tips = value;
  };

  get getIsServiceChargeAmount() {
    return this.isServiceChargeAmount;
  }

  get getEmployee() {
    return this.Employee ? this.Employee : "";
  }

  get getDedaultProcentTips() {
    return this.DefaultProcentTips?.includes("%")
      ? this.DefaultProcentTips
      : `${this.DefaultProcentTips} %`;
  }
  ChangeDedaultProcentTips = (value: any) => {
    return (this.DefaultProcentTips = value);
  };

  get getObjectWithWaysPay() {
    return Object.values(CONST_WAYS_OBJECT_PAY).reduce(
      (acc: any, item: any, index: any) => {
        const KEY_WAY_PAY: string = Object.keys(CONST_WAYS_OBJECT_PAY)[index];

        if (
          this.ArrayWithWaysPay.includes(
            Object.keys(CONST_WAYS_OBJECT_PAY)[index]
          )
        ) {
          return { ...acc, [KEY_WAY_PAY]: item };
        } else {
          return acc;
        }
      },
      {}
    );
  }

  ChangeIsServiceChargeAmount = () => {
    this.isServiceChargeAmount = !this.isServiceChargeAmount;
  };

  // изменить итемы, отвечающие за заказ
  ChangeSomePositionInOrdersStoreState = (newOrderS: any) => {
    this.OrdersStoreState = {
      ...this.OrdersStoreState,
      items: [...newOrderS],
    };
  };

  // цена за сервисный сбор
  get getServiceChargeAmount() {
    const calculated: number =
      ((+this.tips + this.getCalcutedOrded) *
        this.OrdersStoreState?.serviceInfo?.serviceFeePercentage) /
      100;
    const res: number =
      calculated >= this.OrdersStoreState?.serviceInfo?.serviceFeeMax
        ? this.OrdersStoreState?.serviceInfo?.serviceFeeMax
        : calculated;

    const generalRes = this.OrdersStoreState?.serviceFee ? res : 0;
    return Math.round(generalRes);
  }

  // ВСЯ ЛОГИКА, СВЯЗАННАЯ КНОПКОЙ ОПЛАТИТЬ

  get getisActiveGenetalButton() {
    return !(
      this.isAgreeConditionPymentsCheckBox &&
      (!this.isSplitBillCheckBox || this.IsPayPositionsSepatatedOrderCheckBox)
    );
  }

  get getIsSplitBillCheckBox() {
    return this.isSplitBillCheckBox;
  }
  ChangeIsSplitBillCheckBox = () => {
    this.isSplitBillCheckBox = !this.isSplitBillCheckBox;
  };

  get getIsPayPositionsSepatatedOrderCheckBox() {
    return this.IsPayPositionsSepatatedOrderCheckBox;
  }
  ChangeIsPayPositionsSepatatedOrderCheckBox = (value: any) => {
    this.IsPayPositionsSepatatedOrderCheckBox = value;
  };

  get getIsAgreeConditionPymentsCheckBox() {
    return this.isAgreeConditionPymentsCheckBox;
  }

  ChangeIsAgreeConditionPymentsCheckBox = () => {
    this.isAgreeConditionPymentsCheckBox =
      !this.isAgreeConditionPymentsCheckBox;
  };

  // ВСЯ ЛОГИКА, СВЯЗАННАЯ C ОТОБРАЖЕНИЕМ КОНКРЕТНЫХ ЭЛЕМЕНТОВ

  get getIsSplitBill() {
    return this.OrdersStoreState?.splitBill;
  }
  get getIsServiceFee() {
    return this.OrdersStoreState?.serviceFee;
  }
  get getIsServiceFeeWarning() {
    return this.OrdersStoreState?.serviceInfo?.serviceFeeWarning;
  }

  get getDeposit() {
    return this.Deposit;
  }
  get getIsTips() {
    return this.IsTips;
  }

  // НЕЗАВИСИМЫЕ ПАРАМЕТРЫ
  get getIsLoading() {
    return this.isLoading;
  }
}

export { OrdersStore };
