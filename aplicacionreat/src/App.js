import './App.css';
import Header from './Componentes/Header';
import Student_List from './Componentes/Student_List';
import Footer from './Componentes/Footer';
import Container from 'react-bootstrap/Container';


function App() {
  return (
    <Container fluid>
        <Header/>
        <Student_List/>
        <Footer/>
    </Container>
  );
}

export default App;
