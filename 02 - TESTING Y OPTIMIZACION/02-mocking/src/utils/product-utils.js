import { fakerES as faker } from "@faker-js/faker";

export const generateProduct = () => {
  return {
    name: faker.commerce.productName(),
    price: faker.number.int({ min: 100, max: 200000 }),
    image: faker.image.url(),
    description: faker.commerce.productDescription(),
  };
};

// console.log(generateProduct());

/* ------------------------------------ - ----------------------------------- */

import casual from "casual";

const generateProductCasual = () => {
  return {
    name: casual.name,
    price: casual.integer(),
    image: casual.url,
    description: casual.description,
  };
};

// console.log(generateProductCasual());

/* ------------------------------------ - ----------------------------------- */

import Chance from "chance";

const chance = new Chance();

const generateProductChance = () => {
  return {
    name: chance.name(),
    price: chance.integer({ min: 100, max: 200000 }),
    image: chance.url(),
    description: chance.letter(),
  };
};

// console.log(generateProductChance());

/* ------------------------------------ - ----------------------------------- */

const generateProductJavascript = () => {
  const namesProduct = ["prod1", "prod2", "prod3", "prod4", "prod5"];
  const pricesProduct = [100, 200, 300, 400, 500];
  const imagesProduct = [
    "https://picsum.photos/200/300",
    "https://picsum.photos/200/300",
    "https://picsum.photos/200/300",
    "https://picsum.photos/200/300",
    "https://picsum.photos/200/300",
  ];
  const descriptionsProduct = ["desc1", "desc2", "desc3", "desc4", "desc5"];

  const randomIndex = Math.floor(Math.random() * namesProduct.length);

  return {
    name: namesProduct[randomIndex],
    price: pricesProduct[randomIndex],
    image: imagesProduct[randomIndex],
    description: descriptionsProduct[randomIndex],
  };
};

// console.log(generateProductJavascript())