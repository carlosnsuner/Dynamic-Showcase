
let totalCarrito1 = document.getElementById("totalCarrito1");
let precioTotal = 0;
totalCarrito1.innerHTML = `${precioTotal} €`;

//Declaramos el objeto
// Jugadores de la selección Brasileña.

let objetosBr = [
{
    id: "alisson",
    precio: 8
},
{
    id: "ederson",
    precio: 5
},
{
    id: "alexsandro",
    precio: 7
},
{
    id: "danilo",
    precio: 5
},
{
    id: "edermilitao",
    precio: 7
},
{
    id: "marquinhos",
    precio: 7
},
{
    id: "thiagosilva",
    precio: 9
},
{
    id: "casemiro",
    precio: 9
},
{
    id: "philippecoutinho",
    precio: 8
},
{
    id: "fabinho",
    precio: 7
},  
{
    id: "fred",
    precio: 8
},
{
    id: "lucaspaqueta",
    precio: 6
},
{
    id: "antony",
    precio: 7
},
{
    id: "gabrieljesus",
    precio: 6
},
{
    id: "neymarjr",
    precio: 9
},
{
    id: "raphinha",
    precio: 7
},
{
    id: "richarlison",
    precio: 6
},
{
    id: "viniciusjr",
    precio: 9
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
        
        let objetoDeseo = objetosBr.find(objeto => {
            return objeto.id == data
        });
    
        precioTotal += objetoDeseo.precio;
    
        totalCarrito1.innerHTML = `${precioTotal} €`;
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


