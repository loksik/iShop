import React from 'react';
import {Col, Container, Row} from "react-bootstrap";

const Profile = () => {
    return (
        <Container className="d-flex flex-column">
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
};

export default Profile;