import { makeAutoObservable } from "mobx";

// ВСЁ ЧТО НАЧИНАЕТСЯ НА GET - ЭТО ПРОСТО ВЗЯТЬ ЗНАЧЕНИЕ
// ВСЁ ЧТО НАЧИНАЕТСЯ НА CHANGE - ЭТО ИЗМЕНИТЬ ЭТО ЗНАЧЕНИЕ
class HeightBlockStore {
  CurHeight: any = 0;

  constructor() {
    makeAutoObservable(this);
  }

  get getCurHeight() {
    return this.CurHeight;
  }

  ChangeCurHeight = (value: string) => {
    this.CurHeight = value;
  };
}

export { HeightBlockStore };
