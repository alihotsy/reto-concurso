

class Category {
    name = ''; //Nombre de la categoría
    round = []; //Corresponde a cada una de las ronda
    constructor(name,round){
      this.name = name;
      this.round = round;
    }

    get getName(){
      return this.name;
    }
    get getRounds(){
      return this.round;
    }
}

module.exports = {
    Category
}