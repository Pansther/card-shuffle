import React from "react";

import { CardContainer } from "./styles";

const Card = (props) => {

    const { digit = 0 } = props;

    return (
        <CardContainer onClick={props.onClick}>
            <div className="digit-box">
                <p>{digit}</p>
            </div>
        </CardContainer>
    );
};

export default Card;