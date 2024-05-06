// Glue between veiw and model

import productOperations from "../services/product-operations.js";

async function loadClothing()
{
    const cloths = await  productOperations.loadClothingProducts();
    console.log("Clothings available are ",cloths)
    for(let cloth of cloths)
        {
            displayClothing(cloth);
        }
}

loadClothing();


async function loadManga()
{
    const mangas = await  productOperations.loadMangaProducts();
    console.log("Mangas available are ",mangas)
}

loadManga();

async function loadAccessories()
{
    const accessories = await  productOperations.loadAccessoriesProducts();
    console.log("Mangas available are ",accessories)
}

loadAccessories();


function addToCart(){
    
}


function displayClothing(cloth){

    const outputDiv=document.querySelector('#output')

    const colDiv=document.createElement('div')
    colDiv.className=" card col-span-1"
    outputDiv.appendChild(colDiv)

    const image=document.createElement('img')
    //image.className="h-24 w-full"
    image.src=cloth.image;
    colDiv.appendChild(image);

    const textDiv=document.createElement('div')
    textDiv.className="m-4"
    colDiv.appendChild(textDiv);

    const spanName=document.createElement('span')
    spanName.classList.add("font-extrabold" ,"block")
    spanName.innerText=cloth.name;
    textDiv.appendChild(spanName);

    const spanDesc=document.createElement('span')
    spanDesc.className="block"
    spanDesc.innerText=cloth.description
    textDiv.appendChild(spanDesc);

    const spanPrice=document.createElement('span')
    spanPrice.className="block"
    spanPrice.innerText=cloth.price
    textDiv.appendChild(spanPrice);

    const button=document.createElement('button')
    button.type="button"
    button.className="bg-blue-700 rounded-2xl px-8 py-2 mx-16  text-center mb-6"
    button.innerText="Add to Cart";
    colDiv.appendChild(button);
    button.addEventListener('click',addToCart)
}
