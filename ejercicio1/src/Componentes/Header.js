import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/esm/Col';
import './head.css';

const Header = () =>{
    return (
        <Row id="head_Color">
            <Col className="py5 text-center border">
                <h4>Store</h4>
                <h4>About</h4>
                <h4>Cart</h4>
            </Col>
        </Row>
    );
}

export default Header;