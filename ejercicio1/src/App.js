
import Container from 'react-bootstrap/Container';
import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  let State_Inicial = "Mateo";
  let [Nom_Varib_Camb, SetNom_Variab_State] = useState(State_Inicial);
  return (
    <Container fluid>
      <div className="row" text-center>
          <h1>{State_Inicial}</h1>
        
          <span>Modificando la variable de Estado</span>
          <input type="button" value={Nom_Varib_Camb}
            onChange={ evento => SetNom_Variab_State(evento.target.value)}/>
      </div>
    </Container>
  );
}
export default App;
