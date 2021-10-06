function Recorrer_Vector(){
    let tareas = [
    {name:"Comer", duration:5},
    {name:"Jugar PC", duration:210},
    {name:"Programacion", duration:150}];

    //let Nombre_Tareas = tareas.map((t)=> t.name);
    let Nombre_Tareas = tareas.map(function(t) {return t.name});

    Nombre_Tareas.map(name =>{
        console.log(name);
    })

}

