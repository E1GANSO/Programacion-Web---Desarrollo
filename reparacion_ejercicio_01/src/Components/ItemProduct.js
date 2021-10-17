import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/esm/Col';
import Button from 'react-bootstrap/Button';

function ItemProduct({nombre, marca, precio}){

    if({nombre}!=="" &&  {marca}!==""){
        return(
            <div id="Color_Row">
                <Row>
                    <Col>
                        <p>Nombre: {nombre}</p>
                    </Col>
                    <Col>
                        <p>Marca: {marca}</p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h5>Precio ${precio}</h5>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Button id="Color_Text_Button">Detalles</Button>
                    </Col>
                    <Col>
                        <Button variant="primary">Agregar al carrito</Button>
                    </Col>
                </Row>
            </div>
        );
    }
    else{
        return(<h4>Datos vacios</h4>);
    }
}


export default ItemProduct;