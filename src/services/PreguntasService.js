import { db } from "../firebase";

class PreguntasServices {

    getPreguntas() {
        var preguntas = [];

        db.collection("preguntas").get().then(snapshot => {
            snapshot.forEach(doc => {
                preguntas.push({
                    key: doc.id,
                    pregunta: doc.data().pregunta,
                    alternativas: doc.data().alternativas,
                    respuesta: doc.data().respuesta,
                });
            });
        });

        return preguntas;
    }

    postPregunta(pregunta, alternativas, respuesta) {
        db.collection("preguntas")
            .add({ pregunta: pregunta, alternativas: alternativas, respuesta: respuesta })
            .then(() => {
                console.log("Document successfully written!");
            })
            .catch((error) => {
                console.error("Error writing document: ", error);
            });
    }
    poblar() {

        //1
        this.postPregunta('¿Cuál de los siguientes Pokémon no es de tipo dragón?', [
            {
                'id': 0,
                'text': 'Dragonite'
            },
            {
                'id': 1,
                'text': 'Charizard'
            },
            {
                'id': 2,
                'text': 'Dratini'
            },
            {
                'id': 3,
                'text': 'Dragonair'
            },
        ], 1);

        //2
        this.postPregunta('¿Cuándo es el cumpleaños de Mewtwo?', [
            {
                'id': 0,
                'text': '6 de Febrero'
            },
            {
                'id': 1,
                'text': '5 de Junio'
            },
            {
                'id': 2,
                'text': '11 de Junio'
            },
            {
                'id': 3,
                'text': '31 de Diciembre'
            },
        ], 0);

        //3
        this.postPregunta('Si al comenzar el juego nosotros elegíamos a Bulbasaur, entonces nuestro rival escogía a...', [
            {
                'id': 0,
                'text': 'Bulbasaur'
            },
            {
                'id': 1,
                'text': 'Charmander'
            },
            {
                'id': 2,
                'text': 'Eve'
            },
            {
                'id': 3,
                'text': 'Squirtle'
            },
        ], 1);
        //4
        this.postPregunta('¿Cuál de los siguientes no es un tipo de Pokémon visto en las primeras ediciones de los juegos originales ?', [
            {
                'id': 0,
                'text': 'Lucha'
            },
            {
                'id': 1,
                'text': 'Psíquico'
            },
            {
                'id': 2,
                'text': 'Acero'
            },
            {
                'id': 3,
                'text': 'Hielo'
            },
        ], 2);
        //5
        this.postPregunta('¿Qué tipo de Pokémon es Mr. Mime en Pokémon Amarillo?', [
            {
                'id': 0,
                'text': 'Psíquico'
            },
            {
                'id': 1,
                'text': 'Lucha'
            },
            {
                'id': 2,
                'text': 'Hada'
            },
            {
                'id': 3,
                'text': 'Normal'
            },
        ], 0);
        //6
        this.postPregunta('¿Cuál es el ataque más poderoso de Magikarp?', [
            {
                'id': 0,
                'text': 'Placaje'
            },
            {
                'id': 1,
                'text': 'Rayo solar'
            },
            {
                'id': 2,
                'text': 'Ira dragón'
            },
            {
                'id': 3,
                'text': 'Salpicadura'
            },
        ], 0);
        //7
        this.postPregunta('¿Cómo evoluciona Pikachu?', [
            {
                'id': 0,
                'text': 'A través de Intercambio'
            },
            {
                'id': 1,
                'text': 'Con la piedra Trueno'
            },
            {
                'id': 2,
                'text': 'Con la piedra Rayo'
            },
            {
                'id': 3,
                'text': 'Llegando a nivel 26'
            },
        ], 2);
        //8
        this.postPregunta('¿Qué tipo de relación tiene el Profesor Oak con nuestro rival en el juego?', [
            {
                'id': 0,
                'text': 'Es su abuelo'
            },
            {
                'id': 1,
                'text': 'Es su padre'
            },
            {
                'id': 2,
                'text': 'Es su nieto'
            },
            {
                'id': 3,
                'text': 'Es su tío'
            },
        ], 0);
        //9
        this.postPregunta('Sin hacer intercambios ni a través de eventos, ¿cuántos Pokémon distintos se pueden tener en el Pokédex jugando a Pokémon edición Roja?', [
            {
                'id': 0,
                'text': '124'
            },
            {
                'id': 1,
                'text': '150'
            },
            {
                'id': 2,
                'text': '151'
            },
            {
                'id': 3,
                'text': '139'
            },
        ], 0);
        //10
        this.postPregunta('Pokémon apareció en Japón en febrero de 1996. ¿Cuándo apareció en España?', [
            {
                'id': 0,
                'text': 'Diciembre de 1996'
            },
            {
                'id': 1,
                'text': 'Octubre de 1999'
            },
            {
                'id': 2,
                'text': 'Agosto de 1998'
            },
            {
                'id': 3,
                'text': 'Junio de 1997'
            },
        ], 1);
        //11
        this.postPregunta('La versión para la pequeña pantalla del videojuego contaba las aventuras de un joven con el sueño de convertirse en el mejor entrenador Pokémon llamado Ash. ¿Sabrías el nombre original de este personaje en Japón?', [
            {
                'id': 0,
                'text': 'Kenshiro'
            },
            {
                'id': 1,
                'text': 'Satoshi'
            },
            {
                'id': 2,
                'text': 'Takeshi'
            },
            {
                'id': 3,
                'text': '31 de Diciembre'
            },
        ], 1);
        //12
        this.postPregunta('En la edición Amarilla localizada en España, se nos ofrecen tres sugerencias para nombrar al protagonista además de insertar un nuevo nombre. ¿Cuál de las siguientes NO era una de esas tres?', [
            {
                'id': 0,
                'text': 'Ash'
            },
            {
                'id': 1,
                'text': 'Gualdo'
            },
            {
                'id': 2,
                'text': 'Jaime'
            },
            {
                'id': 3,
                'text': 'Red'
            },
        ], 3);
        //13
        this.postPregunta('¿Con cuál de estos Pokémon no combate la Líder de Gimnasio Misty en Pokemon Rojo y Azul?', [
            {
                'id': 0,
                'text': 'No es una líder de gimnasio'
            },
            {
                'id': 1,
                'text': 'Psyduck'
            },
            {
                'id': 2,
                'text': 'Starmie'
            },
            {
                'id': 3,
                'text': 'Staryu'
            },
        ], 1);
        //14
        this.postPregunta('¿Cómo se llama el líder del Team Rocket?', [
            {
                'id': 0,
                'text': 'Giovanni'
            },
            {
                'id': 1,
                'text': 'Jessie'
            },
            {
                'id': 2,
                'text': 'James'
            },
            {
                'id': 3,
                'text': 'Meowth'
            },
        ], 0);
        //15
        this.postPregunta('¿Qué es Missingno?', [
            {
                'id': 0,
                'text': 'Un líder de gimnasio'
            },
            {
                'id': 1,
                'text': 'Un objeto único'
            },
            {
                'id': 2,
                'text': 'Un Pókemon legendario'
            },
            {
                'id': 3,
                'text': 'Un error de programación'
            },
        ], 3);
        //16
        this.postPregunta('¿A partir de que versión japonesa se hicieron las primeras ediciones Roja y Azul occidentales?', [
            {
                'id': 0,
                'text': 'Edición especial Pikachu'
            },
            {
                'id': 1,
                'text': 'Edición verde'
            },
            {
                'id': 2,
                'text': 'Edición azul'
            },
            {
                'id': 3,
                'text': 'Edición amarilla'
            },
        ], 2);
        //17
        this.postPregunta('En Pokémon edición Amarilla podíamos ver a los secuaces del Team Rocket de la serie de televisión. Si Jessie usaba a Ekans para intentar detenernos, James usaba a...', [
            {
                'id': 0,
                'text': 'Wobbuffet'
            },
            {
                'id': 1,
                'text': 'Weezing'
            },
            {
                'id': 2,
                'text': 'Koffing'
            },
            {
                'id': 3,
                'text': 'Arbok'
            },
        ], 2);
        //18
        this.postPregunta('En la primera generación, algunos Pokémon evolucionan al subir de nivel, otros gracias a misteriosas piedras y algunos a través de intercambio. ¿Cuál de estos Pokémon podíamos conseguir únicamente si era transferido?', [
            {
                'id': 0,
                'text': 'Gengar'
            },
            {
                'id': 1,
                'text': 'Bulbasaur'
            },
            {
                'id': 2,
                'text': 'Aerodactyl'
            },
            {
                'id': 3,
                'text': 'Porygon'
            },
        ], 0);
        //19
        this.postPregunta('¿Cuál de estos no es un Pokémon legendario?', [
            {
                'id': 0,
                'text': 'Articuno'
            },
            {
                'id': 1,
                'text': 'Moltres'
            },
            {
                'id': 2,
                'text': 'Zapdos'
            },
            {
                'id': 3,
                'text': 'Gyarados'
            },
        ], 3);
        //20
        this.postPregunta('Pikachu es para muchos el abanderado de la propia saga. ¿Sabrías con qué número se le catalogó en el primer Pokédex?', [
            {
                'id': 0,
                'text': '28'
            },
            {
                'id': 1,
                'text': '1'
            },
            {
                'id': 2,
                'text': '19'
            },
            {
                'id': 3,
                'text': '25'
            },
        ], 3);
    }
}

export default new PreguntasServices();