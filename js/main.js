
let totalCarrito1 = document.getElementById("totalCarrito1");
let precioTotal = 0;
totalCarrito.innerHTML = `${precioTotal} €`;

//Declaramos el objeto
// Jugadores de la selección Epañola.

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

    // Jugadores de la selección Brasileña.

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