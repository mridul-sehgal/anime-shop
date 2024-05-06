// Product Models
class Product{
    constructor(name,description,image,price,id){
        this.name=name;
        this.description=description;
        this.image=image;
        this.price=price;
        this.id=id;
        this.isAddedInCart=false;
    }
}

export default Product;