//Practica 3
let logGreeting = (miParametro) => miParametro();
logGreeting(function () {
  console.log("function created on the fly");
});

//interpolacion de strings
let logGreeting1 = (miNombre, miColor) => {
  console.log(
    `Hola ${miNombre} buenos dias!, apuesto que tu color favorito es el ${miColor}`
  );
};
logGreeting1("Edgar", "Rojo");
