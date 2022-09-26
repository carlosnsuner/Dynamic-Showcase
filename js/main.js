
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

let playerSkillSp = [
    {
        idSp: "unaisimon",
        playerSkillSpain: 8
    },
    {
        idSp: "robertsanchez",
        playerSkillSpain: 8
    },
    {
        idSp: "azpilizcueta",
        playerSkillSpain: 8
    },
    {
        idSp: "ericgarcia",
        playerSkillSpain: 8
    },
    {
        idSp: "jordialba",
        playerSkillSpain: 8
    },
    {
        idSp: "laporte",
        playerSkillSpain: 8
    },
    {
        idSp: "pautorres",
        playerSkillSpain: 8
    },
    {
        idSp: "gavi",
        playerSkillSpain: 8
    },
    {
        idSp: "kike",
        playerSkillSpain: 8
    },
    {
        idSp: "marcosllorente",
        playerSkillSpain: 8
    },
    {
        idSp: "pedri",
        playerSkillSpain: 8
    },
    {
        idSp: "rodri",
        playerSkillSpain: 8
    },
    {
        idSp: "sergibusquets",
        playerSkillSpain: 8
    },
    {
        idSp: "daniolmo",
        playerSkillSpain: 8
    },
    {
        idSp: "ansufati",
        playerSkillSpain: 6
    },
    {
        idSp: "ferrantorres",
        playerSkillSpain: 8
    },
    {
        idSp: "morata",
        playerSkillSpain: 8
    },
    {
        idSp: "sarabia",
        playerSkillSpain: 8
    }

];

//Declaramos el objeto
// Jugadores de la selección Brasileña.

let playerSkillBr = [
    {
        idBr: "alisson",
        playerSkillBrasil: 8,
        Nacionalidad: "Brazil"
    },
    {
        idBr: "ederson",
        playerSkillBrasil: 5,
        Nacionalidad: "Brazil"
    },
    {
        idBr: "alexsandro",
        playerSkillBrasil: 7,
        Nacionalidad: "Brazil"
    },
    {
        idBr: "danilo",
        playerSkillBrasil: 5,
        Nacionalidad: "Brazil"
    },   
    {
        idBr: "edermilitao",
        playerSkillBrasil: 7,
        Nacionalidad: "Brazil"
    },

    {
        idBr: "marquinhos",
        playerSkillBrasil: 7,
        Nacionalidad: "Brazil"
    },
    {
        idBr: "thiagosilva",
        playerSkillBrasil: 9,
        Nacionalidad: "Brazil"
    },
    {
        idBr: "casemiro",
        playerSkillBrasil: 9,
        Nacionalidad: "Brazil"
    },
    {
        idBr: "philippecoutinho",
        playerSkillBrasil: 8,
        Nacionalidad: "Brazil"
    },
    {
        idBr: "fabinho",
        playerSkillBrasil: 7,
        Nacionalidad: "Brazil"
    },  
    {
        idBr: "fred",
        playerSkillBrasil: 8,
        Nacionalidad: "Brazil"
    },
    {
        idBr: "lucaspaqueta",
        playerSkillBrasil: 6,
        Nacionalidad: "Brazil"
    },
    {
        idBr: "antony",
        playerSkillBrasil: 7,
        Nacionalidad: "Brazil"
    },
    {
        idBr: "gabrieljesus",
        playerSkillBrasil: 6,
        Nacionalidad: "Brazil"
    },
    {
        idBr: "neymarjr",
        playerSkillBrasil: 9,
        Nacionalidad: "Brazil"
    },
    {
        idBr: "raphinha",
        playerSkillBrasil: 7,
        Nacionalidad: "Brazil"
    },
    {
        idBr: "richarlison",
        playerSkillBrasil: 6,
        Nacionalidad: "Brazil"
    },
    {
        idBr: "viniciusjr",
        playerSkillBrasil: 9,
        Nacionalidad: "Brazil"
    }
    
    ];
    
    const drag = (ev) => {
        ev.dataTransfer.setData("text", ev.target.idSp);

        // ("arrastrando...", ev.target.id);
    };

    const allowDrop = (ev) => {
        ev.preventDefault();
    };
    
    const drop = (ev) => {
        ev.preventDefault();

        let data = ev.dataTransfer.getData("text");
        // ev.target.appendChild(document.getElementById(data));

        let FinalSp = playerSkillSp.find(Spain => {
            return Spain.idSp == data
        });
    
        resultSkillSpain += FinalSp.playerSkillSpain;
    
        skillSpain.innerHTML = `${resultSkillSpain} %`;
    };

