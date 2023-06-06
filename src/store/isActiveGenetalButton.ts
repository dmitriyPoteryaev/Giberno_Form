import { makeAutoObservable } from "mobx";

class isActiveGenetalButtonStore {
  isAgreeConditionPyments: boolean = true;

  constructor() {
    makeAutoObservable(this);
  }

  get isActiveGenetalButton() {
    return this.isAgreeConditionPyments;
  }
  get StateAgreeConditionPyments() {
    return this.isAgreeConditionPyments;
  }
  ChangeStateAgreeConditionPyments = (value: boolean) => {
    this.isAgreeConditionPyments = value;
  };
}

export { isActiveGenetalButtonStore };
