// Product CRUD Operations
// C-create , R- Read , U -Update , D - Delete
import Product from "../models/products";
import makeNetworkCall from "./api-client";

const productOperations = {
  products:[],
  search(productId){
    const product=this.products.find((currentProduct)=>{
      return currentProduct.id===productId
    })
    //console.log('product found',product);
    product.isAddedInCart=true;

  },

  getProductsInCart(){
    const productInBasket=this.products.filter(product=>product.isAddedInCart)
    return productInBasket;
  },

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
    this.products=ProductArray
    return ProductArray;
  },
};

export default productOperations;
