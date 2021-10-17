import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';
import Products from './Components/Products';
import ItemProduct from './Components/ItemProduct';
import GridProduct from './Components/GridProduct';


function App() {
  return (
    <Container fluid>
      <Header/>
      <Products/>
      <GridProduct/>
      <ItemProduct/>
    </Container>
  );
}

export default App;
