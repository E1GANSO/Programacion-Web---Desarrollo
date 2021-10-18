import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';
import Products from './Components/Products';
import ItemProduct from './Components/ItemProduct';
import {BrowserRouter} from 'react-router-dom';
import GridProducts from './Components/GridProduct'
import MisRoutes from './MisRutas';

function App() {
  return (
    <Container fluid>
      <BrowserRouter>
        <Header/>
        <Products/>
        <MisRoutes/>
      </BrowserRouter>
    </Container>
  );
}

export default App;
