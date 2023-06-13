const getInfoAboutOrder = () => {
  return new Promise<any>((resolve, reject) =>
    setTimeout(() => {
      const InfoAboutOrder: any = {
        Orders: [
          {
            title: "3 БЛЮДА СУП+САЛАТ+ГОРЯЧЕЕ",
            order: [
              " - морс клубнично-ягодный 200",
              " - морс клубнично-ягодный 200",
              " - морс клубнично-ягодный 200",
              " - морс клубнично-ягодный 200",
            ],
            price: 620,
            separatePosition: false,
          },
          {
            title: "3 БЛЮДА СУП+САЛАТ+ГОРЯЧЕЕ",
            order: [
              " - морс клубнично-ягодный 200",
              " - морс клубнично-ягодный 200",
              " - морс клубнично-ягодный 200",
              " - морс клубнично-ягодный 200",
            ],
            price: 620,
            separatePosition: false,
          },
          {
            title: "3 БЛЮДА СУП+САЛАТ+ГОРЯЧЕЕ",
            order: [
              " - морс клубнично-ягодный 200",
              " - морс клубнично-ягодный 200",
              " - морс клубнично-ягодный 200",
              " - морс клубнично-ягодный 200",
            ],
            price: 620,
            separatePosition: false,
          },
        ],
        name_waiter: "Иван Иванович",
        number_tabel: 4,
        general_order: 800,
      };

      resolve(InfoAboutOrder);
    }, 4000)
  );
};

export const orderAPI = {
  getInfoAboutOrder,
};
