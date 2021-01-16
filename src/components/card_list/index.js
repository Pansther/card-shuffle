import React from "react";
import _ from "lodash";
import { useRecoilState } from "recoil";

import Card from "../card";

import { CardDataStore, handleCardDataStore } from "../../store";

import { CardListContainer } from "./styles";

const CardList = (props) => {
    const { cardData = [] } = props;

    const [cardList, setCardList] = useRecoilState(CardDataStore);
    const [handleCard, setHandleCard] = useRecoilState(handleCardDataStore);

    React.useEffect(() => {
        setCardList(_.sortBy(cardData, ["id"]));
        // eslint-disable-next-line
    }, []);

    function pickupCard(pickedCard) {
        const newCardList = _.filter(cardList, (card) => {
            if (card.id !== pickedCard.id) {
                return card;
            }
        });

        if (handleCard.length < 5) {
            setCardList(newCardList);
            setHandleCard((prev) => [...prev, pickedCard]);
        }
    }

    return (
        <CardListContainer>
            {cardData?.map((card) => (
                <Card
                    key={card.id}
                    digit={card.digit}
                    onClick={() => pickupCard(card)}
                />
            ))}
        </CardListContainer>
    );
};

export default CardList;
