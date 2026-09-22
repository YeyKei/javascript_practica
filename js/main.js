const name = "Yex";

let age = 18;

age = 19;

const proyectoFavorito = "Makeup";

console.log("Tu nombre es " + name);
console.log("Tu edad es " + age);
console.log("Mi proyecto favorito es " + proyectoFavorito);

console.error("Algo salió mal al conectar con el servidor.");

function misionMakeup(params) {
    console.log(params);
}

misionMakeup(name);