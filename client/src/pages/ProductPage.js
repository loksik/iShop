import React, {useEffect, useState} from 'react';
import {Button, Card, Col, Container, Form, Image, Row} from "react-bootstrap";
import star from '../assets/army.png'
import RetingList from "../components/RetingList";
import {useParams} from 'react-router-dom'
import {fetchOneProduct} from "../http/productAPI";

const ProductPage = () => {
    const [product, setProduct] = useState()
    const {id} = useParams()

    useEffect(() => {
        fetchOneProduct(id).then(data => {
            debugger
            console.log(data)
            setProduct(data)
        })

        console.log(fetchOneProduct(id).then(data => setProduct(data)))
    }, [])

    return (
        <Container className="mt-3">
            {product && <>
                <Row>
                    <Col xs={8} md={6}>
                        <Image width={300} height={300} src={'http://localhost:4060/' + product.img}/>
                        <h3 className={"mt-3"}>Продавец: {product.storeProductId}</h3>
                    </Col>
                    <Col md={6}>
                        <Row>
                            <h2>{product.name}</h2>
                            <Col>
                                <h4>Цена от: {product.price} руб.</h4>
                            </Col>
                            <Col>
                                <h5>Рейтинг: {product.rating} <Image width={25} height={25} src={star}/></h5>
                            </Col>
                            <Button className={"mt-3"} variant={"outline-success"}>Добавить в корзину</Button>
                            <Card className={"mt-3 d-flex"}>
                                <Card.Header>Краткое описание товара:</Card.Header>
                                <Card.Body>
                                    <Card.Text>
                                        {product.shortDescription}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            <Card className={"mt-3 d-flex"}>
                                <Card.Header>Описание товара:</Card.Header>
                                <Card.Body>
                                    <Card.Text>
                                        {product.discription}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Row>
                    </Col>
                </Row>

                <h3 className={"mt-3"}>отзовы:</h3>
                <Card className={"mt-3, d-flex"}>
                    <Card.Header>Ваш коментарий:</Card.Header>
                    <Card.Body>
                        <Card.Text>
                            <Form>
                                {['radio'].map((type) => (
                                    <div key={`inline-${type}`} className="mb-3">
                                        <Form.Check
                                            inline
                                            label="1"
                                            name="group1"
                                            type={type}
                                            id={`inline-${type}-1`}
                                        />
                                        <Form.Check
                                            inline
                                            label="2"
                                            name="group1"
                                            type={type}
                                            id={`inline-${type}-2`}
                                        />
                                        <Form.Check
                                            inline
                                            label="3"
                                            name="group1"
                                            type={type}
                                            id={`inline-${type}-3`}
                                        />
                                        <Form.Check
                                            inline
                                            label="4"
                                            name="group1"
                                            type={type}
                                            id={`inline-${type}-4`}
                                        />
                                        <Form.Check
                                            inline
                                            label="5"
                                            name="group1"
                                            type={type}
                                            id={`inline-${type}-5`}
                                        />
                                    </div>
                                ))}
                                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                    <Form.Control as="textarea" rows={3}/>
                                </Form.Group>
                                <Button variant="primary" type="submit">
                                    Submit
                                </Button>
                            </Form>
                        </Card.Text>
                    </Card.Body>
                </Card>

                <RetingList/>

            </>}
        </Container>
    );
};

export default ProductPage;