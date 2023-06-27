import axios from "axios";

const getInfoAboutOrder = (client_id: string, key_form: string) => {
  // client_id=fb1969e9-8fa1-4b40-a9a4-da10a3fd968e&key_form=c5c5f096-15b4-4abd-b770-b7379500501a
  return axios
    .get(`https://api.giberno.ru/invoice_qr/`, {
      params: {
        client_id: client_id,
        key_form: key_form,
      },
    })
    .then((response: any) => {
      if (response.status !== 200) {
        return "Что пошло не так! Перезагрузите страницу";
      }
      if (response.data.status === "fail") {
        return response.data.errorMessage;
      }
      return {
        config: response.config.params,
        infoOrders: response.data.data,
      };
    })
    .catch((err) => {
      return err.message;
    });
  // return new Promise<any>((resolve, reject) =>
  //   // "https://api.giberno.ru/invoice/?form_pay=497f6eca-6276-4993-bfeb-53cbbbba6f08"
  //   setTimeout(() => {
  //     const data: any = {
  //       status: "success",
  //       data: {
  //         gibernoOrderId: "e85e0f60-4880-44f5-968b-c80ea199102d",
  //         formID: "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  //         deposit: 0.0,
  //         employee: "В Елена ",
  //         PaymentTypes: [
  //           {
  //             name: "SBP",
  //           },
  //           {
  //             name: "YANDEX_PAY",
  //           },
  //         ],
  //         splitBill: {
  //           enabled: true,
  //         },
  //         email: {
  //           enabled: true,
  //           emailRequire: true,
  //           emailCustomer: "foregonetomb654@gmail.com",
  //         },
  //         design: {
  //           headTextOne: null,
  //           headTextTwo: null,
  //           tipsText: null,
  //           serviceFeeText: null,
  //           divideText: null,
  //           menuColor: "ADFF2F",
  //           buttonColor: "ADFF2F",
  //         },
  //         serviceFee: {
  //           enabled: true,
  //           serviceFeeDefault: true,
  //           serviceFeeWarning: true,
  //           serviceFeePercentage: 1.0,
  //           serviceFeeMax: 100.0,
  //         },
  //         tips: {
  //           enabled: true,
  //           tipsDefault: 0,
  //         },
  //         items: [
  //           {
  //             name: "Жаркое",
  //             description: "string",
  //             amount: 120.36,
  //             positionID: "a9495f9f-e3c7-4502-9e46-851529164669",
  //           },
  //           {
  //             name: "Устрицы",
  //             description: "string",
  //             amount: 150.62,
  //             positionID: "3b9f7bc2-1e63-487b-9239-993e2a07d679",
  //           },
  //         ],
  //       },
  //     };
  //     resolve({
  //       config: {
  //         client_id: "7bc05553-4b68-44e8-b7bc-37be63c6d9e9",
  //         key_form: "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  //       },
  //       infoOrders: data.data,
  //     });
  //   }, 0)
  // );
};

export const orderAPI = {
  getInfoAboutOrder,
};
