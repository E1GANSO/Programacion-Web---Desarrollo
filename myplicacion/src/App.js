import React from 'react';
import './App.css';
import Tareas from './Datos_Tareas/Tareas.json'


/*
// USO DE LOS PROPS 

function Hola_Mundo(props){
  return (
    <div id="Mundo_CSS">
      <h3>{props.nombre}</h3>
      <p>{props.modelo}</p>
      </div>
  );
}


//USO DE LOS ESTADOS CON CLASES
class Hola_Mundo extends React.Component{

  //Objeto de estado
  state = {
    show: true
  }

  render(){
    if(this.state.show){
      return(
        <div id="Mundo_CSS">
          <h3>{this.props.nombre}</h3>
          <p>{this.props.modelo}</p>
          <button onClick = {()=> this.setState({show: false})} >Cambiar FALSO</button>
        </div>
      );
    }
    else{
      return(
        <div id="Mundo_CSS">
          <h3>Ryzen</h3>
          <button onClick={()=> {this.setState({show:true})}}>Cambiar VERDADERO</button>
        </div>
      );
    }
  }
}

function App() {
  return (
    <div>
      Esta es mi funcion: 
      <Hola_Mundo nombre="icore i5" modelo="2400"/>
      <Hola_Mundo nombre="NVIDIA"   modelo="GT 710"/>
      <Hola_Mundo nombre="16GB RAM" modelo="ASUS"/> 
    </div>
  );
}

*/






//---------------------------------------------------------------------------------------------------------------

class App extends React.Component{

  state = {
    Lista_Tareas : Tareas
  }

  render(){
    return(
      <div>
        {
          this.state.Lista_Tareas.map(( e=> <p key={e.id}>{e.id} -- {e.Titulo} -- {e.Descripcion} </p>))
        }
      </div>
    );
  }
}





export default App;
