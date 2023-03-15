//Saludo de bievenida a la página identificando al usuario
function saludar() {
    let nombreUsuario = prompt('Hola, ¿Cuál es tu nombre?');
    alert('Bienvenid@ a mi página, ' + nombreUsuario);
    alert('¿Primera vez comprando? 20% off al finalizar la compra');
}
saludar()

//ciclos por condicion
//while para elección de producto
let total = 0;
let mensaje = prompt(' Deseas comprar un producto? (s-si / n-no)');
while (mensaje == 's' || mensaje == 'S') {
    let producto = prompt('1-Perfumeria\n2-Cuidados Diarios\n3-Rostro\n4-Maquillaje\n5-Cabello\n6-Regalos');

    if (producto == '1') {
        producto = prompt('A-Perfumería Femenina\nB-Perfumería Infantil\nC-Perfumería Masculina').toLocaleLowerCase();
        switch (producto) {
            case 'a':
                alert('Amor amor- Cacharel 50 ml... $ 13860  AGREGADO AL CARRO!');
                incrementarTotal(13860);
                break;
            case 'b':
                alert('Mujercitas 80ml... $ 2536  AGREGADO AL CARRO!');
                incrementarTotal(2536);
                break;
            case 'c':
                alert('212 men nyc ... $ 29650  AGREGADO AL CARRO!');
                incrementarTotal(29650);
                break;
            default:
                alert('Codigo de producto inexistente');
                continue;
        }
        mensaje = prompt('Desea comprar otro producto? (s-si / n-no)');
    }
    if (producto == '2') {
        producto = prompt('A-Manos\nB-Pies\nC-Cuidado Corporal').toLocaleLowerCase();
        switch (producto) {
            case 'a':
                alert('Crema Ekos natura manos 75 g... $ 1270  AGREGADO AL CARRO!');
                incrementarTotal(1270);
                break;
            case 'b':
                alert('Crema esfoliante pies 75ml... $ 2536  AGREGADO AL CARRO!');
                incrementarTotal(2536);
                break;
            case 'c':
                alert('Crema corporal... $ 2915  AGREGADO AL CARRO!');
                incrementarTotal(2915);
                break;
            default:
                alert('Codigo de producto inexistente');
                continue;
        }
        mensaje = prompt('Desea comprar otro producto? (s-si / n-no)');
    }
    if (producto == '3') {
        producto = prompt('A-Antiseñales y tratamientos\nB-Barba\nC-Limpieza\nD-Hidratación').toLocaleLowerCase();
        switch (producto) {
            case 'a':
                alert('Suero reducto de arrugas... $ 5166  AGREGADO AL CARRO!');
                incrementarTotal(5166);
                break;
            case 'b':
                alert('Bálsamo post barba $ 1710  AGREGADO AL CARRO!');
                incrementarTotal(1710);
                break;
            case 'c':
                alert('Desmaquillante para rostro... $ 2700  AGREGADO AL CARRO!');
                incrementarTotal(2700);
                break;
            case 'd':
                alert('Acqua Biohidratante... $ 9560  AGREGADO AL CARRO!');
                incrementarTotal(9560);
                break;
            default:
                alert('Codigo de producto inexistente');
                continue;
        }
        mensaje = prompt('Desea comprar otro producto? (s-si / n-no)');
    }
    if (producto == '4') {
        producto = prompt('A-Boca\nB-Cejas\nC-Ojos\nD-Uñas').toLocaleLowerCase();
        switch (producto) {
            case 'a':
                alert('labial cremoso... $ 1790  AGREGADO AL CARRO!');
                incrementarTotal(1790)
                break;
            case 'b':
                alert('Delineador para cejas... $ 2200  AGREGADO AL CARRO!');
                incrementarTotal(2200)
                break;
            case 'c':
                alert('Máscara pestaña... $ 2100  AGREGADO AL CARRO!');
                incrementarTotal(2100)
                break;
            case 'd':
                alert('esmalte 3d gel... $ 2635  AGREGADO AL CARRO!');
                incrementarTotal(2635)
                break;
            default:
                alert('Codigo de producto inexistente');
                continue;
        }
        mensaje = prompt('Desea comprar otro producto? (s-si / n-no)');
    }
    if (producto == '5') {
        producto = prompt('A-Lavar\nB-Finalizar\nC-Tratar').toLocaleLowerCase();
        switch (producto) {
            case 'a':
                alert('shampoo 300ml 1476... $ 1270  AGREGADO AL CARRO!');
                incrementarTotal(1270)
                break;
            case 'b':
                alert('crema para peinar... $ 1650  AGREGADO AL CARRO!');
                incrementarTotal(1650)
                break;
            case 'c':
                alert('tonico capilar... $ 2550  AGREGADO AL CARRO!');
                incrementarTotal(2550)
                break;
            default:
                alert('Codigo de producto inexistente');
                continue;
        }
        mensaje = prompt('Desea comprar otro producto? (s-si / n-no)');
    }
    if (producto == '6') {
        producto = prompt('A-Ver todo en regalos\nB-Arma tu regalo\nC-Regalo con Causa').toLocaleLowerCase();
        switch (producto) {
            case 'a':
                alert('Kit Jazmin c/ Bolsa mediana... $ 2230  AGREGADO AL CARRO!');
                incrementarTotal(2230)
                break;
            case 'b':
                alert('Caja especial $ 2500  AGREGADO AL CARRO!');
                incrementarTotal(2500)
                break;
            case 'c':
                alert('Cuenco solidario... $ 1095  AGREGADO AL CARRO!');
                incrementarTotal(1095)
                break;
            default:
                alert('Codigo de producto inexistente');
                continue;
        }
        mensaje = prompt('Desea comprar otro producto? (s-si / n-no)');
    }
}

alert('Total de la compra $' + total)

//Cuanto voy gastando cuando agrego cada producto
function incrementarTotal(precio) {
    total = total + precio;
    alert('Llevas gastado $' + total)
    /*mensaje = prompt('¿ir a pagar? (s-si / n-no)');*/
}
mensaje = prompt('¿ir a pagar? (s-si / n-no)');
//Condicionales para que abone el pedido un mayor de edad

let edad = parseInt(prompt("Por favor ingresa tu edad"));
if (edad >= 18) {
    alert('¡ya falta poco para terminar tu pedido!');
} else {
    alert('Tu no tienes 18 años, necesitas ayuda de un mayor para realizar el pago.')
}
//Para pagar con descuento
if (edad >= 18) {
    function pagar() {
        descuento = total * 0.20
        alert('El total de la compra es:$' + total);
        alert('el descuento por tu compra es:$ ' + descuento);
        alert("El total a pagar es:$ " +( total - descuento));
        alert('¡Gracias por tu compra!')
    }
}
pagar()
