// Product CRUD Operations
// C-create , R- Read , U -Update , D - Delete
import Product from "../models/products";
import makeNetworkCall from "./api-client";

const productOperations = {
  // function 1
  async loadProducts() {
    const anime = await makeNetworkCall();
    const product = anime["products"];

    const ProductArray = product.map((prod) => {
      const currentProd = new Product(
        prod.name,
        prod.description,
        prod.image,
        prod.price,
        prod.id
      );
      return currentProd;
    });
    return ProductArray;
  },
};

export default productOperations;
