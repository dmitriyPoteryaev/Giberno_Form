import { orderAPI } from "@api/orders";
import { mapOrderItems } from "@utils/mapOrderItems";
import { makeAutoObservable } from "mobx";

import { WAYS_OBJECT_PAY } from "../constants/WAYS_OBJECT_PAY";

const { getInfoAboutOrder } = orderAPI;

// ВСЁ ЧТО НАЧИНАЕТСЯ НА GET - ЭТО ПРОСТО ВЗЯТЬ ЗНАЧЕНИЕ
// ВСЁ ЧТО НАЧИНАЕТСЯ НА CHANGE - ЭТО ИЗМЕНИТЬ ЭТО ЗНАЧЕНИЕ
class OrdersStore {
  OrdersStoreState: any = {};

  tips: string = "0";

  isServiceChargeAmount: any;

  Employee: any;

  DefaultProcentTips: any;
  ArrayWithWaysPay: any;

  IsEmail: any;
  IsEmailRequire: any;
  validationButtonWhenOpportunityReciept: any = true;

  clientEmail: any;

  // ВСЕ ПАРАМЕТРЫ, ОТВЕЧАЮЩИЕ ЗА ГЛАВНУЮ КНОПКУ - "ОПЛАТИТЬ"

  isAgreeConditionPymentsCheckBox: boolean = true;

  isSplitBillCheckBox: boolean = false;

  // булевое значение для чекбоксов перед всеми позициями
  IsPayPositionsSepatatedOrderCheckBox: boolean = false;

  // ВСЕ ПАРАМЕТРЫ, СВЯЗАННЫЕ C ОТОБРАЖЕНИЕМ КОНКРЕТНЫХ ЭЛЕМЕНТОВ

  isSplitBill: any;

  serviceFee: boolean = this.OrdersStoreState?.serviceFee;

  Deposit: any;

  IsTips: any;

  // независимые переменные
  isLoading: boolean = true;

  Error: any;

  // ВСЁ ДЛЯ ССЫЛКИ

  Currentclient_id: any;

  Currentkey_form: any;

  gibernoOrderId: any;

  // ВСЁ ДЛЯ ДИЗАЙНА ВНУТРИ ФОРМЫ
  headTextOne: any;
  headTextTwo: any;
  tipsText: any;
  serviceFeeText: any;
  divideText: any;
  menuColor: any;
  buttonColor: any;

  constructor() {
    makeAutoObservable(this);
  }

  // ВСЯ ЛОГИКА, КОТОРАЯ СВЯЗАНА С ЗАКАЗОМ И ПОДСЧЁТОМ ДЕНЕГ
  ChangeDataAboutOrders = (client_id: string, key_form: string) => {
    return getInfoAboutOrder(client_id, key_form)
      .then((response: any) => {
        if (typeof response !== "object") {
          throw Error(response);
        }
        const { config, infoOrders } = response;
        this.isServiceChargeAmount = infoOrders?.serviceFee?.serviceFeeDefault;
        this.Employee = infoOrders?.employee;
        this.Deposit = infoOrders?.deposit;
        this.IsTips = infoOrders?.tips?.enabled;
        this.DefaultProcentTips = infoOrders?.tips?.tipsDefault.toString();
        this.ArrayWithWaysPay = infoOrders?.PaymentTypes?.map(
          (elem: any) => Object?.values(elem)[0]
        );
        this.OrdersStoreState = {
          ...infoOrders,
          items: mapOrderItems(infoOrders.items),
        };
        // для текста внутри блоков
        this.headTextOne = infoOrders?.design?.headTextOne;
        this.headTextTwo = infoOrders?.design?.headTextTwo;
        this.tipsText = infoOrders?.design?.tipsText;
        this.serviceFeeText = infoOrders?.design?.serviceFeeText;
        this.divideText = infoOrders?.design?.divideText;
        this.menuColor = infoOrders?.design?.menuColor;
        this.buttonColor = infoOrders?.design?.buttonColor;
        this.isSplitBill = infoOrders?.splitBill?.enabled;

        // для валидации кнопки

        this.IsEmail = infoOrders?.email?.enabled;
        this.IsEmailRequire = infoOrders?.email?.emailRequire;
        this.clientEmail = infoOrders?.email?.emailCustomer;

        if (this.IsEmailRequire) {
          this.validationButtonWhenOpportunityReciept =
            !this.IsEmailRequire || this.clientEmail;
        }

        // для пост запроса
        this.Currentclient_id = config.client_id;
        this.Currentkey_form = config.key_form;
        this.gibernoOrderId = infoOrders?.gibernoOrderId;
      })
      .catch((mesError) => {
        this.Error = mesError.message;
      })
      .finally(() => (this.isLoading = false));
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

  get getIsServiceChargeAmount(): boolean {
    return this.isServiceChargeAmount;
  }

  get getEmployee() {
    return this.Employee ? this.Employee : "";
  }

  get getIsEmail() {
    return this.IsEmail;
  }

  get getIsEmailRequire() {
    return this.IsEmailRequire;
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
    return Object.values(WAYS_OBJECT_PAY).reduce(
      (acc: any, item: any, index: any) => {
        const KEY_WAY_PAY: string = Object.keys(WAYS_OBJECT_PAY)[index];
        if (
          this.ArrayWithWaysPay?.includes(Object.keys(WAYS_OBJECT_PAY)[index])
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
        this.OrdersStoreState?.serviceFee?.serviceFeePercentage) /
      100;
    const res: number =
      calculated >= this.OrdersStoreState?.serviceInfo?.serviceFeeMax
        ? this.OrdersStoreState?.serviceFee?.serviceFeeMax
        : calculated;

    const generalRes = this.OrdersStoreState?.serviceFee ? res : 0;
    return Math.round(generalRes);
  }

  // ВСЯ ЛОГИКА, СВЯЗАННАЯ КНОПКОЙ ОПЛАТИТЬ

  get getisActiveGenetalButton() {
    return !(
      this.isAgreeConditionPymentsCheckBox &&
      (!this.isSplitBillCheckBox ||
        this.IsPayPositionsSepatatedOrderCheckBox) &&
      this.getValidationButton
    );
  }

  get getClientEmail() {
    return this.clientEmail;
  }
  ChangeClientEmail = (value: string) => {
    return (this.clientEmail = value);
  };
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
    return this.isSplitBill;
  }
  get getIsServiceFee() {
    return this.OrdersStoreState?.serviceFee?.enabled;
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

  get getIsSplitBillCheckBox() {
    return this.isSplitBillCheckBox;
  }

  // ВСЁ ДЛЯ ДИЗАЙНА

  get getHeadTextOne() {
    return this.headTextOne || "Мой счёт";
  }

  get getheadTextTwo() {
    return this.headTextTwo || "Стол";
  }

  get getTipsText() {
    return this.tipsText || "Чаевые";
  }

  get getServiceFeeText() {
    return (
      this.serviceFeeText || "Я хочу взять на себя сервисный сбор Гиберно" + " "
    );
  }

  get getDivideText() {
    return this.divideText || "Разделить счёт";
  }

  get getMenuColor() {
    return this.menuColor || "#010d35";
  }
  get getButtonColor() {
    return this.buttonColor || "#6764ff";
  }
  // ВСЁ ЧТО СВЯЗАНО С ВАЛИДАЦИЕЙ КНОПНКИ

  get getValidationButton() {
    return (
      (!this.getIsEmail && !this.IsEmailRequire) ||
      (this.validationButtonWhenOpportunityReciept && this.getIsEmail)
    );
  }

  ChangeValidationGeneralButton = (value: boolean) => {
    this.validationButtonWhenOpportunityReciept = value;
  };

  get getValidationGeneralButton() {
    return this.validationButtonWhenOpportunityReciept;
  }

  // НЕЗАВИСИМЫЕ ПАРАМЕТРЫ
  get getIsLoading() {
    return this.isLoading;
  }
  get getError() {
    return this.Error;
  }

  // ПАРАМЕТРЫ ОТВЕЧАЮЩИЕ ЗА ССЫЛКУ
  get getCurrentclient_id() {
    return this.Currentclient_id;
  }

  get getCurrentkey_form() {
    return this.Currentkey_form;
  }

  get getGibernoOrderId() {
    return this.gibernoOrderId;
  }
}

export { OrdersStore };
