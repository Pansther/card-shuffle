import React from "react";
import _ from "lodash";
import { useSetRecoilState, useRecoilState, useResetRecoilState } from "recoil";
import { Button } from "antd";

import Card from "../card";

import { CardDataStore, handleCardDataStore } from "../../store";

import { HandleCardListContainer } from "./styles";
 
const HandleCardList = (props) => {
    const { cardData = [] } = props;

    const [isFlipped, setFlip] = React.useState(false);

    const setCardList = useSetRecoilState(CardDataStore);
    const resetCardList = useResetRecoilState(CardDataStore);
    const [handleCard, setHandleCard] = useRecoilState(handleCardDataStore);

    function flipCard(newCardData) {
        setFlip(true);
        setTimeout(() => {
            setHandleCard(newCardData);
        }, 400);
        setTimeout(() => {
            setFlip(false);
        }, 600);
    }

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
        if (handleCard.length > 1 && !isFlipped)
            flipCard(_.shuffle(handleCard));
    }

    function onSort() {
        if (handleCard.length > 1 && !isFlipped)
            flipCard(_.sortBy(handleCard, ["id"]));
    }

    function onDropAll() {
        // setHandleCard([]);
        flipCard([]);
        setTimeout(() => {
            resetCardList();
        }, 600);
    }

    return (
        <HandleCardListContainer>
            <div className="card-list-box">
                {cardData?.map((card) => (
                    <Card
                        className="card"
                        key={card.id}
                        isFlipped={isFlipped}
                        onClick={() => dropCard(card)}
                        {...card}
                    />
                ))}
            </div>

            <div className="button-box">
                <Button
                    type="default"
                    icon={<i className="fas fa-dice"></i>}
                    onClick={onShuffle}
                >
                    SHUFFLE
                </Button>

                <Button
                    type="default"
                    icon={<i className="fas fa-sort"></i>}
                    onClick={onSort}
                >
                    SORT
                </Button>

                <Button
                    type="default"
                    icon={<i className="fas fa-trash-alt"></i>}
                    onClick={onDropAll}
                >
                    DROP ALL
                </Button>
            </div>
        </HandleCardListContainer>
    );
};

export default HandleCardList;
