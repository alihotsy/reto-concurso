const quiz = {
    biologia:[
        {
            question: '¿Dónde termina el intestino grueso?',
            options: [
                "Estómago",
                "Intestino Grueso",
                "Recto",
                "Ninguna de las anteriores"
            ],
            correctAnswer: "Recto",
            points:5
        },
        {
            question: 'Las células reproductoras se dividen por...',
            options: [
                "Metamorfosis",
                "Mitosis",
                "Meiosis",
                "Ninguna de las anteriores"
            ],
            correctAnswer: "Meiosis",
            points:5
        },
        {
            question: '¿Qué mamífero no puede mirar hacia arriba?',
            options: [
                "Cerdo",
                "Jirafa",
                "Rinoceronte",
                "Perro"
            ],
            correctAnswer: "Cerdo",
            points:10
        },
        {
            question: 'La diabetes es una enfermedad de tipo',
            options: [
                "Circulatoria",
                "Endocrina",
                "Nerviosa",
                "Ninguna de las anteriores"
            ],
            correctAnswer: 'Endocrina',
            points:10
        },
        {
            question: 'La función principal de la Bilis es',
            options: [
                "Digerir proteínas",
                "Disolver Minerales",
                "Descomponer las grasas",
                "Digerir azúcares"
            ],
            correctAnswer: 'Descomponer las grasas',
            points:15
        }
    ],
    astronomia: [
        {
            question: '¿Cuánto demora la luz del sol en llegar a la tierra?',
            options: [
                "8 minutos y 30 segundos",
                "8 minutos y 19 segundos",
                "7 minutos y 50 segundos",
                "9 minutos"
            ],
            correctAnswer: '8 minutos y 19 segundos',
            points:5
        },
        {
            question: '¿En qué planetas del sistema solar llueven diamantes?',
            options: [
                "Tierra y Urano",
                "Neptuno y Urano",
                "Venus y Neptuno",
                "Mercurio y Neptuno"
            ],
            correctAnswer: 'Neptuno y Urano',
            points:10
        },
        {
            question: '¿Cuántos satélites naturales tiene Júpiter?',
            options: [
                "19",
                "71",
                "93",
                "64"
            ],
            correctAnswer: '64',
            points:10
        },
        {
            question: '¿Qué día pisó Amstrong la Luna?',
            options: [
                "16 de Julio de 1969",
                "21 de Julio de 1969",
                "4 de Julio de 1969",
                "12 de Julio de 1968"
            ],
            correctAnswer: '21 de Julio de 1969',
            points:10
        },
        {
            question: '¿Qué tipo de estrella es el Sol según su temperatura?',
            options: [
                "Categoría M",
                "Categoría B",
                "Categoría O",
                "Categoría G"
            ],
            correctAnswer: 'Categoría G',
            points:15
        }
    ],
    tecnologia: [
        {
            question: '¿Quién creó el lenguaje de programación Python?',
            options: [
                "James Gosling",
                "Larry Wall",
                "Guido Van Rossum",
                "Ryan Dahl"
            ],
            correctAnswer: 'Guido Van Rossum',
            points:5
        },
        {
            question: '¿En qué año salió el primer Macintosh de Apple?',
            options: [
                "24 de enero de 1984",
                "7 de febreo de 1983",
                "9 de octubre de 1981",
                "15 de enero de 1985"
            ],
            correctAnswer: '24 de enero de 1984',
            points:10
        },
        {
            question: '¿Quién fundó Google?',
            options: [
                "Steve Wozniak",
                "Larry Ellison",
                "Larry Page",
                "Mike Markkula"
            ],
            correctAnswer: 'Larry Page',
            points:5
        },
        {
            question: '¿Qué signfica la abreviatura WWW?',
            options: [
                "World Wailer Web",
                "Wireless World Web",
                "World Wild Web",
                "World Wide Web"
            ],
            correctAnswer: 'World Wide Web',
            points:5
        },
        {
            question: '¿Cuál de los siguientes métodos es válido en un Stream de Java',
            options: [
                "size()",
                "length()",
                "parallel()",
                "remove()"
            ],
            correctAnswer: 'parallel()',
            points:15
        }
    ],
    psicologia: [
        {
            question: '¿Cómo se llama el miedo a los espacios abiertos?',
            options: [
                "Agorafobia",
                "Talasofobia",
                "Acrofobia",
                "Claustrofobia"
            ],
            correctAnswer: 'Claustrofobia',
            points:5
        },
        {
            question: '¿Cómo se llama el trastorno mental en el que uno está sujeto\n a pensamientos y acciones repetitivos?',
            options: [
                "Trastorno obsesivo compulsivo",
                "Desorden de personalidad",
                "Esquizofrenia",
                "Trastorno Bipolar"
            ],
            correctAnswer: 'Trastorno obsesivo compulsivo',
            points:10
        },
        {
            question: '¿Quién fue el fundador del psicoanálisis infantil?',
            options: [
                "Philip G. Zimbardo",
                "Otto Rango",
                "Anna Freud",
                "Josef Breuer"
            ],
            correctAnswer: 'Anna Freud',
            points:5
        },
        {
            question: '¿Cuál de estas no es una de las etapas de desarrollo psicosexual\n de Freud?',
            options: [
                "Anal",
                "Fálico",
                "Oral",
                "Curioso"
            ],
            correctAnswer: 'Curioso',
            points:10
        },
        {
            question: '¿Qué tipo de modificación del comportamiento se basa en las consecuencias?',
            options: [
                "Inundación",
                "Condicionamiento clásico",
                "Condicionamiento operante",
                "Terapia de aversión"
            ],
            correctAnswer: 'Condicionamiento operante',
            points:15
        }
    ],
    matematicas: [
        {
            question: '¿Qué es un triángulo rectángulo isósceles?',
            options: [
                "Aquél que la suma de sus catetos es mayor al de la hipotenusa",
                "Aquél que uno de sus catetos es mayor que el otro",
                "Aquél que la hipotenusa es mayor que uno de sus catetos",
                "Aquél que sus dos catetos son iguales"
            ],
            correctAnswer: 'Aquél que sus dos catetos son iguales',
            points:5
        },
        {
            question: '¿Qué letra continúa la serie: U,D,T,?',
            options: [
                "W",
                "K",
                "M",
                "C"
            ],
            correctAnswer: 'C',
            points:10
        },
        {
            question: `¿Cómo se expresa de forma algebraica el siguiente enunciado:\n ${'La mitad del cuadrado de la suma de los cuadrados de dos números'.magenta}?`,
            options: [
                "(a^2)^2/2 + (a^2)^2/2",
                "(a^2+b^2)^2/2",
                "2a^2+2b^2",
                "Ninguna de las anteriores"
            ],
            correctAnswer: '(a^2+b^2)^2/2',
            points:10
        },
        {
            question: `¿Cuál par de rectas son perpendiculares?`,
            options: [
                "y=2x+3,y=-x/2-9",
                "y=4x-7,y=6x+3",
                "y=11x-11,y=3x+1",
                "y=2x+4,y=x"
            ],
            correctAnswer: 'y=2x+3,y=-x/2-9',
            points:15
        },
        {
            question: `¿Cuál de las siguientes funciones matemáticas cumple con el siguiente enunciado:\n ${'Toda función diferenciable es continua, pero no toda función que es continua es diferenciable'.magenta}?`,
            options: [
                "y=sin(x)",
                "y=x^3",
                "y=|x|",
                "y=x+7"
            ],
            correctAnswer: 'y=|x|',
            points:25
        }
    ]
}

const totalPoints = () => {
    let totalPoints = 0;
    for(category in quiz){
       for(round of quiz[category]) {
           const {points} = round;
           totalPoints+=points;
       }
    }
    return totalPoints;
}


module.exports = {
    quiz,
    totalPoints
}