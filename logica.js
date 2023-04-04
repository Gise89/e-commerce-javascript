//Saludo de bievenida a la página identificando al usuario
function saludar() {
    let nombreUsuario = prompt('Hola, ¿Cuál es tu nombre?');
    alert('Bienvenid@ a mi página, ' + nombreUsuario);
    alert('¿Primera vez comprando? 20% off al finalizar la compra con el código: 20OFF');
}
saludar()

//e-commerce
console.table(productos);
const carrito = [];
let contenedor = document.getElementById("misprods");

function renderizarProductos(){
    for(const producto of productos){
        contenedor.innerHTML += `
            <div class="card col-sm-2">
                <img src=${producto.foto} class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${producto.id}</h5>
                    <p class="card-text">${producto.categoria}</p>
                    <p class="card-text">${producto.subcategoria}</p>
                    <p class="card-text">${producto.nombre}</p>
                    <p class="card-text">$ ${producto.precio}</p>
                    <button id='btn${producto.id}' class="btn btn-primary align-bottom">Comprar</button>
                </div>
            </div>   
        `;
    }
    productos.forEach((producto)=>{
        document.getElementById(`btn${producto.id}`).addEventListener('click',()=>{
            agregarACarrito(producto);
    });
});
}

renderizarProductos();

function agregarACarrito(prodAAgregar){
    carrito.push(prodAAgregar);
    console.table(carrito);
    alert(`Agregaste ${prodAAgregar.nombre} al carrito !`);
    
    //agregar fila a la tabla de carrito
    document.getElementById('tablabody').innerHTML += `
        <tr>
            <td>${prodAAgregar.id}</td>
            <td>${prodAAgregar.categoria}</td>
            <td>${prodAAgregar.subcategoria}</td>
            <td>${prodAAgregar.nombre}</td>
            <td>${prodAAgregar.precio}</td>
        </tr>
    `;
    //incrementar el total
    let totalCarrito = carrito.reduce((acumulador,producto)=>acumulador+producto.precio,0);
    totalCarrito = aplicarDescuento(totalCarrito)
    document.getElementById('total').innerText = 'Total a pagar $: '+totalCarrito;
}
function aplicarDescuento(total){
    let codigo = prompt("Por favor ingresa tu codigo de descuento");
    if(codigo=="20OFF"){
        return total - (total * 0.20)
    }
    return total
}