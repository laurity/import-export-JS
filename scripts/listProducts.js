import{ inventory }from "./products.js " ;

export const listProducts = ()=>{

    const clearTable = document.getElementById("clear-table");

        inventory.forEach(item => {
        
        const row = clearTable.insertRow();

        const cell1 = row.insertCell(0);
        const cell2 = row.insertCell(1);
        const cell3 = row.insertCell(2);
        const cell4 = row.insertCell(3);
        
            cell1.innerHTML = item.nombre;

            cell2.innerHTML = item.cantidad;

            cell3.innerHTML = item.precio;

    const editButton =  document.createElement("button");
    editButton.innerText = "EDITAR";
    editButton.addEventListener("click", ()=>{
             //logica para editar el producto (puedes mostrar un modal o realizar alguna accion específica)
             //puedes acceder a los datos del producto utilizando item.nombre, item.cantidad ...
    });
    cell4.appendChild(editButton);


       const deleteButton =  document.createElement("button");
       deleteButton.innerText = "BORRAR";
       deleteButton.addEventListener("click", ()=>{
        //logica para borrar el producto (puedes mostrar un mensaje de confirmacion antes)
        //puedes acceder a los datos del productoutilizando item.nombre, item.cantidad

        if(confirm(`¿Estás seguro que desea borrar el producto ${item.nombre}?`)){
            //Recibe el producto a borrar
            //Encuentra el índice del producto a eliminar: deltro del forEach, comparamos el product con el item correspondiente de inventory
            const index = inventory.findIndex( product => product.id === item.id )
            
            //Si el índice resultante no es -1, tenemos coincidencia
            if (index !== -1){
                //Borramos el producto del array, le indicamos el objeto y cuantos queremos borrar
                inventory.splice(index,1);
            }
        }

        clearTable.innerHTML= "";
        listProducts();
        });

       cell4.appendChild(deleteButton);

    });
}