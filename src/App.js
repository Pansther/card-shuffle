import React from "react";
import { useRecoilValue } from "recoil";

import CardList from "./components/card_list";
import HandleCardList from "./components/handle_card_list";

import { CardDataStore, handleCardDataStore } from "./store";
  
import "./App.css";

const App = () => {
    const card = useRecoilValue(CardDataStore);
    const handleCard = useRecoilValue(handleCardDataStore);
  
    return (
        <div className="App">
            <CardList cardData={card} />
            <HandleCardList cardData={handleCard} />
        </div>
    );
};

export default App;
