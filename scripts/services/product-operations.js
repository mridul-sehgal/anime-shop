// Product CRUD Operations
// C-create , R- Read , U -Update , D - Delete
import Product from "../models/products";
import makeNetworkCall from "./api-client";

const productOperations = {

  // function 1
  async loadClothingProducts() {
    const anime = await makeNetworkCall();
    const clothing = anime["clothing"];

    const clothingArray = clothing.map((cloth) => {
      const currentCloth = new Product(
        cloth.name,
        cloth.description,
        cloth.image,
        cloth.price
      );
      return currentCloth;
    });

    return clothingArray;
  },


  // function 2
  async loadMangaProducts() {
    const anime = await makeNetworkCall();

    const manga = anime["manga"];
    const mangaArray = manga.map((Manga) => {
      const currentManga = new Product(
        Manga.name,
        Manga.description,
        Manga.image,
        Manga.price
      );
      return currentManga;
    });

    return mangaArray;
  },


  //function 3
  async loadAccessoriesProducts() {
    const anime = await makeNetworkCall();

    const accessories = anime["accessories"];

    const accessoriesArray = accessories.map((Accessories) => {
      const currentAccessories = new Product(
        Accessories.name,
        Accessories.description,
        Accessories.image,
        Accessories.price
      );
      return currentAccessories;
    });

    return accessoriesArray;
  },


};

export default productOperations;