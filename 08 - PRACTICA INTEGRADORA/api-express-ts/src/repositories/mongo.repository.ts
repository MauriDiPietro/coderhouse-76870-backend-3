import { Document, Model } from "mongoose";
import { ProductType } from "../types/product.type";

export default class MongoRepository<T extends Document> {
  protected model: Model<T>;

  constructor(model: Model<T>) {
    this.model = model;
  }

  async getAll() {
    try {
    } catch (error) {
      throw error;
    }
  }

  async getById(id: string) {
    try {
    } catch (error) {
      throw error;
    }
  }

  async create(body: ProductType) {
    try {
    } catch (error) {
      throw error;
    }
  }

  async update() {
    try {
    } catch (error) {
      throw error;
    }
  }

  async delete() {
    try {
    } catch (error) {
      throw error;
    }
  }
}
