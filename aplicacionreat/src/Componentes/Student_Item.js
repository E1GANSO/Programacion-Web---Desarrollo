import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import '../CSS/R.css';
import Button from 'react-bootstrap/Button'

const Student_Item = (props)=>{

    const {Nombre, Programa, Semestre} = props.estudiantes;

    return(
        <Row className="item">
            <Col md={2} sm={2}>
                <img src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_960_720.png" id="imagen_Ico"/>
            </Col>
            <Col>
                <span>Nombre: {Nombre}</span>
                <span> ---Programa: {Programa}</span>
                <span className="text-muted"> ---Semestre: {Semestre}</span>
            </Col>
            <Col md={3} sm={3}> 
                <Button variant="primary" size="sm"> verificar </Button>
            </Col>
        </Row>
    );
}


export default Student_Item;