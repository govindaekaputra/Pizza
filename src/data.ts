export type Pizza = {
  id: number;
  name: string;
  image: string;
  price: number;
  selectable_toppings: number[];
};

export type Topping = {
  id: number;
  name: string;
  price: number;
};

export enum PizzaSize {
  Small = "Small",
  Medium = "Medium",
  Large = "Large",
}

export const pizzas: Pizza[] = [
  {
    id: 1,
    name: "Pie Tuna Feast",
    image: "/img/pie-tuna-feast.webp",
    price: 8,
    selectable_toppings: [1, 2, 3, 4, 8, 11],
  },
  {
    id: 2,
    name: "Alfredo Chicken Mushroom Truffle",
    image: "/img/alfredo-chk-mushroom-truffle.webp",
    price: 10,
    selectable_toppings: [2, 3, 4, 5, 6, 7, 9, 11],
  },
  {
    id: 3,
    name: "Ultimate Meat Overload",
    image: "/img/ultimate-meat-overload.webp",
    price: 12,
    selectable_toppings: [2, 3, 4, 8, 9, 10, 11, 12],
  },
];

export const toppings: Topping[] = [
  {
    id: 1,
    name: "Avocado",
    price: 1,
  },
  {
    id: 2,
    name: "Broccoli",
    price: 1,
  },
  {
    id: 3,
    name: "Onions",
    price: 1,
  },
  {
    id: 4,
    name: "Zucchini",
    price: 1,
  },
  {
    id: 5,
    name: "Lobster",
    price: 2,
  },
  {
    id: 6,
    name: "Oyster",
    price: 2,
  },
  {
    id: 7,
    name: "Salmon",
    price: 2,
  },
  {
    id: 8,
    name: "Tuna",
    price: 2,
  },
  {
    id: 9,
    name: "Bacon",
    price: 3,
  },
  {
    id: 10,
    name: "Duck",
    price: 3,
  },
  {
    id: 11,
    name: "Ham",
    price: 3,
  },
  {
    id: 12,
    name: "Sausage",
    price: 3,
  },
];
