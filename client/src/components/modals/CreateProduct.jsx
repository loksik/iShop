import React, {useContext, useState} from 'react';
import {Button, Dropdown, Form, Modal} from "react-bootstrap";
import {Context} from "../../index";

const CreateProduct = ({show, onHide}) => {
    const [value, setValue] = useState('')
    const {product} = useContext(Context)

    // const addProduct = () => {
    //     createProduct({name: value}).then(data => {
    //         setValue('')
    //         onHide()
    //     })
    // }

    return (
        <Modal
            show={show}
            onHide={onHide}
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Добавить товар
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control
                        value={value}
                        onChange={e => setValue(e.target.value)}
                        placeholder={"Введите уникальное название товара"}
                    />
                    <Dropdown className="mt-2 mb-2">
                        <Dropdown.Toggle>Введите тип</Dropdown.Toggle>
                        <Dropdown.Menu>{product.typeProducts.map(typeProduct =>
                            <Dropdown.Item key={typeProduct.id}>{typeProduct.name}</Dropdown.Item>
                        )}</Dropdown.Menu>
                    </Dropdown>
                    <Dropdown className="mt-2 mb-2">
                        <Dropdown.Toggle>Введите продавца</Dropdown.Toggle>
                        <Dropdown.Menu>{product.storeProducts.map(storeProduct =>
                            <Dropdown.Item key={storeProduct.id}>{storeProduct.name}</Dropdown.Item>
                        )}</Dropdown.Menu>
                    </Dropdown>
                    <Form.Control
                        className="mt-3"
                        placeholder={"Введите уникальное название товара"}
                    />
                    <Form.Control
                        className="mt-3"
                        placeholder={"Введите краткое описание товара"}
                    />
                    <Form.Control
                        className="mt-3"
                        placeholder={"Введите подробное описание товара"}
                    />
                    <Form.Control
                        className="mt-3"
                        placeholder={"Введите стоимость товара"}
                        type="number"
                    />
                    <Form.Control
                        className="mt-3"
                        type="file"
                    />

                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
                {/*<Button variant="outline-success" onClick={addProduct}>Добавить</Button>*/}
            </Modal.Footer>
        </Modal>
    );
};

export default CreateProduct;