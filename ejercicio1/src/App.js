
import Container from 'react-bootstrap/Container';
import Header from './Componentes/Header';
import Producto from './Componentes/Producto';
import GridProduct from './Componentes/GridProduct';
import ItemProduct from './Componentes/ItemProduct';


function App() {
  return (
    <Container fluid>
        <Header/>
        <Producto/>
        <GridProduct/>
        <ItemProduct/>
    </Container>
  );
}
export default App;
