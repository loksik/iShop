import React from "react";
import {Spinner} from "react-bootstrap";

const Loader = () => {
    return (
        <div className="center">
            <Spinner nimation="border" variant="success" animation="border"/>
        </div>
    );
};

export {Loader};
