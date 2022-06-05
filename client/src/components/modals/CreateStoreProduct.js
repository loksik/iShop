import React, {useState} from 'react';
import {Button, Form, Modal} from "react-bootstrap";

const CreateStoreProduct = ({show, onHide}) => {
    const [value, setValue] = useState('')

    // const addStoreProduct = () => {
    //     createStoreProduct({name: value}).then(data => {
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
                    Добавить продовца
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control
                        value={value}
                        onChange={e => setValue(e.target.value)}
                        placeholder={"Введите название продовца"}
                    />
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
                {/*<Button variant="outline-success" onClick={addStoreProduct}>Добавить</Button>*/}
            </Modal.Footer>
        </Modal>
    );
};

export default CreateStoreProduct;