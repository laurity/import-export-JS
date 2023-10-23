import{ listProducts } from"./listProducts.js"
import {insertProducts} from "./insertProducts.js"


const btnForm = document.getElementById("product-form-events");

/**
 * Autor: Laura López Alonso
 * GitHub: https://github.com/laurity/import-export-JS.git
 */

// Listamos los productos 

document.addEventListener("DOMContentLoaded", listProducts);
document.addEventListener("click", () =>{
    insertProducts();
});