
const inquirer = require('inquirer');
require('colors');

const menu = async() => {
    console.log('==========================================================='.rainbow);
    console.log('             Concurso de preguntas y respuestas            '.green);
    console.log('===========================================================\n'.rainbow);
    console.log('Instrucciones\n'.bgRed);
    console.log(` ${'A.'.magenta} Debe escoger una opción de respuesta por cada pregunta.`);
    console.log(` ${'B.'.magenta} Si escoge una respuesta incorrecta, el juego se termina.`);
    console.log(` ${'C.'.magenta} No hay límite de tiempo.`);
    console.log(` ${'D.'.magenta} Por cada ronda superada, se otorga puntos.`);
    console.log(` ${'E.'.magenta} Los puntos son acumulables si acierta las rondas.\n`);
    console.log(' ...Buena suerte!\n'.cyan);

    const questions = {
        type:'list',
        name:'opt',
        message: `¿Qué desea hacer? Use las flechas ↑ ↓ del teclado para desplazarse en las opciones. \nLuego presione ${'ENTER'.red} ${'para seleccionar'.yellow}`.yellow,
        choices: [
            {
                value: '1',
                name: `${'1.'.green} Empezar el juego`
            },
            {
                value: '2',
                name: `${'2.'.green} Ver historial`
            },
            {
                value: '3',
                name: `${'3.'.green} Salir`
            }

        ]
    }
   const {opt} = await inquirer.prompt(questions)
   return opt;
    
}

const menuOfEachCategory = async(nameCategory,question,options,i,puntos) => {
    const nameToUpperCase = nameCategory[0].toUpperCase() + nameCategory.substring(1);
    const index = `${i+1}`.green;
    const score = `${puntos}`.blue
    const choices = options.map((option,i) => {
          let index = `${i+1}.`.yellow;
          return{
              value: option,
              name: `${index} ${option}`
          }
    });

    choices.push({
        value: 'Salir',
        name: `${'(x)'.yellow} ${'Abandonar la partida'.red}`
    });
    const questions = {
        type:'list',
        name:'opt',
        message: `Pregunta ${index} de ${nameToUpperCase.red}:\n ${question.yellow} (Puntos = ${score})`,
        choices
    }
    const {opt} = await inquirer.prompt(questions);
    return opt;
}
const pausa = async() => {
    const stop = {
        type:'input',
        name:'opt',
        message: `Presione ${'ENTER'.red} para continuar`
    }
    await inquirer.prompt(stop);
}

module.exports = {
    menu,
    menuOfEachCategory,
    pausa
}