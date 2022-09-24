
// Resultado de las habilidades de los jugadores de España

let skillSpain = document.getElementById("skillSpain");
let resultSkillSpain = 0;
skillSpain.innerHTML = `${resultSkillSpain} %`;

//Declaramos el objeto
// Jugadores de la selección Epañola.

let playerSkill = [
    {
        id: "unaisimon",
        playerSkillSpain: 8
    },
    {
        id: "robertsanchez",
        playerSkillSpain: 6
    },
    {
        id: "azpilizcueta",
        playerSkillSpain: 9
    },
    {
        id: "ericgarcia",
        playerSkillSpain: 7
    },
    {
        id: "jordialba",
        playerSkillSpain: 9
    },
    {
        id: "laporte",
        playerSkillSpain: 5
    },
    {
        id: "pautorres",
        playerSkillSpain: 7
    },
    {
        id: "gavi",
        playerSkillSpain: 8
    },
    {
        id: "kike",
        playerSkillSpain: 6
    },
    {
        id: "marcosllorente",
        playerSkillSpain: 8
    },
    {
        id: "pedri",
        playerSkillSpain: 9
    },
    {
        id: "rodri",
        playerSkillSpain: 5
    },
    {
        id: "sergibusquets",
        playerSkillSpain: 9
    },
    {
        id: "daniolmo",
        playerSkillSpain: 7
    },
    {
        id: "ansufati",
        playerSkillSpain: 6
    },
    {
        id: "ferrantorres",
        playerSkillSpain: 7
    },
    {
        id: "morata",
        playerSkillSpain: 8
    },
    {
        id: "sarabia",
        playerSkillSpain: 6
    }
];

    const drag = (ev) => {
        ev.dataTransfer.setData("text", ev.target.id);
    
        // console.log("arrastrando...", ev.target.id);
    };
    
    const allowDrop = (ev) => {
        ev.preventDefault();
    };
    
    const drop = (ev) => {
        ev.preventDefault();
    
        let data = ev.dataTransfer.getData("text");
        let SkillSpainFinal = playerSkill.find(spain => {
            return spain.id == data
        });
    
        resultSkillSpain += SkillSpainFinal.playerSkillSpain;
    
        skillSpain.innerHTML = `${resultSkillSpain} %`;
    };
