const { quiz, totalPoints } = require("../bankOfQuestions/competition");
const { saveData, getData } = require("../db/dataBase");
const { menuOfEachCategory, pausa } = require("../helpers/menu");
const { Category } = require("./category");



class Categories {
    categories = [];

    constructor(){
       this.createCategory();
    }

   get getCategories(){
       return this.categories;
   }

   createCategory(){ //Asignamos las rondas (Se crean)
       Object.keys(quiz).forEach(nameCategory => {
           const category = new Category(nameCategory,quiz[nameCategory]);
           this.categories.push(category);
       });
   }
   async startQuiz(){
       const historial = [];
       romper:
       for(let category of this.categories){
           const rounds = category.getRounds;
           const name = category.getName;

           for(let [i,round] of rounds.entries()){
                const {question,options,correctAnswer,points} = round;
                const value = await menuOfEachCategory(name,question,options,i,points);

                if(value === 'Salir'){ //Valida si el usuario da en la opción en salir
                    console.log("*********************************".rainbow);
                    console.log(`           ¡Game Over!`.red);
                    console.log("*********************************".rainbow);
                    await pausa();
                    break romper;
                }
                else if(value != correctAnswer){ //VAlida si el usuario escoge una respuesta errónea
                    console.log("*********************************".rainbow);
                    console.log(`      Respuesta ${'¡INCORRECTA!'.red}`);
                    console.log("*********************************".rainbow);
                    saveData(historial);
                    await pausa();
                    break romper;
                }
                
                
                 historial.push({
                     ...round,
                     matchAnswer: true, // Verifica que el usuario respondió correctamente
                     name 
                 })
                 saveData(historial);
                console.log("\n");   
           }
           await pausa();
           
       }
   }
    async historial() {
        const data = getData();
        if(!data){ //Antes de iniciar el juego por primera vez, y das en la opción de ver el historial, mostrará el mensaje de que no hay datos guardados.
            console.log("**************************************************".rainbow);
            console.log("       !No hay datos guardados del jugador!".italic.red);
            console.log("**************************************************".rainbow);
        } else{
            console.log(`                                     RESULTADOS DEL JUGADOR                                     `.bgGreen.black);
            let obtainedPoints = 0;
            const maxPoints = totalPoints();
            data.forEach(({question,correctAnswer,points,name}) => {
                 obtainedPoints+=points;
                 const point = `${points}`.magenta;
                 console.log('================================================================================================'.rainbow);
                 console.log(`Categoría = ${name.italic.blue}`);
                 console.log(`Pregunta = ${question.italic.blue}`);
                 console.log(`Respuesta correcta = ${correctAnswer.italic.blue}`);
                 console.log(`Coincidencia = ${'Sí'.italic.blue}`)
                 console.log(`Puntos = ${point}`);
                 console.log('================================================================================================\n'.rainbow);
            })
            console.log('Puntaje:\n'.red.bgWhite);
            const percentage = (obtainedPoints/maxPoints*100).toFixed(2)+"%";
            console.log(`Puntos obtenidos = ${obtainedPoints.toString().green}/${maxPoints}`);
            console.log(`Porcentaje = ${percentage.green}`);
        }
        await pausa();
    }

}
module.exports = Categories;