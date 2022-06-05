import React from "react";
import {Button, Col, Container, Row, Table} from "react-bootstrap";

const temp = [1, 2, 3, 6, 8];
// const temp = [];

const Basket = () => {
    if (temp.length < 1) {
        return <div className="center">
            Корзина пуста!
        </div>
    }
    
    return (
        <div className="main">
            <Container>
                <Table responsive>
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Товар</th>
                        <th>Изделие</th>
                        <th>Цена</th>
                        <th>Количество</th>
                        <th>Скидка</th>
                        <th>Итого</th>
                        <th/>
                    </tr>
                    </thead>
                    
                    <tbody>
                    {temp.map((item, index) =>
                        // todo Тут у key должен быть id товара
                        // todo Ну и вставить данные
                        <tr key={item}>
                            <td>{index + 1}</td>
                            <td>
                                <img src="https://cs13.pikabu.ru/avatars/647/x647474-2061751757.png"
                                     alt="Картинка товара"
                                     className="basket-img"
                                />
                            </td>
                            <td>Otto</td>
                            <td>100</td>
                            <td>1</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                            <td className="cursor"
                                onClick={() => console.log("Удаление товара")}>
                                &#10006;
                            </td>
                        </tr>
                    )}
                    </tbody>
                </Table>

                {temp.length > 0 && <Row className="basket-total">
                    <Col xs={12} md={{span: 4, offset: 8}}>
                        <b>Итоговая сумма заказа</b>
                        <div>Цена: {500} ₽</div>
                        <div>Количество: {500} шт</div>
                        {/* todo По сути тут с бэка может прийти готовая строка или массив, но лучше нахер это */}
                        <div>Продавцы: {500}</div>
                        <Button
                            variant={"outline-success"}
                            className="mt-2"
                            onClick={() => console.log("Оформить")}
                        >
                            Оформить
                        </Button>
                    </Col>
                </Row>}
            </Container>
        </div>
    );
};

export default Basket;
