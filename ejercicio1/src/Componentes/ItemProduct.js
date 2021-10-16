import React from 'react';
import Col from 'react-bootstrap/esm/Col';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';


const ItemProduct = ({Nombre, Marca, Precio}) =>{

    return(
        <div>
            <Row>
                <Col>
                    <h4>Nombre: {Nombre}</h4>
                </Col>
                <Col>
                    <h4>Marca: {Marca}</h4>
                </Col>
                <Col>
                    <h4>Precio: ${Precio}</h4>
                </Col>
            </Row>

            <Row>
                <Col>
                    <Button variant="success"> Detalles </Button>
                </Col>
                <Col>
                    <Button variant="primary"> Add to the Car </Button>
                </Col>
            </Row>
        </div>
    );
}


export default ItemProduct;