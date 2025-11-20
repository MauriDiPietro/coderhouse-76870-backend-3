import * as ProductServices from "../services/product-services.js";

export const createProductMock = async (req, res) => {
  try {
    const { cant } = req.query;
    const response = await ProductServices.createProductMock(cant);
    res.status(201).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const getProducts = async (req, res) => {
  try {
    const response = await ProductServices.getProducts();
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
