/* let fs = require('fs')  // asi lo estaba intentando yo.


let producto1 = new Contenedor(fs.readFileSync('./test.txt', 'utf-8'))
producto1.save(producto1)
console.log(producto1) */

const Contenedor = require("./index.js");

const nuevoProducto = new Contenedor("./productos.txt");

//Descomentar las siguientes lineas para probar el metodo y volver a comentar las otras

/* nuevoProducto.save({
  title: "Globo Terráqueo",
  price : 345,
  thumbnail: "https://cdn3.iconfinder.com/data/icons/education-209/64/globe-earth-geograhy-planet-school-256.png",
  id: 4,
}); */

nuevoProducto.getById(3);

/*nuevoProducto.getAll();*/

/*nuevoProducto.deleteById(3);*/

/*nuevoProducto.deleteAll();*/

/* nuevoProducto.getAll(); */
