let nombre = document.getElementById("nombre");
let origen = document.getElementById("origen");
let destino = document.getElementById("destiny");
let numPersonas = document.getElementById("numPersonas");
let fecha = document.getElementById("fecha");

let clientes = []

let filtrado = []

function informacion()
{
    
    let viaje = {
        nombre: nombre.value,
        origen: origen.value,
        destino: destino.value,
        pasajeros: numPersonas.value,
        date: fecha.value,
    }

    clientes.push(viaje)

    console.log(array)
}

function filtro()
{
    for(let i = 0; i< clientes.length; i++)
    {
        let valor = filtrado[i].destino.toUpperCase()
        if(valor == CANARIAS || valor == MALLORCA || valor == GALICIA)
        {
            filtrado.push(valor[i])
        }
        console.log(filtrado)
    }
}