import { qrLinkAPI } from "@api/getQrLInk";
import { makeAutoObservable } from "mobx";

const { getQrLInk } = qrLinkAPI;

// ВСЁ ЧТО НАЧИНАЕТСЯ НА GET - ЭТО ПРОСТО ВЗЯТЬ ЗНАЧЕНИЕ
// ВСЁ ЧТО НАЧИНАЕТСЯ НА CHANGE - ЭТО ИЗМЕНИТЬ ЭТО ЗНАЧЕНИЕ
class QrLinktsStore {
  CurHeight: any = 0;

  isLoadingQr_Link: any = true;

  Error_QrLink: any;

  qrLink: any;

  constructor() {
    makeAutoObservable(this);
  }

  postQr_Link = (client_id: string, key_form: string) => {
    return getQrLInk(client_id, key_form)
      .then(({ config, infoQrLink }: any) => {
        if (typeof infoQrLink !== "object") {
          throw Error(infoQrLink);
        }
        this.qrLink = infoQrLink.message;
      })
      .catch((mesError) => {
        alert(`${mesError.message}`);
      })
      .finally(() => (this.isLoadingQr_Link = false));
  };
  // НЕЗАВИСИМЫЕ ПАРАМЕТРЫ
  get getIsLoadingQr_Link() {
    return this.isLoadingQr_Link;
  }

  get getQrLink() {
    return this.qrLink;
  }

  ChangeisLoadingQr_Link = () => {
    return (this.isLoadingQr_Link = true);
  };
}

export { QrLinktsStore };
