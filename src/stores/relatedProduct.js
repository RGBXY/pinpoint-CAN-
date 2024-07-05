import { defineStore } from "pinia";
export const useProductStore = defineStore("productStore", {
  state: () => ({
    product: [
      {
        id: "1",
        img: new URL("../../public/img/related_1.jpeg", import.meta.url).href,
        gender: "WOMEN",
        title: "Product 1",
        price: "Rp400.000",
        review: "⭐⭐⭐⭐⭐ (4.5) 16 Reviews",
      },
      {
        id: "2",
        img: new URL("../../public/img/related_2.jpeg", import.meta.url).href,
        gender: "WOMEN",
        title: "Product 2",
        price: "Rp400.000",
        review: "⭐⭐⭐⭐⭐ (4.5) 16 Reviews",
      },
      {
        id: "3",
        img: new URL("../../public/img/related_3.jpeg", import.meta.url).href,
        gender: "WOMEN",
        title: "Product 3",
        price: "Rp400.000",
        review: "⭐⭐⭐⭐⭐ (4.5) 16 Reviews",
      },
      {
        id: "4",
        img: new URL("../../public/img/related_4.jpeg", import.meta.url).href,
        gender: "WOMEN",
        title: "Product 4",
        price: "Rp400.000",
        review: "⭐⭐⭐⭐⭐ (4.5) 16 Reviews",
      },
      {
        id: "5",
        img: new URL("../../public/img/related_4.jpeg", import.meta.url).href,
        gender: "WOMEN",
        title: "Product 5",
        price: "Rp400.000",
        review: "⭐⭐⭐⭐⭐ (4.5) 16 Reviews",
      },
    ],
  }),
});
