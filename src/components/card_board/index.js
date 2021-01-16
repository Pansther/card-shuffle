import React from "react";
import _ from "lodash";
import { useRecoilState } from "recoil";
import { Button } from "antd";

import CardList from "../card_list";

import { CardDataStore, handleCardDataStore } from "../../store";

import { CardBoardContainer } from "./styles";

const CardBoard = () => {
    const [card, setCard] = useRecoilState(CardDataStore);
    const [handleCard, setHandleCard] = useRecoilState(handleCardDataStore);

    function onRandom() {
        const randomList = [];
        for (let i = 0; i < 5 - handleCard.length; i++) {
            const random = _.random(1, 9, false);
            randomList.push(random);
        }

        const randomCardList = _.filter(card, (cardData) => {
            if (_.includes(randomList, cardData.digit)) return cardData;
        });

        const newCardList = _.filter(card, (cardData) => {
            if (!_.includes(randomList, cardData.digit)) return cardData;
        });

        setHandleCard((prev) => [...prev, ...randomCardList]);
        setCard(newCardList);
    }

    return (
        <CardBoardContainer>
            <div className="card-board-header">
                <p>Cards Shuffle</p>
            </div>

            <CardList cardData={card} />

            <div className="button-box">
                <Button
                    type="default"
                    icon={<i className="fas fa-random"></i>}
                    onClick={onRandom}
                >
                    RANDOM
                </Button>
            </div>
        </CardBoardContainer>
    );
};

export default CardBoard;
