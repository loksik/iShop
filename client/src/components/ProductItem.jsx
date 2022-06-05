import React from 'react';
import {Card, Col, Image} from "react-bootstrap";
import star from '../assets/img/army.png'
import {PRODUCT_ROUTE} from "../urls/consts";
import { useNavigate } from 'react-router-dom';

const ProductItem = ({product}) => {
    const navigate = useNavigate ()
    return (
        <Col md={3} className={"mt-3"} onClick={() =>navigate(PRODUCT_ROUTE + '/' + product.id)}>
            <Card style={{width: 150, cursor: 'pointer'}} border={"light"}>
                <Image width={150} height={150} src={'http://localhost:4060/' + product.img}/>
                <div className="text-black-50 mt-1 d-flex justify-content-between align-items-center">
                    <div>Продукт...</div>
                    <div className="d-flex align-items-center">
                        <div>{product.rating}</div>
                    <Image width={20} height={20} src={star}/>
                    </div>
                </div>
                <div>{product.name}</div>
            </Card>
        </Col>
    );
};

export default ProductItem;
