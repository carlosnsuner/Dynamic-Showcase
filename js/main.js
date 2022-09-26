
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
        playerSkillSpain: 8,
        NacionalidadSp: "Spain"
    },
    {
        idSp: "robertsanchez",
        playerSkillSpain: 8,
        NacionalidadSp: "Spain"
    },
    {
        idSp: "azpilizcueta",
        playerSkillSpain: 8,
        NacionalidadSp: "Spain"
    },
    {
        idSp: "ericgarcia",
        playerSkillSpain: 8,
        NacionalidadSp: "Spain"
    },
    {
        idSp: "jordialba",
        playerSkillSpain: 8,
        NacionalidadSp: "Spain"
    },
    {
        idSp: "laporte",
        playerSkillSpain: 8,
        NacionalidadSp: "Spain"
    },
    {
        idSp: "pautorres",
        playerSkillSpain: 8,
        NacionalidadSp: "Spain"
    },
    {
        idSp: "gavi",
        playerSkillSpain: 8,
        NacionalidadSp: "Spain"
    },
    {
        idSp: "kike",
        playerSkillSpain: 8,
        NacionalidadSp: "Spain"
    },
    {
        idSp: "marcosllorente",
        playerSkillSpain: 8,
        NacionalidadSp: "Spain"
    },
    {
        idSp: "pedri",
        playerSkillSpain: 8,
        NacionalidadSp: "Spain"
    },
    {
        idSp: "rodri",
        playerSkillSpain: 8,
        NacionalidadSp: "Spain"
    },
    {
        idSp: "sergibusquets",
        playerSkillSpain: 8,
        NacionalidadSp: "Spain"
    },
    {
        idSp: "daniolmo",
        playerSkillSpain: 8,
        NacionalidadSp: "Spain"
    },
    {
        idSp: "ansufati",
        playerSkillSpain: 6,
        NacionalidadSp: "Spain"
    },
    {
        idSp: "ferrantorres",
        playerSkillSpain: 8,
        NacionalidadSp: "Spain"
    },
    {
        idSp: "morata",
        playerSkillSpain: 8,
        NacionalidadSp: "Spain"
    },
    {
        idSp: "sarabia",
        playerSkillSpain: 8,
        NacionalidadSp: "Spain"
    }

];

//Declaramos el objeto
// Jugadores de la selección Brasileña.

let playerSkillBr = [
    {
        idBr: "alisson",
        playerSkillBrasil: 8,
        NacionalidadBr: "Brazil"
    },
    {
        idBr: "ederson",
        playerSkillBrasil: 5,
        NacionalidadBr: "Brazil"
    },
    {
        idBr: "alexsandro",
        playerSkillBrasil: 7,
        NacionalidadBr: "Brazil"
    },
    {
        idBr: "danilo",
        playerSkillBrasil: 5,
        NacionalidadBr: "Brazil"
    },   
    {
        idBr: "edermilitao",
        playerSkillBrasil: 7,
        NacionalidadBr: "Brazil"
    },

    {
        idBr: "marquinhos",
        playerSkillBrasil: 7,
        NacionalidadBr: "Brazil"
    },
    {
        idBr: "thiagosilva",
        playerSkillBrasil: 9,
        NacionalidadBr: "Brazil"
    },
    {
        idBr: "casemiro",
        playerSkillBrasil: 9,
        NacionalidadBr: "Brazil"
    },
    {
        idBr: "philippecoutinho",
        playerSkillBrasil: 8,
        NacionalidadBr: "Brazil"
    },
    {
        idBr: "fabinho",
        playerSkillBrasil: 7,
        NacionalidadBr: "Brazil"
    },  
    {
        idBr: "fred",
        playerSkillBrasil: 8,
        NacionalidadBr: "Brazil"
    },
    {
        idBr: "lucaspaqueta",
        playerSkillBrasil: 6,
        NacionalidadBr: "Brazil"
    },
    {
        idBr: "antony",
        playerSkillBrasil: 7,
        NacionalidadBr: "Brazil"
    },
    {
        idBr: "gabrieljesus",
        playerSkillBrasil: 6,
        NacionalidadBr: "Brazil"
    },
    {
        idBr: "neymarjr",
        playerSkillBrasil: 9,
        NacionalidadBr: "Brazil"
    },
    {
        idBr: "raphinha",
        playerSkillBrasil: 7,
        NacionalidadBr: "Brazil"
    },
    {
        idBr: "richarlison",
        playerSkillBrasil: 6,
        NacionalidadBr: "Brazil"
    },
    {
        idBr: "viniciusjr",
        playerSkillBrasil: 9,
        NacionalidadBr: "Brazil"
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

