class Item
{
    constructor(nombre, tipo, precio)
    {
        this.nombre = nombre;
        this.tipo = tipo;
        this.precio = precio;
    }
}
const item1 = new Item("Jersey Grinch de dama", "jersey", 100);
const item2 = new Item("Testilcetines", "calcetines", 20);
const item3 = new Item("Pantalones para cortos", "short", 27);
const item4 = new Item("Rebeca Fantasy", "chaqueta", 199);
const item5 = new Item("Jersey yeti", "jersey", 135);
const item6 = new Item("Abu Style", "conjunto", 200);
const item7 = new Item("Rodilleras Fiesteras", "accesorio", 45);
const item8 = new Item("Merry Jurassik", "jersey", 92.37);


let stock = [item1, item2, item3, item4, item5, item6, item7, item8]



let carrito = [];

function anyadir(position){

     carrito.push(stock[position])
     console.log(carrito)

 

}

function mostrarCarro(){

    let sumaTotal = 0
    document.getElementById("carritoprueba").innerHTML =""
    for(let i = 0; i < carrito.length; i++)
    {
        document.getElementById("carritoprueba").innerHTML += `<p> ${carrito[i].nombre} ${carrito[i].precio}€ </p>`
        console.log(carrito[i].nombre)  

       
    }
    for(let i = 0; i < carrito.length; i++)
    {
        sumaTotal = sumaTotal + carrito[i].precio
        document.getElementById("carritoprueba").innerHTML += `<p> ${sumaTotal}€</p>`
    }

    // document.getElementById("total").innerHTML = `<p>------------- ${sumaTotal}€</p>`

}
    
function mostrar(){


    let mostrarCard = document.getElementById("mostrarcard")


    for(i=0; i< stock.length; i++){

    mostrarCard.innerHTML += `<div class="card m-3" style="width: 18rem;" id="grinch">
                                <img src="https://i.etsystatic.com/7406855/r/il/7e6151/2066788366/il_794xN.2066788366_jrxl.jpg" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <p class="card-text">${stock[i].nombre}</p>
                                    <p>${stock[i].precio}</p>
                                    <button onclick="anyadir(${i})" type="button" class="btn btn-outline-warning">GASTA</button>
                                </div>
                            </div>`

    }


}