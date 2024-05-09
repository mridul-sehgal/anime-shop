// Glue between veiw and model

import productOperations from "../services/product-operations.js";

async function loadingProducts() {
  const prod = await productOperations.loadProducts();
  console.log("Products available are ", prod);
  for (let pdr of prod) {
    displayProduct(pdr);
  }
}

loadingProducts();

function addToCart() {
  //console.log('Add to cart pizza called',this);
  const currentButton=this;
  const productId=currentButton.getAttribute('product-id')
  //console.log('product id is',productId);
  productOperations.search(productId)
  printBasket()
  displayTotal()
  calculateTotal()
}


function displayTotal() {
  const cartProducts = productOperations.getProductsInCart();
  const total = document.querySelector("#total");
  total.innerText = '';

  let amount=0;
  for (let product of cartProducts) {
    amount += product.price;
  }

  const formattedTotal = amount.toFixed(2); 
  const totalSpan = document.createElement('span');
  totalSpan.innerText = `${formattedTotal}`; 
  total.appendChild(totalSpan);
  
}

function calculateTotal()
{
  
  const cartProducts = productOperations.getProductsInCart();
  let money=0;
  for (let product of cartProducts) {
    money += product.price;
  }
  
  console.log(money);
  return money*100;
}

export {calculateTotal}


function printBasket(){
  const cartProducts=productOperations.getProductsInCart();
  const basket=document.querySelector('#basket')
  basket.innerText='';
  for(let product of cartProducts)
    {
      const li=document.createElement('li')
      li.innerText=`${product.name} ${product.price}`
      basket.appendChild(li);
    }
}

function displayProduct(prod) {
  const outputDiv = document.querySelector("#output");

  const colDiv = document.createElement("div");
  colDiv.className = " card col-span-1";
  outputDiv.appendChild(colDiv);

  const image = document.createElement("img");
  //image.className="h-24 w-full"
  image.src = prod.image;
  colDiv.appendChild(image);

  const textDiv = document.createElement("div");
  textDiv.className = "m-4";
  colDiv.appendChild(textDiv);

  const spanName = document.createElement("span");
  spanName.classList.add("font-extrabold", "block");
  spanName.innerText = prod.name;
  textDiv.appendChild(spanName);

  const spanDesc = document.createElement("span");
  spanDesc.className = "block";
  spanDesc.innerText = prod.description;
  textDiv.appendChild(spanDesc);

  const spanPrice = document.createElement("span");
  spanPrice.className = "block";
  spanPrice.innerText = prod.price;
  textDiv.appendChild(spanPrice);

  const button = document.createElement("button");
  //button.addEventListener('click')
  button.type = "button";
  button.setAttribute('product-id',prod.id)
  button.addEventListener('click',addToCart)
  button.className =
    "bg-blue-700 rounded-2xl px-8 py-2 mx-16  text-center mb-6";
  button.innerText = "Add to Cart";
  colDiv.appendChild(button);

}


