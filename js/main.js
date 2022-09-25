
// Resultado de las habilidades de los jugadores de España

let skillSpain = document.getElementById("skillSpain");
let resultSkillSpain = 0;
skillSpain.innerHTML = `${resultSkillSpain} %`;

// Declaramos el objeto
// Jugadores de la selección Epañola.

let playerSkillSp = [
    {
        id: "unaisimon",
        playerSkillSpain: 8
    },
    {
        id: "robertsanchez",
        playerSkillSpain: 8
    },
    {
        id: "azpilizcueta",
        playerSkillSpain: 8
    },
    {
        id: "ericgarcia",
        playerSkillSpain: 8
    },
    {
        id: "jordialba",
        playerSkillSpain: 8
    },
    {
        id: "laporte",
        playerSkillSpain: 8
    },
    {
        id: "pautorres",
        playerSkillSpain: 8
    },
    {
        id: "gavi",
        playerSkillSpain: 8
    },
    {
        id: "kike",
        playerSkillSpain: 8
    },
    {
        id: "marcosllorente",
        playerSkillSpain: 8
    },
    {
        id: "pedri",
        playerSkillSpain: 8
    },
    {
        id: "rodri",
        playerSkillSpain: 8
    },
    {
        id: "sergibusquets",
        playerSkillSpain: 8
    },
    {
        id: "daniolmo",
        playerSkillSpain: 8
    },
    {
        id: "ansufati",
        playerSkillSpain: 6
    },
    {
        id: "ferrantorres",
        playerSkillSpain: 8
    },
    {
        id: "morata",
        playerSkillSpain: 8
    },
    {
        id: "sarabia",
        playerSkillSpain: 8
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
        let FinalSp = playerSkillSp.find(objeto => {
            return objeto.id == data
        });
    
        resultSkillSpain += FinalSp.playerSkillSpain;
    
        skillSpain.innerHTML = `${resultSkillSpain} %`;
    };

