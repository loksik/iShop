import React, {useState} from 'react';
import {Button, Container} from "react-bootstrap";
import CreateProduct from "../components/modals/CreateProduct";
import CreateStoreProduct from "../components/modals/CreateStoreProduct";
import CreateTypeProduct from "../components/modals/CreateTypeProduct";

const SellerPanel = () => {
    const [storeProductVisible, setStoreProductVisible] = useState(false)
    const [typeProductVisible, setTypeProductVisible] = useState(false)
    const [productVisible, setProductVisible] = useState(false)
    return (
        <Container className="d-flex flex-column">
            <Button
                variant={"outline-dark"}
                className="mt-4 p-2"
                onClick={() => setTypeProductVisible(true)}
            >
                Добавить тип
            </Button>
            <Button
                variant={"outline-dark"}
                className="mt-4 p-2"
                onClick={() => setStoreProductVisible(true)}
            >
                Добавить продовца
            </Button>
            <Button
                variant={"outline-dark"}
                className="mt-4 p-2"
                onClick={() => setProductVisible(true)}
            >
                Добавить продукт
            </Button>
            <CreateStoreProduct show={storeProductVisible} onHide={() => setStoreProductVisible(false)}/>
            <CreateProduct show={productVisible} onHide={() => setProductVisible(false)}/>
            <CreateTypeProduct show={typeProductVisible} onHide={() => setTypeProductVisible(false)}/>
        </Container>
    );
};

export default SellerPanel;