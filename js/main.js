
// Resultado de las habilidades de los jugadores de España

let totalCarrito = document.getElementById("totalCarrito");
let precioTotal = 0;
totalCarrito.innerHTML = `${precioTotal} €`;

// let skillSpain = document.getElementById("skillSpain");
// let resultSkillSpain = 0;
// skillSpain.innerHTML = `${resultSkillSpain} %`;

//Declaramos el objeto
// Jugadores de la selección Epañola.

let objetos = [
    {
        id: "unaisimon",
        precio: 8
    },
    {
        id: "robertsanchez",
        precio: 8
    },
    {
        id: "azpilizcueta",
        precio: 8
    },
    {
        id: "ericgarcia",
        precio: 8
    },
    {
        id: "jordialba",
        precio: 8
    },
    {
        id: "laporte",
        precio: 8
    },
    {
        id: "pautorres",
        precio: 8
    },
    {
        id: "gavi",
        precio: 8
    },
    {
        id: "kike",
        precio: 8
    },
    {
        id: "marcosllorente",
        precio: 8
    },
    {
        id: "pedri",
        precio: 8
    },
    {
        id: "rodri",
        precio: 8
    },
    {
        id: "sergibusquets",
        precio: 8
    },
    {
        id: "daniolmo",
        precio: 8
    },
    {
        id: "ansufati",
        playerSkillSpain: 6
    },
    {
        id: "ferrantorres",
        precio: 8
    },
    {
        id: "morata",
        precio: 8
    },
    {
        id: "sarabia",
        precio: 8
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
        // ev.target.appendChild(document.getElementById(data));
        
        let objetoDeseo = objetos.find(objeto => {
            return objeto.id == data
        });
    
        precioTotal += objetoDeseo.precio;
    
        totalCarrito.innerHTML = `${precioTotal} €`;
    };





// Pendiente de revisión



//     const drag = (ev) => {
//         ev.dataTransfer.setData("text", ev.target.id);
    
//         // console.log("arrastrando...", ev.target.id);
//     };
    
//     const allowDrop = (ev) => {
//         ev.preventDefault();
//     };
    
//     const drop = (ev) => {
//         ev.preventDefault();
    
//         let data = ev.dataTransfer.getData("text");
//         let SkillSpainFinal = playerSkillSp.find(spain => {
//             return spain.id == data
//         });
//     pla
//         resultSkillSpain += SkillSpainFinal.playerSkillSpain;
    
//         skillSpain.innerHTML = `${resultSkillSpain} %`;
//     };
