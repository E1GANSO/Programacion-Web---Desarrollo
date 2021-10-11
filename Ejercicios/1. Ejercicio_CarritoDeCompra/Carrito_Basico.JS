/*
    SIMULAR UN CARRITO DE COMPRA
*/

let Carrito = {
    Objetos : [],
    Cantidad_Objetos : 0,
    Total : 0
}

let producto = [{
        Nombre : "PC GAMER",
        Marca : "HP",
        Precio : 17005400,
        id : "1",
        Descripcion : "CPU negro, gabinete especial",
        cantidad : 12
    },

    {
        Nombre : "Monitor LED ULTRA HD",
        Marca : "SAMSUNG",
        Precio : 35000,
        id : "2",
        Descripcion : "Monitor pantalla curva, color blanco",
        cantidad : 35
    },

    {
        Nombre : "MOUSE Y TECLADO GAMER",
        Marca : "MASTER",
        Precio : 24500,
        id : "3",
        Descripcion : "Mouse y teclado color negro, inhalambrico",
        cantidad : 29
    },

    {
        Nombre : "TARJETA NVIDIA GTX 990 TI",
        Marca : "NVIDIA",
        Precio : 34500,
        id : "4",
        Descripcion : "Con ventilacion, distriuidor MSI",
        cantidad : 18
    }
]

function Agregar_Compra(item){
    let Busqueda = Carrito.Objetos.find((p)=>item.id === p.id);
    if(!Busqueda){
        Carrito.Objetos.push({
            ...item,            
            cantidad: 1 //Sobre escribiendo esta propiedad
        })
    }
    else{
        Carrito = {
            ...Carrito,
            item: Carrito.Objetos.map(element => {
                if(element.id === item.id){
                    return {...element, cantidad: element.cantidad + 1};
                }
                else{
                    return element;
                }
            })
        }
    }
}

/*
    if(!Busqueda){
        Carrito.Objetos.push(item);
        Carrito.Cantidad_Objetos += 1;
        Carrito.Total += item.Precio;
    }

    else{
        Carrito.Cantidad_Objetos += 1;
        Carrito.Total += item.Precio;
    }

*/

function Borrar_Item(item){
    let Busqueda = Carrito.Objetos.find((p)=>item.id === p.id);
    if(!Busqueda){
        alert("No se encontro la objeto");
    }
    else{
        Carrito.Cantidad_Objetos -= 1;
        Carrito.Total -= item.Precio;

    }
}


function Mostrar_Carrito(){
    alert(Carrito.Total); 
    alert(Carrito.Cantidad_Objetos);
    for(car of Carrito.Objetos){
           alert(car.Nombre); 
    }
}

