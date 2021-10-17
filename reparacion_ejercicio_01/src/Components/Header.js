import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/esm/Col';
import './Estilos.css';

function Header (){
    return(
        <Row id="Color_Head">
            <Col>
                <p>Store</p>
             </Col>
            <Col>
                <p>About</p>
            </Col>
            <Col>
                   <p>Cart</p>
            </Col>
        </Row>

    );
}

export default Header;

