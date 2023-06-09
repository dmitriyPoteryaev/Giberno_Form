import { qrLinktsStore } from "@store/index";
import axios from "axios";

//api.giberno.ru/invoice_qr/?client_id=fb1969e9-8fa1-4b40-a9a4-da10a3fd968e&key_form=c5c5f096-15b4-4abd-b770-b7379500501a
const getQrLInk = (
  client_id: string,
  key_form: string,
  items: any,
  tip: any,
  service: any,
  getGibernoOrderId: string,
  wayPay: string,
  clientEmail: string
) => {
  // return new Promise<any>((resolve, reject) =>
  // "https://api.giberno.ru/invoice/?form_pay=497f6eca-6276-4993-bfeb-53cbbbba6f08"
  // setTimeout(() => {
  //   const data: any = {
  //     formID: 5,
  //     formName: 'Ресторан "Замес" 2',
  //     splitBill: true,
  //     deposit: 0.0,
  //     employee: "Иван Иванович",
  //     serviceFee: true,
  //     items: [
  //       {
  //         name: "Устрицы",
  //         description: "string",
  //         amount: 199900.0,
  //       },
  //       {
  //         name: "Жаркое",
  //         description: "string",
  //         amount: 150.0,
  //       },
  //       {
  //         name: "Жарwerewrfwerwerwerwekjrewjfhareofejrnofarejngmnrakgomeroigjneognjqreogengjnre;ieqneiuinreinое",
  //         description: "string",
  //         amount: 150.0,
  //       },
  //       {
  //         name: "Жарwerewrfwerwerwerwekjrewjfhareofejrnofarejngmnrakgomeroigjneognjqreogengjnre;ieqneiuinreinое",
  //         description: "string",
  //         amount: 150.0,
  //       },
  //       {
  //         name: "Жарwerewrfwerwerwerwekjrewjfhareofejrnofarejngmnrakgomeroigjneognjqreogengjnre;ieqneiuinreinое",
  //         description: "string",
  //         amount: 150.0,
  //       },
  //       {
  //         name: "Жарwerewrfwerwerwerwekjrewjfhareofejrnofarejngmnrakgomeroigjneognjqreogengjnre;ieqneiuinreinое",
  //         description: "string",
  //         amount: 150.0,
  //       },
  //       {
  //         name: "Жарwerewrfwerwerwerwekjrewjfhareofejrnofarejngmnrakgomeroigjneognjqreogengjnre;ieqneiuinreinое",
  //         description: "string",
  //         amount: 150.0,
  //       },
  //       {
  //         name: "Жарwerewrfwerwerwerwekjrewjfhareofejrnofarejngmnrakgomeroigjneognjqreogengjnre;ieqneiuinreinое",
  //         description: "string",
  //         amount: 150.0,
  //       },
  //       {
  //         name: "Жарwerewrfwerwerwerwekjrewjfhareofejrnofarejngmnrakgomeroigjneognjqreogengjnre;ieqneiuinreinое",
  //         description: "string",
  //         amount: 150.0,
  //       },
  //       {
  //         name: "Жарwerewrfwerwerwerwekjrewjfhareofejrnofarejngmnrakgomeroigjneognjqreogengjnre;ieqneiuinreinое",
  //         description: "string",
  //         amount: 150.0,
  //       },
  //       {
  //         name: "Жарwerewrfwerwerwerwekjrewjfhareofejrnofarejngmnrakgomeroigjneognjqreogengjnre;ieqneiuinreinое",
  //         description: "string",
  //         amount: 150.0,
  //       },
  //       {
  //         name: "Жарwerewrfwerwerwerwekjrewjfhareofejrnofarejngmnrakgomeroigjneognjqreogengjnre;ieqneiuinreinое",
  //         description: "string",
  //         amount: 150.0,
  //       },
  //       {
  //         name: "Жарwerewrfwerwerwerwekjrewjfhareofejrnofarejngmnrakgomeroigjneognjqreogengjnre;ieqneiuinreinое",
  //         description: "string",
  //         amount: 150.0,
  //       },
  //       {
  //         name: "Жарwerewrfwerwerwerwekjrewjfhareofejrnofarejngmnrakgomeroigjneognjqreogengjnre;ieqneiuinreinое",
  //         description: "string",
  //         amount: 150.0,
  //       },
  //       {
  //         name: "Жарwerewrfwerwerwerwekjrewjfhareofejrnofarejngmnrakgomeroigjneognjqreogengjnre;ieqneiuinreinое",
  //         description: "string",
  //         amount: 150.0,
  //       },
  //       {
  //         name: "Жарwerewrfwerwerwerwekjrewjfhareofejrnofarejngmnrakgomeroigjneognjqreogengjnre;ieqneiuinreinое",
  //         description: "string",
  //         amount: 150.0,
  //       },
  //       {
  //         name: "Жарwerewrfwerwerwerwekjrewjfhareofejrnofarejngmnrakgomeroigjneognjqreogengjnre;ieqneiuinreinое",
  //         description: "string",
  //         amount: 150.0,
  //       },
  //       {
  //         name: "Жарwerewrfwerwerwerwekjrewjfhareofejrnofarejngmnrakgomeroigjneognjqreogengjnre;ieqneiuinreinое",
  //         description: "string",
  //         amount: 150.0,
  //       },
  //     ],
  //     PaymentTypes: ["YANDEX_PAY", "SBP"],
  //     tips: true,
  //     email: true,
  //     emailRequire: false,
  //     serviceInfo: {
  //       serviceFeeDefault: true,
  //       serviceFeeWarning: true,
  //       serviceFeePercentage: 1.0,
  //       serviceFeeMax: 100.0,
  //     },
  //     tipsInfo: {
  //       tipsDefault: 0,
  //     },
  //   };
  //   resolve({
  //     config: {
  //       client_id: "7bc05553-4b68-44e8-b7bc-37be63c6d9e9",
  //       key_form: "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  //     },
  //     infoQrLink: {
  //       message:
  //         "https://qr.nspk.ru/AD10006IFHE6OGOC81A9GFFTEGDQTMAU?type=02&bank=100000000004&sum=27369&cur=RUB&crc=CDBE",
  //     },
  //   });
  // }, 0)
  // );
  const { ChangeisLoadingQr_Link } = qrLinktsStore;
  ChangeisLoadingQr_Link();
  return axios
    .post(
      `https://api.giberno.ru/invoice_qr/`,
      {
        orderID: getGibernoOrderId,
        //  TO-DO здесь вставить аргумент
        tipSum: tip,
        service: service,
        PaymentType: wayPay,
        //  TO-DO можно пустоту
        email: clientEmail,
        items: items,
      },
      {
        // Если я меняю эти параметры, то приходит 500
        params: {
          client_id: client_id,
          key_form: key_form,
        },
      }
    )
    .then((response: any) => {
      if (response.status !== 200) {
        throw Error("Что пошло не так! Перезагрузите страницу");
      }
      return {
        config: response.config.params,
        infoQrLink: response.data,
      };
    })
    .catch((err) => {
      return err.message;
    });
};

export const qrLinkAPI = {
  getQrLInk,
};
