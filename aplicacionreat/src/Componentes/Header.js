import React from 'react';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/Row';


const Header = () =>{
    return (
        <Row>
            <Col className="py5 text-center border">
                <h1>Gestion de Estudiantes</h1>
                <h4>Crear/Borrar/Actualizar/Consultar/</h4>
            </Col>
        </Row>
    );
}

export default Header;