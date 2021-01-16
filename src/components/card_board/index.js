import React from "react";
import { useRecoilValue } from "recoil";

import CardList from "../card_list";

import { CardDataStore } from "../../store";

import { CardBoardContainer } from "./styles";

const CardBoard = () => {
    const card = useRecoilValue(CardDataStore);

    return (
        <CardBoardContainer>
            <div className="card-board-header">
                <p>Cards Shuffle</p>
            </div>

            <CardList cardData={card} />
        </CardBoardContainer>
    );
};

export default CardBoard;
