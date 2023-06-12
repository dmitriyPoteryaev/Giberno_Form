import { makeAutoObservable } from "mobx";

class isActiveGenetalButtonStore {
  isAgreeConditionPyments: boolean = true;
  isSepatatedOrder: boolean = false;
  isPayPositionsSepatatedOrder: boolean = false;

  constructor() {
    makeAutoObservable(this);
  }

  get getisSepatatedOrder() {
    return this.isSepatatedOrder;
  }
  get getIsPayPositionsSepatatedOrder() {
    return this.isPayPositionsSepatatedOrder;
  }

  get isActiveGenetalButton() {
    return (
      this.isAgreeConditionPyments &&
      (!this.isSepatatedOrder || this.isPayPositionsSepatatedOrder)
    );
  }
  get StateAgreeConditionPyments() {
    return this.isAgreeConditionPyments;
  }
  ChangeIsSepatatedOrder = (value: boolean) => {
    this.isSepatatedOrder = value;
  };

  ChangeStateAgreeConditionPyments = (value: boolean) => {
    this.isAgreeConditionPyments = value;
  };
  ChangeisPayPositionsSepatatedOrder = (value: boolean) => {
    this.isPayPositionsSepatatedOrder = value;
  };
}

export { isActiveGenetalButtonStore };
