import React, {useContext} from 'react';
import {Card, Row} from "react-bootstrap";
import {Context} from "../index";
import {observer} from "mobx-react-lite";

const RatingList = observer(() => {
    const {product} = useContext(Context)

    return (
        <Row className="d-flex">
            {product.ratings.map(rating => {
                return <Card
                    className={"mt-3 d-flex"}
                    key={rating.id}
                >
                    <Card.Header>Оценка: {rating.rate}</Card.Header>
                    <Card.Body>
                        <blockquote className="blockquote mb-0">
                            <p>
                                {' '}
                                {rating.review}{' '}
                            </p>
                            <footer className="blockquote-footer">
                                {rating.userId} Время: <cite title="Source Title">{rating.createdAt}</cite>
                            </footer>
                        </blockquote>
                    </Card.Body>
                </Card>
            })}
        </Row>
    );
});

export default RatingList;