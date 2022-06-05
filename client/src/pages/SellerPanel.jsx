import React, {useContext, useState} from 'react';
import {Button, Col, Container, Row} from "react-bootstrap";
import CreateProduct from "../components/modals/CreateProduct";
import CreateStoreProduct from "../components/modals/CreateStoreProduct";
import CreateTypeProduct from "../components/modals/CreateTypeProduct";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {logDOM} from "@testing-library/react";

const SellerPanel = observer(() => {
    const {user} = useContext(Context)

    const [storeProductVisible, setStoreProductVisible] = useState(false)
    const [typeProductVisible, setTypeProductVisible] = useState(false)
    const [productVisible, setProductVisible] = useState(false)
    
    return (
        <Container className="d-flex flex-column">
            <Row>
                <Col xs={12} className="seller-btn">
                    {/* todo Начиная с фрагмента выносится в отдельный компонент */}
                    {/* todo Кнопка тоже по сути отдельный компонент */}
                    {user.isAuthSeller === true && <>
                        <Button
                            variant="outline-dark"
                            className="mt-4 p-2"
                            onClick={() => setTypeProductVisible(true)}
                        >
                            Добавить тип
                        </Button>

                        <Button
                            variant="outline-dark"
                            className="mt-4 p-2"
                            onClick={() => setStoreProductVisible(true)}
                        >
                            Добавить продавца
                        </Button>

                        <Button
                            variant="outline-dark"
                            className="mt-4 p-2"
                            onClick={() => setProductVisible(true)}
                        >
                            Добавить продукт
                        </Button>

                        <CreateStoreProduct show={storeProductVisible} onHide={() => setStoreProductVisible(false)}/>
                        <CreateProduct show={productVisible} onHide={() => setProductVisible(false)}/>
                        <CreateTypeProduct show={typeProductVisible} onHide={() => setTypeProductVisible(false)}/>
                    </>}
                </Col>
            </Row>

            <Row className="main">
                <b>Данные профиля</b>
                <Col xs={12} md={6}>
                    {/* todo По сути это тоже компонент */}
                    <div className="mt-2">
                        <b><i>ФИО:</i></b> {"Хуйкин Пикон Долбоевич"}
                    </div>
                    <div className="mt-2">
                        <b><i>Телефон:</i></b> {"8-900-093-22-33"}
                    </div>
                </Col>
                
                <Col xs={12} md={6}>
                    <div className="mt-2">
                        <b><i>Почта:</i></b> {"rsrsr@dtd.rrr"}
                    </div>
                    <div className="mt-2">
                        <b><i>Адрес доставки</i></b>: {"г. Пироскинов"}
                    </div>
                </Col>
            </Row>
        </Container>
    );
});

export default SellerPanel;
