
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
        
     

        // let objetoDeseo = objetos.find(objeto => {
        //     return objeto.id == data
        // });
    
        // precioTotal += objetoDeseo.precio;
    
        // totalCarrito.innerHTML = `${precioTotal} €`;
   

        let SkillSpainFinal = playerSkill.find(objeto => {
            return objeto.id == data
        });
    
        resultSkillSpain += SkillSpainFinal.playerSkillSpain;
    
        skillSpain.innerHTML = `${resultSkillSpain} %`;
    };


// Resultado de las habilidades de los jugadores de Brasil

    // let skillBrasil = document.getElementById("skillBrasil");
    // let resultSkillBrasil = 0;
    // skillBrasil.innerHTML = `${resultSkillBrasil} %`;



// -------------------------

// let totalCarrito2 = document.getElementById("totalCarrito2");
// let precioTotal2 = 0;
// totalCarrito2.innerHTML = `${precioTotal2} %`;


// Jugadores de la selección Brasileña.
// let objetos2 = [
// {
//     id: "alisson",
//     precio: 8
// },
// {
//     id: "ederson",
//     precio: 5
// },
// {
//     id: "alexsandro",
//     precio: 7
// },
// {
//     id: "danilo",
//     precio: 5
// },
// {
//     id: "edermilitao",
//     precio: 7
// },
// {
//     id: "marquinhos",
//     precio: 7
// },
// {
//     id: "thiagosilva",
//     precio: 9
// },
// {
//     id: "casemiro",
//     precio: 9
// },
// {
//     id: "philippecoutinho",
//     precio: 8
// },
// {
//     id: "fabinho",
//     precio: 7
// },  
// {
//     id: "fred",
//     precio: 8
// },
// {
//     id: "lucaspaqueta",
//     precio: 6
// },
// {
//     id: "antony",
//     precio: 7
// },
// {
//     id: "gabrieljesus",
//     precio: 6
// },
// {
//     id: "neymarjr",
//     precio: 9
// },
// {
//     id: "raphinha",
//     precio: 7
// },
// {
//     id: "richarlison",
//     precio: 6
// },
// {
//     id: "viniciusjr",
//     precio: 9
// }

// ];


// Falta adefinir las constantes

// let SkillBrasilFinal = objetos2.find(objetoBrasil => {
//     return objetoBrasil.id == data
// });

// resultSkillBrasil += SkillBrasilFinal.precio;

// skillBrasil.innerHTML = `${resultSkillBrasil} %`;
// };

