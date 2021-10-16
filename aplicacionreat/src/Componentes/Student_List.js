import React from 'react';
import Student_Item from './Student_Item';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/esm/Col';

const Student_List = ()=>{

    const Students = [
        {
            id:      1,
            Nombre: "Alvaro Pedrozo",
            Programa: "Ingenieria en Sistemas",
            Semestre: "Octavo 8"
        },
        {
            id:      2,
            Nombre: "Brayan Duran",
            Programa: "Ingenieria en Sistemas",
            Semestre: "Noveno 9"
        },
        {
            id:     3,
            Nombre: "Lina Marcela",
            Programa: "Licenciatura Humanidades",
            Semestre: "segundo 2"
        },
        {
            id:    4,
            Nombre: "Shalom Castro",
            Programa: "Negocios Internacionales",
            Semestre: "Octavo 8"
        },
        {
            id:    5,
            Nombre: "Ariel Yance",
            Programa: "Ingenieria Mecatronica",
            Semestre: "Cuarto 4"
        }
    ];

    return(
        <Row>
            <Col>
            {
                Students.map((s)=> (<Student_Item estudiantes = {s}/>) )
            }
            </Col>
        </Row>
    );
}

export default Student_List;