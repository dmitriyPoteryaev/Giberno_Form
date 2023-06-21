// import axios from "axios";

const getInfoAboutOrder = (client_id: string, key_form: string) => {
  // return axios
  //   .get(`https://api.giberno.ru/invoice_qr/`, {
  //     params: {
  //       client_id: client_id,
  //       key_form: key_form,
  //     },
  //   })
  //   .then((response: any) => {
  //     if (response.status !== 200) {
  //       throw Error("Что пошло не так! Перезагрузите страницу");
  //     }
  //     console.log(response.data.data);
  //     return {
  //       config: response.config.params,
  //       infoOrders: response.data.data,
  //     };
  //   })
  //   .catch((err) => {
  //     return err.message;
  //   });
  return new Promise<any>((resolve, reject) =>
    // "https://api.giberno.ru/invoice/?form_pay=497f6eca-6276-4993-bfeb-53cbbbba6f08"
    setTimeout(() => {
      const data: any = {
        formID: 5,
        formName: 'Ресторан "Замес" 2',
        splitBill: true,
        deposit: 0.0,
        employee: "Иван Иванович",
        serviceFee: true,
        items: [
          {
            name: "Устрицы",
            description: "string",
            amount: 100.0,
          },
          {
            name: "Жаркое",
            description: "string",
            amount: 150.0,
          },

          {
            name: "Жарwerewrfwerwerwerwekjrewjfhareofejrnofarejngmnrakgomeroigjneognjqreogengjnre;ieqneiuinreinое",
            description: "string",
            amount: 150.0,
          },
          {
            name: "Жарwerewrfwerwerwerwekjrewjfhareofejrnofarejngmnrakgomeroigjneognjqreogengjnre;ieqneiuinreinое",
            description: "string",
            amount: 150.0,
          },
          {
            name: "Жарwerewrfwerwerwerwekjrewjfhareofejrnofarejngmnrakgomeroigjneognjqreogengjnre;ieqneiuinreinое",
            description: "string",
            amount: 150.0,
          },
          {
            name: "Жарwerewrfwerwerwerwekjrewjfhareofejrnofarejngmnrakgomeroigjneognjqreogengjnre;ieqneiuinreinое",
            description: "string",
            amount: 150.0,
          },
          {
            name: "Жарwerewrfwerwerwerwekjrewjfhareofejrnofarejngmnrakgomeroigjneognjqreogengjnre;ieqneiuinreinое",
            description: "string",
            amount: 150.0,
          },
          {
            name: "Жарwerewrfwerwerwerwekjrewjfhareofejrnofarejngmnrakgomeroigjneognjqreogengjnre;ieqneiuinreinое",
            description: "string",
            amount: 150.0,
          },
          {
            name: "Жарwerewrfwerwerwerwekjrewjfhareofejrnofarejngmnrakgomeroigjneognjqreogengjnre;ieqneiuinreinое",
            description: "string",
            amount: 150.0,
          },
          {
            name: "Жарwerewrfwerwerwerwekjrewjfhareofejrnofarejngmnrakgomeroigjneognjqreogengjnre;ieqneiuinreinое",
            description: "string",
            amount: 150.0,
          },
          {
            name: "Жарwerewrfwerwerwerwekjrewjfhareofejrnofarejngmnrakgomeroigjneognjqreogengjnre;ieqneiuinreinое",
            description: "string",
            amount: 150.0,
          },
          {
            name: "Жарwerewrfwerwerwerwekjrewjfhareofejrnofarejngmnrakgomeroigjneognjqreogengjnre;ieqneiuinreinое",
            description: "string",
            amount: 150.0,
          },
          {
            name: "Жарwerewrfwerwerwerwekjrewjfhareofejrnofarejngmnrakgomeroigjneognjqreogengjnre;ieqneiuinreinое",
            description: "string",
            amount: 150.0,
          },
          {
            name: "Жарwerewrfwerwerwerwekjrewjfhareofejrnofarejngmnrakgomeroigjneognjqreogengjnre;ieqneiuinreinое",
            description: "string",
            amount: 150.0,
          },
          {
            name: "Жарwerewrfwerwerwerwekjrewjfhareofejrnofarejngmnrakgomeroigjneognjqreogengjnre;ieqneiuinreinое",
            description: "string",
            amount: 150.0,
          },
          {
            name: "Жарwerewrfwerwerwerwekjrewjfhareofejrnofarejngmnrakgomeroigjneognjqreogengjnre;ieqneiuinreinое",
            description: "string",
            amount: 150.0,
          },
          {
            name: "Жарwerewrfwerwerwerwekjrewjfhareofejrnofarejngmnrakgomeroigjneognjqreogengjnre;ieqneiuinreinое",
            description: "string",
            amount: 150.0,
          },
          {
            name: "Жарwerewrfwerwerwerwekjrewjfhareofejrnofarejngmnrakgomeroigjneognjqreogengjnre;ieqneiuinreinое",
            description: "string",
            amount: 150.0,
          },
        ],
        PaymentTypes: ["YANDEX_PAY", "SBP"],
        tips: true,
        email: false,
        emailRequire: false,
        serviceInfo: {
          serviceFeeDefault: true,
          serviceFeeWarning: true,
          serviceFeePercentage: 1.0,
          serviceFeeMax: 100.0,
        },
        tipsInfo: {
          tipsDefault: 0,
        },
      };

      resolve({
        config: {
          client_id: "7bc05553-4b68-44e8-b7bc-37be63c6d9e9",
          key_form: "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        },
        infoOrders: data,
      });
    }, 0)
  );
};

export const orderAPI = {
  getInfoAboutOrder,
};
