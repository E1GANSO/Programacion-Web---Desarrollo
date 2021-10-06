function Imprimir_Mensaje(){
    let persona = {
        nombre:"Julian Pizarro",
        edad: 42,
        sexo: "masculino",
        Imprimir:function(){
            console.log("Nombre: "+persona.nombre+" Edad: "+persona.edad+" Genero: "+persona.sexo);
        }
    };
    persona.Imprimir();
}