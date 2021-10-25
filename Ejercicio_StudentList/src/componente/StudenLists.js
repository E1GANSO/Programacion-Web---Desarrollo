import React, {useState} from "react";
import StudenItem from "./StudenItem";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import StudentForm from "./StudentForm";


const StudenLists =()=>{

  const students_Inicial =[
    {nombre: "Juan Ardila", programa: "Ingenieria Ambiental", semestre: 4},
    {nombre: "Alejandro", programa: "Adm De Empresas", semestre: 5},
    {nombre: "Eliana", programa: "Psicologia", semestre: 6},
    {nombre: "Mateo", programa: "ingenieria de sistemas", semestre: 8},
    {nombre: "Natalia", programa: "Derecho", semestre: 1}
  ]

const [students, setStudent] = useState(students_Inicial);

const alEnviarForm = (studentFrom)=>{
  const idS = students.length + 1;
  const student = {...studentFrom, id:idS};
  setStudent([...students, student]);
}

return(
  <>
    <Row>
        <StudentForm agregar = {alEnviarForm}/>
    </Row>

    <Row className ="border">
      <Col>
          {
            students.map(s=> (
              <StudenItem student ={s}/>
            ))
          }
      </Col>
    </Row>
  </>
  );
}

export default StudenLists;

/*
  <Row>
    <StudentForm agregar = {alEnviarForm}/>
  </Row>
*/