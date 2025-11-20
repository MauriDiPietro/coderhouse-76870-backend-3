import { ProductModel } from "../models/product-model.js";
import { generateProduct } from "../utils/product-utils.js";

export const createProductMock = async (cant) => {
  try {
    const products = [];
    for (let i = 0; i < cant; i++) {
      const product = generateProduct();
      products.push(product);
    }
    return await ProductModel.create(products);
  } catch (error) {
    throw new Error(error);
  }
};

export const getProducts = async () => {
  try {
    return await ProductModel.find();
  } catch (error) {
    throw new Error(error);
  }
};
