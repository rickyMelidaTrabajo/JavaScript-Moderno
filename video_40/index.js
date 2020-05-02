const ciudades = ['Londres', 'New York', 'Madrid', 'Paris'];
const ordenes = new Set([123, 231, 131, 102]);
const datos = new Map();
datos.set('nombre', 'juan');
datos.set('profesion', 'desarrollador web');

//Entries a las ciudades
// for(let entrada of ciudades.entries()) {
//   console.log(entrada);
// }

//Iterador values
// for(let entrada of ciudades.values()) {
//   console.log(entrada);
// }

//Iterador keys
// for(let entrada of ciudades.keys()) {
//   console.log(entrada);
// }


//Iterador default
// for(let entrada of ciudades) {
//   console.log(entrada);
// }

/*-----------------------------------*/


//Entries para las ordenes
// for(let entrada of ordenes.entries()) {
//   console.log(entrada);
// }

//Iterador values
// for(let entrada of ordenes.values()) {
//   console.log(entrada);
// }


//Iterador keys
// for(let entrada of ordenes.keys()) {
//   console.log(entrada);
// }

//Iterador default
// for(let entrada of ordenes) {
//   console.log(entrada);
// }


/*-----------------------------------*/

// //Entries para el Map
// for(let entrada of datos.entries()){
//     console.log(entrada);
// }

//Iterador values
// for(let entrada of datos.values()) {
//   console.log(entrada);
// }

//Iterador keys
// for(let entrada of datos.keys()) {
//   console.log(entrada);
// }

//Iterador default
// for(let entrada of datos) {
//   console.log(entrada);
// }


/*-------------------------*/
const mensaje = 'Aprendiendo JavaScript';

for(let letra of mensaje) {
  //Esto imprime cada letra del string mensaje
  console.log(letra);
}
