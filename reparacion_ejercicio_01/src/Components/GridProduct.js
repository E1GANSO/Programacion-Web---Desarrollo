import 'bootstrap/dist/css/bootstrap.min.css';
import ItemProduct from './ItemProduct';
import React from 'react';



function GridProduct(){
    

    const List_Product = [
        {
            id: 1,
            nombre: "Arroz suelto",
            marca: "Gorgojo",
            precio: 2403
        },
        {
            id: 2,
            nombre: "Don sabor",
            marca: "Zobaco",
            precio: 650
        },
        {
            id: 3,
            nombre: "Cepillo de dientes",
            marca: "Ada madrina",
            precio: 3210
        },
        {
            id: 4,
            nombre: "Energizante",
            marca: "Morrocollo",
            precio: 1650
        },
        {
            id: 5,
            nombre: "Salza",
            marca: "Ratatouille",
            precio: 3620
        },
        {
            id: 6,
            nombre: "Cafe",
            marca: "Blanco",
            precio: 3500
        },
        {
            id: 7,
            nombre: "Pollitos",
            marca: "Enfuga",
            precio: 2403
        },
        {
            id: 8,
            nombre: "Queso",
            marca: "Wallas",
            precio: 1403
        },
        {
            id: 9,
            nombre: "Desodorante",
            marca: "Batman",
            precio: 700
        },
        {
            id: 10,
            nombre: "Pinta labios",
            marca: "El ñato",
            precio: 3500
        }
        
    ];

    /*
    return (
        <div className="col-md-4"> {List_Product.map(e=> (<ItemProduct nombre = {e.nombre}  marca = {e.marca} precio = {e.precio}/>))} </div>
    );  
    */

    return(
        <section>
            <div className="row">
                {List_Product.map(e=> (<div className="col-4"> <ItemProduct id={e.id} nombre = {e.nombre}  marca = {e.marca} precio = {e.precio}/></div>))}
            </div>
        </section>
    );

    }



export default GridProduct;