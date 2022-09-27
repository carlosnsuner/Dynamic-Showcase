
// Resultado de las habilidades de los jugadores de España

let skillSpain = document.getElementById("skillSpain");
let resultSkillSpain = 0;
skillSpain.innerHTML = `${resultSkillSpain} %`;


// Resultado de las habilidades de los jugadores de Brasil

let skillBrasil = document.getElementById("skillBrasil");
let resultSkillBrasil = 0;
skillBrasil.innerHTML = `${resultSkillBrasil} %`;


// Declaramos el objeto (playerSkills)
// Jugadores de la selección Epañola.

let playerSkills = [
    {
        id: "unaisimon",
        playerSkill: 8,
        Nacionalidad: "Spain"
    },
    {
        id: "robertsanchez",
        playerSkill: 8,
        Nacionalidad: "Spain"
    },
    {
        id: "azpilizcueta",
        playerSkill: 8,
        Nacionalidad: "Spain"
    },
    {
        id: "ericgarcia",
        playerSkill: 8,
        Nacionalidad: "Spain"
    },
    {
        id: "jordialba",
        playerSkill: 8,
        Nacionalidad: "Spain"
    },
    {
        id: "laporte",
        playerSkill: 8,
        Nacionalidad: "Spain"
    },
    {
        id: "pautorres",
        playerSkill: 8,
        Nacionalidad: "Spain"
    },
    {
        id: "gavi",
        playerSkill: 8,
        Nacionalidad: "Spain"
    },
    {
        id: "koke",
        playerSkill: 8,
        Nacionalidad: "Spain"
    },
    {
        id: "marcosllorente",
        playerSkill: 8,
        Nacionalidad: "Spain"
    },
    {
        id: "pedri",
        playerSkill: 8,
        Nacionalidad: "Spain"
    },
    {
        id: "rodri",
        playerSkill: 8,
        Nacionalidad: "Spain"
    },
    {
        id: "sergibusquets",
        playerSkill: 8,
        Nacionalidad: "Spain"
    },
    {
        id: "daniolmo",
        playerSkill: 8,
        Nacionalidad: "Spain"
    },
    {
        id: "ansufati",
        playerSkill: 6,
        Nacionalidad: "Spain"
    },
    {
        id: "ferrantorres",
        playerSkill: 8,
        Nacionalidad: "Spain"
    },
    {
        id: "morata",
        playerSkill: 8,
        Nacionalidad: "Spain"
    },
    {
        id: "sarabia",
        playerSkill: 8,
        Nacionalidad: "Spain"
    },

    // Declaramos el objeto (playerSkills)
    // Jugadores de la selección Brasileña.

    {
        id: "alisson",
        playerSkill: 8,
        Nacionalidad: "Brazil"
    },
    {
        id: "ederson",
        playerSkill: 5,
        Nacionalidad: "Brazil"
    },
    {
        id: "alexsandro",
        playerSkill: 7,
        Nacionalidad: "Brazil"
    },
    {
        id: "danilo",
        playerSkill: 5,
        Nacionalidad: "Brazil"
    },
    {
        id: "edermilitao",
        playerSkill: 7,
        Nacionalidad: "Brazil"
    },

    {
        id: "marquinhos",
        playerSkill: 7,
        Nacionalidad: "Brazil"
    },
    {
        id: "thiagosilva",
        playerSkill: 9,
        Nacionalidad: "Brazil"
    },
    {
        id: "casemiro",
        playerSkill: 9,
        Nacionalidad: "Brazil"
    },
    {
        id: "philippecoutinho",
        playerSkill: 8,
        Nacionalidad: "Brazil"
    },
    {
        id: "fabinho",
        playerSkill: 7,
        Nacionalidad: "Brazil"
    },
    {
        id: "fred",
        playerSkill: 8,
        Nacionalidad: "Brazil"
    },
    {
        id: "lucaspaqueta",
        playerSkill: 6,
        Nacionalidad: "Brazil"
    },
    {
        id: "antony",
        playerSkill: 7,
        Nacionalidad: "Brazil"
    },
    {
        id: "gabrieljesus",
        playerSkill: 6,
        Nacionalidad: "Brazil"
    },
    {
        id: "neymarjr",
        playerSkill: 9,
        Nacionalidad: "Brazil"
    },
    {
        id: "raphinha",
        playerSkill: 7,
        Nacionalidad: "Brazil"
    },
    {
        id: "richarlison",
        playerSkill: 6,
        Nacionalidad: "Brazil"
    },
    {
        id: "viniciusjr",
        playerSkill: 9,
        Nacionalidad: "Brazil"
    }

];

// Función de arrastrar // ("arrastrando...", ev.target.id);

const drag = (ev) => {
    ev.dataTransfer.setData("text", ev.target.id); 
};

const allowDrop = (ev) => {
    ev.preventDefault();
};

const drop = (ev, equipo) => {
    ev.preventDefault();

    let data = ev.dataTransfer.getData("text");

    console.log (equipo);

    // ev.target.appendChild(document.getElementById(data));

     // Definimos el if/else... para sumar las habilidades de cada selección en su ubicación determinada,
    // Usamos la propiedad Spain y Brazil para llamar a la nacionalidad del jugador.
    // El contador de habilidades está a cero en un primer momento con la variable "let resultSkillSpain"
    // A la variable resultSkillSpain, le vamos a sumar la habilidad de cadajugador definida por Final.playerSkill
    // Y mostramos en pantalla con "skillSpain.innerHTML" la suma de cada una de las habilidades.
    // Idem para Brasil

    
    let Final = playerSkills.find(SpainBrasil => {
        return SpainBrasil.id == data
    });

    console.log(Final.Nacionalidad);

    if (Final.Nacionalidad == "Spain" && equipo =="Spain") {

        console.log("Jugador español");

        resultSkillSpain += Final.playerSkill

        skillSpain.innerHTML = `${resultSkillSpain} %`;


    } else if (Final.Nacionalidad == "Brazil" && equipo =="Brazil") {

        console.log("Jugador brasileño");

        resultSkillBrasil += Final.playerSkill

        skillBrasil.innerHTML = `${resultSkillBrasil} %`;

    };
};

// Función pulsador,creamos la constante "pusador" al hacer click a reset, definimos los dos contadores de cada equipo a cero(resultSkillSpain,resultSkillBrasil)
// Llamamos a la función de javascript desde html para que nos de el resultado a cero skillSpain.innerHTML y skillBrasil.innerHTML

const pulsador = () => {

    resultSkillSpain = 0;
    resultSkillBrasil = 0;
    skillSpain.innerHTML = `${resultSkillSpain}`;
    skillBrasil.innerHTML = `${resultSkillBrasil}`;
};


    // // Diferenciar el campo de fútbol donde va cada jugador 
    
    // if(Nacionalidad.Spain == ){
    // // }

    // // const pulsador =() =>
    

    // resultSkillSpain += Final.playerSkillSpain;

    // skillSpain.innerHTML = `${resultSkillSpain} %`;
