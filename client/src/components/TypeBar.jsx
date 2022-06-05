import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {ListGroup} from "react-bootstrap";

const TypeBar = observer( () => {
    const {product} = useContext(Context)

    return (
        <ListGroup variant="flush">
            {product.typeProducts.map(typeProduct =>
                <ListGroup.Item
                    style={{cursor: 'pointer'}}
                    active={typeProduct.id === product.selectedTypeProduct.id}
                    onClick={() => product.setSelectedTypeProduct(typeProduct)}
                    key={typeProduct.id}
                >
                    {typeProduct.name}
                </ListGroup.Item>

            )}
        </ListGroup>
    );
});

export default TypeBar;
