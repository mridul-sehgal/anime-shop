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
  button.type = "button";
  button.className =
    "bg-blue-700 rounded-2xl px-8 py-2 mx-16  text-center mb-6";
  button.innerText = "Add to Cart";
  colDiv.appendChild(button);
  button.addEventListener("click", addToCart);
  button.setAttribute("productId", prod.id);
}


