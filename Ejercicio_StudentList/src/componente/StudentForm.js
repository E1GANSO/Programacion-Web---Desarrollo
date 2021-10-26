import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';


export default function StudentForm (props){

  const stateInicialForm = {
    nombre: "",
    programa: "",
    semestre: ""
  };

  const [stateForm, setStateForm] = useState(stateInicialForm);
  
  const gestionar_Form = event =>{
    const {name, value} = event.target;
    setStateForm({...stateForm, [name]:value});
  }
  
  const onSubmitForm = ev =>{
    ev.preventDefault();
    props.agregar(stateForm);

  setStateForm(stateInicialForm);
  }


//ELEMENTOS DEL MODAL
const [show, setShow] = useState(false);
  
const handleClose = () => setShow(false);
const handleShow = () => setShow(true);
  
return (
<div className="col-4">
  <Button variant="primary" onClick={handleShow}>
    Agregar
  </Button>
  
  <Modal show={show} onHide={handleClose}>
    <Modal.Header closeButton>
      <Modal.Title>Agregar Datos</Modal.Title>
    </Modal.Header>
          
    <Modal.Body>
    <form onSubmit={onSubmitForm}>

    <div className="mb-3">
    <label htmlFor ="nameStudent" className="form-label">Name</label>
    <input type="text" name = "nombre" className="form-control" id="nameStudent" value = {stateForm.nombre} onChange = {gestionar_Form}/>
    </div>
    <div className="mb-3">
    <label htmlFor ="program" className="form-label">Programa</label>
    <input type="text" name = "programa" className="form-control" id="program" value = {stateForm.programa} onChange = {gestionar_Form}/>
    </div>
    <div className="mb-3">
    <label htmlFor ="grade" className="form-label">semestre</label>
    <input type="text" name="semestre" className="form-control" id="grade" value = {stateForm.semestre} onChange = {gestionar_Form}/>
    </div>
    <div>
      <button type="submit" className="btn btn-primary">Sign in</button>
    </div>

    </form>
    </Modal.Body>
            
    <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
           Cerrar
        </Button>
        <Button variant="primary" onClick={handleClose}>
            Enviar
        </Button>
        </Modal.Footer>
      </Modal>
</div>
);
}


/*
export default function StudentForm (props){

  const stateInicialForm = {
    nombre: "",
    programa: "",
    semestre: ""
  };

  const [stateForm, setStateForm] = useState(stateInicialForm);
  
  const gestionar_Form = event =>{
    const {name, value} = event.target;
    setStateForm({...stateForm, [name]:value});
  }
  
  const onSubmitForm = ev =>{
    ev.preventDefault();
    props.agregar(stateForm);

  setStateForm(stateInicialForm);
  }

const [show, setShow] = useState(false);
      
const handleClose = () => setShow(false);
const handleShow = () => setShow(true);


  return(
<>
<div className="col-4">
      <Button variant="primary" onClick={handleShow}>
        Agregar
      </Button>
      
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Agregar Datos</Modal.Title>
        </Modal.Header>
              
        <Modal.Body>
          <form onSubmit={onSubmitForm}>
              <div className="mb-3">
                <label htmlFor ="nameStudent" className="form-label">Name</label>
                <input type="text" name = "nombre" className="form-control" id="nameStudent" value = {stateForm.nombre} onChange = {gestionar_Form}/>
              </div>
              <div className="mb-3">
                <label htmlFor ="program" className="form-label">Programa</label>
                <input type="text" name = "programa" className="form-control" id="program" value = {stateForm.programa} onChange = {gestionar_Form}/>
              </div>
              <div className="mb-3">
                <label htmlFor ="grade" className="form-label">semestre</label>
                <input type="text" name="semestre" className="form-control" id="grade" value = {stateForm.semestre} onChange = {gestionar_Form}/>
              </div>
              <div>
                <button type="submit" className="btn btn-primary">Agregar</button>
              </div>     
          </form>
        </Modal.Body>
                
        <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
               Cerrar
            </Button>
            <Button variant="primary" onClick={handleClose}>
                Enviar
            </Button>
            </Modal.Footer>
          </Modal>
    </div>
</>
        
  
  );
}
*/



/*
<form onSubmit={onSubmitForm}>

            <div className="mb-3">
              <label htmlFor ="nameStudent" className="form-label">Name</label>
              <input type="text" name = "nombre" className="form-control" id="nameStudent" value = {stateForm.nombre} onChange = {gestionar_Form}/>
            </div>
            <div className="mb-3">
              <label htmlFor ="program" className="form-label">Programa</label>
              <input type="text" name = "programa" className="form-control" id="program" value = {stateForm.programa} onChange = {gestionar_Form}/>
            </div>
            <div classNamea="mb-3">
              <label htmlFor ="grade" className="form-label">semestre</label>
              <input type="text" name="semestre" className="form-control" id="grade" value = {stateForm.semestre} onChange = {gestionar_Form}/>
            </div>
                    
          </form>
*/






/*
<form>
  <div className="mb-3">
    <label htmlFor ="nameStudent" className="form-label">Name</label>
    <input type="text" className="form-control" id="nameStudent"/>
  </div>
  <div className="mb-3">
    <label htmlFor ="program" className="form-label">Programa</label>
    <input type="text" className="form-control" id="program"/>
  </div>
  <div classNamea="mb-3">
    <label htmlFor ="grade" className="form-label">semestre</label>
      <input type="text" className="form-control" id="grade"/>
    </div>
    <div>
      <button type="submit" className="btn btn-primary">Sign in</button>
    </div>
  </form>
*/