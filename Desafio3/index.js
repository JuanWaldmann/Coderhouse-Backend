const fs = require("fs").promises;
class Contenedor {
  constructor(fileName) {
    this.fileName = fileName;
    this.products = [];
  }

  async save(newObj) {
    
    try {
      let file = await fs.readFile("./productos.txt", "utf8");
      let json = JSON.parse(file);
      //agregar id al objeto nuevo que se va a guardar
      newObj.id = json.length + 1;
      json.push(newObj);

      let jsonString = JSON.stringify(json);
      await fs.writeFile("./productos.txt", jsonString);
      return console.log(jsonString);
    } catch (error) {
      console.log(error);
    }
  }

  async getById(id) {
   
    try {
      let file = await fs.readFile("./productos.txt", "utf8");
      let json = JSON.parse(file);
      let product = json.find((product) => product.id == id);
      return console.log(product);
    } catch {
      return null;
    }
  }

  async getAll() {
    
    try {
      let file = await fs.readFile("./productos.txt", "utf8");
      let json = JSON.parse(file);
      this.products = json;
      return console.log(this.products);
    } catch (error) {
      console.log(error);
    }
  }

  async deleteById(id) {

    try {
      let file = await fs.readFile("./productos.txt", "utf8");
      let json = JSON.parse(file);
      let product = json.filter((product) => product.id != id);
      this.products = product;
      let jsonString = JSON.stringify(product);
      fs.writeFile(this.fileName, jsonString);
    } catch (error) {
      console.log(error);
    }
  }

  async deleteAll() {
    
    try {
      let product = [];
      this.products = product;
      let jsonString = JSON.stringify(product);
      fs.writeFile(this.fileName, jsonString);
    } catch (error) {
      console.log(error);
    }
  }
  async getRandomProduct(id){
    id = Math.floor(Math.random() * 7)
    try {
        let file = await fs.readFile("./productos.txt", "utf8");
        let json = JSON.parse(file);
        let product = json.find((product) => product.id == id);
        return console.log(product);
      } catch {
        return null;
      }
  }
}


module.exports = Contenedor;
