
let totalCarrito1 = document.getElementById("totalCarrito1");
let precioTotal = 0;
totalCarrito.innerHTML = `${precioTotal} €`;

//Declaramos el objeto

let objetos = [
    {
        id: "unaisimon",
        precio: 8
    },
    {
        id: "robertsanchez",
        precio: 6
    },
    {
        id: "azpilizcueta",
        precio: 9
    },
    {
        id: "ericgarcia",
        precio: 7
    },
    {
        id: "jordialba",
        precio: 9
    },
    {
        id: "laporte",
        precio: 5
    },
    {
        id: "pautorres",
        precio: 7
    },
    {
        id: "gavi",
        precio: 8
    },
    {
        id: "kike",
        precio: 6
    },
    {
        id: "marcosllorente",
        precio: 8
    },
    {
        id: "pedri",
        precio: 9
    },
    {
        id: "rodri",
        precio: 5
    },
    {
        id: "sergibusquets",
        precio: 9
    },
    {
        id: "daniolmo",
        precio: 7
    },
    {
        id: "ansufati",
        precio: 6
    },
    {
        id: "ferrantorres",
        precio: 7
    },
    {
        id: "morata",
        precio: 8
    },
    {
        id: "sarabia",
        precio: 6
    },



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