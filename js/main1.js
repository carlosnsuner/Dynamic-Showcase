
// Resultado de las habilidades de los jugadores de Brasil

let skillBrasil = document.getElementById("skillBrasil");
let resultSkillBrasil = 0;
skillBrasil.innerHTML = `${resultSkillBrasil} €`;

//Declaramos el objeto
// Jugadores de la selección Brasileña.

let playerSkillBr = [
{
    id: "alisson",
    playerSkillBrasil: 8
},
{
    id: "ederson",
    playerSkillBrasil: 5
},
{
    id: "alexsandro",
    playerSkillBrasil: 7
},
{
    id: "danilo",
    playerSkillBrasil: 5
},
{
    id: "edermilitao",
    playerSkillBrasil: 7
},
{
    id: "marquinhos",
    playerSkillBrasil: 7
},
{
    id: "thiagosilva",
    playerSkillBrasil: 9
},
{
    id: "casemiro",
    playerSkillBrasil: 9
},
{
    id: "philippecoutinho",
    playerSkillBrasil: 8
},
{
    id: "fabinho",
    playerSkillBrasil: 7
},  
{
    id: "fred",
    playerSkillBrasil: 8
},
{
    id: "lucaspaqueta",
    playerSkillBrasil: 6
},
{
    id: "antony",
    playerSkillBrasil: 7
},
{
    id: "gabrieljesus",
    playerSkillBrasil: 6
},
{
    id: "neymarjr",
    playerSkillBrasil: 9
},
{
    id: "raphinha",
    playerSkillBrasil: 7
},
{
    id: "richarlison",
    playerSkillBrasil: 6
},
{
    id: "viniciusjr",
    playerSkillBrasil: 9
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
        
        let FinalBr = playerSkillBr.find(Brasil => {
            return Brasil.id == data
        });
    
        resultSkillBrasil += FinalBr.playerSkillBrasil;
    
        skillBrasil.innerHTML = `${resultSkillBrasil} €`;
    };




// Pendiente de revisar

// // Resultado de las habilidades de los jugadores de Brasil

// let skillBrasil = document.getElementById("skillBrasil");
// let resultSkillBrasil = 0;
// skillBrasil.innerHTML = `${resultSkillBrasil} %`;





// const drag = (ev) => {
//     ev.dataTransfer.setData("text", ev.target.id);

//     // console.log("arrastrando...", ev.target.id);
// };

// const allowDrop = (ev) => {
//     ev.preventDefault();
// };

// const drop = (ev) => {
//     ev.preventDefault();

//     let data = ev.dataTransfer.getData("text");
//     let SkillBrasilFinal = objetos.find(brasil => {
//         return brasil.id == data
//     });

//     resultSkillBrasil += SkillBrasilFinal.precio;

//     skillBrasil.innerHTML = `${resultSkillBrasil} %`;
// };


