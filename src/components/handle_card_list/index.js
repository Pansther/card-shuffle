import React from "react";
import _ from "lodash";
import { useSetRecoilState, useRecoilState } from "recoil";

import Card from "../card";

import { CardDataStore, handleCardDataStore } from "../../store";

import { HandleCardListContainer } from "./styles";

const HandleCardList = (props) => {
    const { cardData = [] } = props;

    const setCardList = useSetRecoilState(CardDataStore);
    const [handleCard, setHandleCard] = useRecoilState(handleCardDataStore);

    function dropCard(droppedCard) {
        const newCardList = _.filter(handleCard, (card) => {
            if (card.id !== droppedCard.id) {
                return card;
            }
        });

        setHandleCard(newCardList);
        setCardList((prev) => [...prev, droppedCard]);
    }

    function onShuffle() {
        const newHandle = _.shuffle(handleCard);
        setHandleCard(newHandle);
    }

    return (
        <HandleCardListContainer>
            <div className="card-list-box">
                {cardData?.map((card) => (
                    <Card
                        key={card.id}
                        digit={card.digit}
                        onClick={() => dropCard(card)}
                    />
                ))}
            </div>

            <div className="button-box">
                <button onClick={onShuffle}>Shuffle</button>
            </div>
        </HandleCardListContainer>
    );
};

export default HandleCardList;
