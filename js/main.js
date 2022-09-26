
// Resultado de las habilidades de los jugadores de España

let skillSpain = document.getElementById("skillSpain");
let resultSkillSpain = 0;
skillSpain.innerHTML = `${resultSkillSpain} %`;


// Resultado de las habilidades de los jugadores de Brasil

let skillBrasil = document.getElementById("skillBrasil");
let resultSkillBrasil = 0;
skillBrasil.innerHTML = `${resultSkillBrasil} %`;


// Declaramos el objeto
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
        id: "kike",
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

    // Declaramos el objeto
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

const drag = (ev) => {
    ev.dataTransfer.setData("text", ev.target.id);

    // ("arrastrando...", ev.target.id);
};

const allowDrop = (ev) => {
    ev.preventDefault();
};

const drop = (ev) => {
    ev.preventDefault();

    let data = ev.dataTransfer.getData("text");
    // ev.target.appendChild(document.getElementById(data));

    let Final = playerSkills.find(SpainBrasil => {
        return SpainBrasil.id == data
    });

    console.log(Final.Nacionalidad);

    // Definimos el if...

    if (Final.Nacionalidad == "Spain") {

        console.log("Jugador español");

        resultSkillSpain += Final.playerSkill

        skillSpain.innerHTML = `${resultSkillSpain} %`;


        //  block of code to be executed if condition1 is true

    } else if (Final.Nacionalidad == "Brazil") {

        console.log("Jugador brasileño");

        resultSkillBrasil += Final.playerSkill

        skillBrasil.innerHTML = `${resultSkillBrasil} %`;

    }


    // resultSkillSpain += Final.playerSkillSpain;

    // skillSpain.innerHTML = `${resultSkillSpain} %`;

};

