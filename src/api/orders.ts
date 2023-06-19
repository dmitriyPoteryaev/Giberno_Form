import axios from "axios";

const getInfoAboutOrder = () => {
  return axios
    .get(`https://api.giberno.ru/invoice/`, {
      params: {
        form_pay: "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      },
    })
    .then((response) => {
      return response.data.data;
    });
  // return new Promise<any>((resolve, reject) =>
  //   // "https://api.giberno.ru/invoice/?form_pay=497f6eca-6276-4993-bfeb-53cbbbba6f08"
  //   setTimeout(() => {
  //     const data: any = {
  //       formID: 5,
  //       formName: 'Ресторан "Замес" 2',
  //       splitBill: true,
  //       deposit: 0.0,
  //       employee: null,
  //       serviceFee: true,
  //       items: [
  //         {
  //           name: "Устрицы",
  //           description: "string",
  //           amount: 100.0,
  //         },
  //         {
  //           name: "Жаркое",
  //           description: "string",
  //           amount: 150.0,
  //         },

  //         {
  //           name: "Жарwerewrfwerwerwerwekjrewjfhareofejrnofarejngmnrakgomeroigjneognjqreogengjnre;ieqneiuinreinое",
  //           description: "string",
  //           amount: 150.0,
  //         },
  //       ],
  //       PaymentTypes: ["SBP", "BANK_CARD", "YANDEX_PAY"],
  //       tips: true,
  //       email: false,
  //       emailRequire: false,
  //       serviceInfo: {
  //         serviceFeeDefault: true,
  //         serviceFeeWarning: true,
  //         serviceFeePercentage: 1.0,
  //         serviceFeeMax: 100.0,
  //       },
  //       tipsInfo: {
  //         tipsDefault: 0,
  //       },
  //     };

  //     resolve(data);
  //   }, 0)
  // );
};

export const orderAPI = {
  getInfoAboutOrder,
};
