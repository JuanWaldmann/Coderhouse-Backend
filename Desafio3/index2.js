const Contenedor = require("./index.js");

const nuevoProducto = new Contenedor("./productos.txt");


nuevoProducto.save({
  title: "Globo Terráqueo",
  price : 345,
  thumbnail: "https://cdn3.iconfinder.com/data/icons/education-209/64/globe-earth-geograhy-planet-school-256.png",
  id: 3,
});

nuevoProducto.getById(1);

nuevoProducto.getAll()

/*nuevoProducto.deleteById(3)*/

/*nuevoProducto.deleteAll();*/

/* nuevoProducto.getAll(); */
