import React from "react";
import _ from "lodash";
import { useRecoilState } from "recoil";
import { Button } from "antd";

import CardList from "../card_list";

import { CardDataStore, handleCardDataStore } from "../../store";

import { CardBoardContainer } from "./styles";

import { color } from "../../data/color_data";

const CardBoard = () => {
    const [card, setCard] = useRecoilState(CardDataStore);
    const [handleCard, setHandleCard] = useRecoilState(handleCardDataStore);

    const [count, setCount] = React.useState(_.random(0, 9));

    function onRandom() {
        const randomList = [];
        for (let i = 0; i < 5 - handleCard.length; i++) {
            const random = _.random(
                _.take(card)[0].digit,
                _.takeRight(card)[0].digit,
                false
            );
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

    function onClickHeader() {
        if (count < 9) setCount(count + 1);
        else setCount(1);
    }
 
    return (
        <CardBoardContainer>
            <div className="card-board-header" onClick={onClickHeader}>
                <p>
                    <span style={{ color: color[count].color }}>Cards </span>
                    Shuffle
                </p>
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
