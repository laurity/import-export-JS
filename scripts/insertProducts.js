import { inventory } from "./products.js";
import { listProducts } from "./listProducts.js";

//Lógica para insertar un producto
export const insertProducts = () => {
  const productForm = document.getElementById("product-form-events");
  productForm.addEventListener("submit", function (event) {
    //Le quitamos las propiedades de la etiqueta form
    event.preventDefault();

    //Capturar los valores introducidos por el usuario
    const productName = document.getElementById("product-name").value;
    const productQuantity = parseInt(
      document.getElementById("product-quantity").value
    );
    const productPrice = parseFloat(
      document.getElementById("product-price").value
    );

    //Validar que los campos no esten vacios
    if (productName && !isNaN(productQuantity) && !isNaN(productPrice)) {
      //Crear un nuevo objeto producto
      const newProduct = {
        id: inventory.length + 1,
        nombre: productName,
        cantidad: productQuantity,
        precio: productPrice,
      };

      //Agregar el producto a la lista de productos
      inventory.push(newProduct);

      const tbody = document.getElementById("clear-table");

      tbody.innerHTML = "";

      //Limpiamos los campos del formulario
      productForm.reset();


    
      //Listamos los productos
      listProducts();
    }
  });
};
