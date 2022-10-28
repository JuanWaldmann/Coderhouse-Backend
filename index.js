// Desafio Entregable numero 1 Juan Ignacio Waldmann

class Usuario {
  constructor(nombre, apellido) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.mascotas = [];
    this.libros = [];
  }
  getFullName() {
    console.log(`El nombre de usuario es ${this.nombre} ${this.apellido}`);
  }
  addMascota(mascota) {
    this.mascotas.push(mascota);
  }
  addBook(nombreLibro, autorLibro) {
    this.libros.push({
      nombre: nombreLibro,
      autor: autorLibro,
    });
  }

  countMascotas() {
    console.log(`El usuario tiene: ${this.mascotas.length} mascotas`);
  }
  getBookNames() {
    return this.libros.map(libro => libro.nombre);
  }
}
let usuario1 = new Usuario("Elon", "Musk");

usuario1.addMascota("Frida");
usuario1.addMascota("Amapola");
usuario1.addMascota("Shiva");

usuario1.addBook("El senior de las moscas", "William Golding");
usuario1.addBook("Fundacion", "Isaac Asimov");

usuario1.getFullName();

usuario1.countMascotas();

console.log(usuario1.getBookNames())
