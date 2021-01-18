import React from "react";
import ReactCardFlip from "react-card-flip";

import { CardContainer } from "./styles";

const Card = (props) => {
    const { digit = 0, isFlipped = false, color = "black" } = props;
 
    return (
        <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
            <CardContainer onClick={props.onClick}>
                <div className="digit-box" style={{ color }}>
                    <p>{digit}</p>
                </div>
            </CardContainer>

            <CardContainer>
                <div className="digit-box back-box">
                    <div className="back-circle"></div>
                </div>
            </CardContainer>
        </ReactCardFlip>
    );
};

export default Card;
