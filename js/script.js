// ========================================
// OOPS! DESSERTS
// Práctica de JavaScript
// ========================================


// 1. CREACIÓN DE VARIABLES

let nombrePostre = "Brownie";
let precio = 35;
let cantidad = 2;
let disponible = true;


// 2. IMPRESIÓN EN CONSOLA

console.log("♡ OOPS! DESSERTS ♡");

console.log("Postre: " + nombrePostre);
console.log("Precio: $" + precio);
console.log("Cantidad: " + cantidad);


// Calculamos el total del pedido

let total = precio * cantidad;

console.log("Total del pedido: $" + total);


// 3. EJERCICIO CONDICIONAL

if (disponible == true) {

    console.log("¡Tu " + nombrePostre + " está disponible! ♡");

} else {

    console.log("Oops! Este postre se agotó :(");

}


// 4. EJERCICIO DE CICLOS

let postres = [
    "Brownie",
    "Cheesecake",
    "Galletas",
    "Pay de limón"
];

console.log("♡ MENÚ DE POSTRES ♡");

for (let i = 0; i < postres.length; i++) {

    console.log((i + 1) + ". " + postres[i]);

}