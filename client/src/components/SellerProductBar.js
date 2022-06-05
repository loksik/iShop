import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {Card, Col, Row} from "react-bootstrap";

const SellerProductBar = observer(() => {
    const {product} = useContext(Context)

    return (
        <Row className="d-flex">
            <Col md={12} className="d-flex">
                {product.storeProducts.map(storeProduct =>
                    <Card
                        style={{cursor: 'pointer'}}
                        key={storeProduct.id}
                        className="p-3"
                        onClick={() => product.setSelectedStoreProduct(storeProduct)}
                        border={storeProduct.id === product.selectedStoreProduct.id ? 'danger' : 'light'}
                    >
                        {storeProduct.name}
                    </Card>
                )}
            </Col>
        </Row>
    );
});

export default SellerProductBar;