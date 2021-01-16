import { atom } from "recoil";

import { cardData } from "../data/card_data";

export const CardDataStore = atom({
    key: "CardDataStore",
    default: cardData,
});

export const handleCardDataStore = atom({
    key: "handleCardDataStore",
    default: [],
});
