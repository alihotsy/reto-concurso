const { menu, pausa } = require('./helpers/menu');
const Categories = require('./models/categories');
require('colors');


const main = async() => {
    const categories = new Categories();
    let option = '';
    do {
      option = await menu();
      switch (option) {
          case '1':
             await categories.startQuiz();
              break;
      
          case '2':
             await categories.historial();
              break;
      }
      
      
  } while (option != '3');
}

main();