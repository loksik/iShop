import React, {useContext, useEffect} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import TypeBar from "../components/TypeBar";
import SellerProductBar from "../components/SellerProductBar";
import ProductList from "../components/ProductList";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {fetchProducts, fetchStoreProducts, fetchTypes} from "../http/productAPI";

const Shop = observer(() => {
    const {product} = useContext(Context)

    useEffect(() => {
        fetchTypes().then(data => product.setTypeProducts(data))
        fetchStoreProducts().then(data => product.setStoreProducts(data))
        fetchProducts().then(data => product.setProducts(data.rows))
    }, [])

    if (product.products.length < 1) {
        return <div className="center">
            Товаров не найдено!
        </div>
    }

    return (
        <Container>
            <Row className="mt-2">
                <Col md={3}>
                    <TypeBar/>
                </Col>

                <Col md={9}>
                    <SellerProductBar/>
                    <ProductList/>
                </Col>
            </Row>
        </Container>
    );
});

export default Shop;
