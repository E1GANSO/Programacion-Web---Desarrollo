import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/esm/Col';
import Button from 'react-bootstrap/Button';

function ItemProduct({nombre, marca, precio}){

    return(
        <div className="row" id="Color_Row">
            <div className="row">
                <Col>
                    <p>Nombre: {nombre}</p>
                </Col>
                <Col>
                    <p>Marca: {marca}</p>
                </Col>
            </div>
            <div className="row">
                <Col>
                    <h5>Precio ${precio}</h5>
                </Col>
            </div>
            <div className="row">
                <Col>
                    <Button id="Color_Text_Button">Detalles</Button>
                </Col>
                <Col>
                    <Button variant="primary">Agregar al carrito</Button>
                </Col>
            </div>
            </div>
        );





}


export default ItemProduct;