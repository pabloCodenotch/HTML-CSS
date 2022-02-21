class Item
{
    constructor(nombre, tipo, precio)
    {
        this.nombre = nombre;
        this.tipo = tipo;
        this.precio = precio;
    }
}
const item1 = new Item("Jersey Grinch", "jersey", 120);
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

    for(let i = 0; i < carrito.length; i++)
    {
        document.getElementById("carritoprueba").innerHTML += `<p> ${carrito[i].nombre} ${carrito[i].precio}€ </p>`
        console.log(carrito[i].nombre)  

       
    }
    for(let i = 0; i < carrito.length; i++)
    {
        sumaTotal = sumaTotal + carrito[i].precio
        document.getElementById("carritoprueba").innerHTML = `<p> ${sumaTotal}€</p>`
    }

    // document.getElementById("total").innerHTML = `<p>------------- ${sumaTotal}€</p>`

}
    
