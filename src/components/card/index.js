import React from "react";
import ReactCardFlip from "react-card-flip";

import { CardContainer } from "./styles";

const Card = (props) => {
    const { digit = 0, isFlipped = false } = props;

    return (
        <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
            <CardContainer onClick={props.onClick}>
                <div className="digit-box">
                    <p>{digit}</p>
                </div>
            </CardContainer>

            <CardContainer onClick={props.onClick}>
                <div className="digit-box">
                    <p>xxx</p>
                </div>
            </CardContainer>
        </ReactCardFlip>
    );
};

export default Card;
