import { atom } from "recoil";

import { cardData } from "../data/card_data";

export const CardDataStore = atom({
    key: "CardDataStore",
    default: cardData,
    persistence_UNSTABLE: {
        type: "CardDataStore",
    },
});

export const handleCardDataStore = atom({
    key: "handleCardDataStore",
    default: [],
    persistence_UNSTABLE: {
        type: "handleCardDataStore",
    },
});
