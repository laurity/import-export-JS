import{ listProducts } from"./listProducts.js"
import {insertProducts} from "./insertProducts.js"


/**
 * Autor: Laura López Alonso
 * GitHub: https://github.com/laurity/import-export-JS.git
 */

// Listamos los productos 

document.addEventListener("DOMContentLoaded", listProducts);
document.addEventListener("DOMContentLoaded", () =>{
    const btnForm = document.getElementById("product-form-events");
    btnForm.addEventListener("click", () => {
        insertProducts();
    });
    
});