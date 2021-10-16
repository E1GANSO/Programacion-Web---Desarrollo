import React from 'react';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/Row';
import ItemProduct from './ItemProduct';

const GridProduct = ()=>{
    const Products = [
        {
            id: "1",
            Nombre: "Jabón en polvo",
            Marca: "Unico",
            Precio: 1000
        },
        {
            id: "2",
            Nombre: "Espaguetti con Zanahoria",
            Marca: "Sabrozon",
            Precio: 15200
        },
        {
            id: "3",
            Nombre: "Router sin internet",
            Marca: "Claro",
            Precio: 3510
        },
        {
            id: "4",
            Nombre: "Boxer para caballo",
            Marca: "Suevecito",
            Precio: 6840
        },
        {
            id: "5",
            Nombre: "Pinzas para Ojos",
            Marca: "Asiatica",
            Precio: 3642
        },
        {
            id: "6",
            Nombre: "Desodorante",
            Marca: "Morrocollo",
            Precio: 5451
        },
        {
            id: "7",
            Nombre: "Protector solar",
            Marca: "Camello",
            Precio: 8120
        },
        {
            id: "8",
            Nombre: "Calzoncillos",
            Marca: "Pantera",
            Precio: 3510
        }
    ];

    return(
        <Row className="border">
            <Col>
            {
                Products.map(e =>(
                    <>
                        <ItemProduct Nombre={e.Nombre} Marca={e.Marca} Precio={e.Precio}/>
                    </>
                ))
            }
            </Col>
        </Row>
    );

}

export default GridProduct;