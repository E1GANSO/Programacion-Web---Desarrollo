import Button from 'react-bootstrap/Button';
import ListCart from '../pages/ListCart';

function ItemProduct({id, nombre, marca, precio}){

    return(
        <div className="row" id="Color_Row">
            <div className="row">
                <div className ="col">
                    <p>Nombre: {nombre}</p>
                </div>
                <div className ="col">
                    <p>Marca: {marca}</p>
                </div>
            </div>
            <div className="row">
                <div className ="col">
                    <h5>Precio ${precio}</h5>
                </div>
            </div>
            <div className="row">
                <div className ="col">
                    <Button id="Color_Text_Button">Detalles</Button>
                </div>
                <div className ="col">
                    <Button  variant="primary" name = {<ListCart id={id} nombre={nombre} marca={marca} precio={precio} />} >Agregar al carrito</Button>
                </div>
            </div>
        </div>
        );





}


export default ItemProduct;